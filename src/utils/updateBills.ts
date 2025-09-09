import { STORAGE_KEYS } from "../constants/generic";
import type { Customer } from "../types/Customer";
import getAllCustomerData from "./getCustomerData";

export function updateBills(username: string, paymentAmount: number): boolean {

  const customers: Record<string,Customer> = getAllCustomerData();
  if (!customers) throw new Error("No customers found");
  const userBills:Customer[] = Object.values(customers).filter(c => c.name === username);

  if (userBills.length === 0) throw new Error("No Bills found for customers")

  const totalBalance = userBills.reduce((sum, c) => sum + c.balanceAmount, 0);

  if (totalBalance < paymentAmount) {
    throw new Error("Payment exceeds total balance.");
  }

  let remainingPayment = paymentAmount;

  for (const bill of userBills) {
    if (remainingPayment <= 0) break;

    const deduction = Math.min(bill.balanceAmount, remainingPayment);
    bill.balanceAmount -= deduction;
    bill.paidAmount += deduction;
    remainingPayment -= deduction;

    // Update back in record
    customers[bill.billNo] = bill;
  }
  localStorage.setItem(STORAGE_KEYS.customer, JSON.stringify(customers));
  return true;
}