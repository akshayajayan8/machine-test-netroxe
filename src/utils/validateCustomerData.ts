import type { Customer } from "../types/Customer";

export default function validateCustomerData(data: Customer) {
    const isFilled = data.billAmount !== 0 && data.billNo !== 0 && data.name !== ''
    if (!isFilled) throw new Error('Fill the Form Before Submission');
    return true
}