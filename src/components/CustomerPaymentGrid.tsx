import { useEffect, useState } from "react";
import type { Customer } from "../types/Customer";
import getUserBills from "../utils/getUserBills";
import getTotalBalanceAmount from "../utils/getTotalBalanceAmount";

interface Props {
    userName: string;
}

export default function CustomerPaymentGrid({ userName }: Props) {
    const [customerData, setCustomerData] = useState<Customer[]>([]);
    const [balanceAmount, setBalanceAmount] = useState(0);

    function fetchData() {
        const data = getUserBills(userName);
        setCustomerData(data);
        const totalBalanceAmount = getTotalBalanceAmount(data);
        console.log(data);
        setBalanceAmount(totalBalanceAmount);
    }
    useEffect(() => {
        fetchData()
    }, [userName])
    return <div>
        <button onClick={fetchData}>
            Update Data
        </button>
        <table>
            <tr>
                <th>Customer name</th>
                <th>Bill No</th>
                <th>Bill Amount</th>
                <th>Paid Amount</th>
                <th>Balance Amount</th>
            </tr>
            {
                customerData.length !== 0 ?
                    customerData.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.billNo}
                            </td>
                            <td>
                                {item.billAmount}
                            </td>
                            <td>
                                {item.paidAmount}
                            </td>
                            <td>
                                {item.balanceAmount}
                            </td>
                        </tr>
                    }) :
                    <p>No Data</p>
            }

        </table>
        <p>Total Amount to Pay:</p>
        <p>{balanceAmount}</p>

    </div>

}