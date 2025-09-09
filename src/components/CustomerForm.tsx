import { useState, type ChangeEvent, type FormEvent } from "react"
import type { Customer } from "../types/Customer";
import { initialValuesCustomer } from "../constants/initialFormValues";
import validateCustomerData from "../utils/validateCustomerData";
import saveCustomerData from "../utils/saveCustomerData";

export default function CustomerForm() {
    const [customerData, setCustomerData] = useState<Customer>(initialValuesCustomer);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomerData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        try {
            e.preventDefault();
            validateCustomerData(customerData)
            saveCustomerData(customerData);
        }
        catch(err:any){
            alert(err.message)
        }
       
    }
    return <form onSubmit={handleSubmit}>
        <h1>Customer Form</h1>
        <label>Customer Name:</label>
        <input type="text" name="name" onChange={handleChange} /><br/>
        <label>Bill No</label>
        <input type="text" name="billNo" onChange={handleChange} /><br/>
           <label>Bill Amount</label>
        <input type="text" name="billAmount" onChange={handleChange} /><br/>
        <button type="submit">
            Submit
        </button>
    </form>
}