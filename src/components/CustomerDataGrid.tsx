import type { Customer } from "../types/Customer";

interface Props {
    data: Record<string, Customer>|null;
}

export default function CustomerDataGrid({ data }: Props) {
    const customerData = data?Object.values(data):[];
    return <div>
        <table>
            <tr>
                <th>Customer name</th>
                <th>Bill No</th>
                <th>Bill Amount</th>
            </tr>
            {
                customerData.length!==0 ?
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
                    </tr>
                }):
                <p>No Data</p>
            }

        </table>

    </div>

}