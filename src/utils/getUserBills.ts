import type { Customer } from "../types/Customer";
import getAllCustomerData from "./getCustomerData";

export default function getUserBills(userName: string) {
    const data:Record<string,Customer> = getAllCustomerData();
    if (!data)return [];
    return Object.values(data).filter(customer => customer.name === userName);
}