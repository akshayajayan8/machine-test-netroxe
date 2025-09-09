import { use, useState, type ChangeEvent } from "react";
import getAllUserName from "../utils/getAllUserNames";
import CustomerPaymentGrid from "./CustomerPaymentGrid";
import { updateBills } from "../utils/updateBills";

export function Payments() {
    const [users, setUserNames] = useState<string[] | null>(null);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [listVisible, setListVisible] = useState(false);
    const [amount, setAmount] = useState('');
    const toggleUserList = () => {
        const users = getAllUserName();
        setUserNames(users)
        setListVisible(prev => !prev);
    }
    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }

    const handleMakePayment = () => {
        try {
            if (!selectedUser || !amount) throw new Error("User and amount are required")
            updateBills(selectedUser, parseInt(amount));
        }
        catch(err:any){
            alert(err.message)
        }
       
    }
    return <div>

        <h1>Payment Form</h1>
        <button onClick={toggleUserList}>
            {selectedUser ?? "Select user"}
        </button>
        <input type="text" value={amount} onChange={handleAmountChange} placeholder="Amount" />
        <button onClick={handleMakePayment}>Pay</button>

        {
            listVisible &&
            <div>
                {
                    users && users.length !== 0 ?
                        users.map((item) =>
                            <div>
                                <button onClick={() => {
                                    setSelectedUser(item);
                                    toggleUserList();
                                }}>{item}</button>
                            </div>
                        )
                        :
                        <p>No Users</p>
                }
            </div>
        }
        <CustomerPaymentGrid userName={selectedUser ?? ""} />

    </div>
}