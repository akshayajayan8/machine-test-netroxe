import { STORAGE_KEYS } from "../constants/generic";
import type { Customer } from "../types/Customer";
import getAllCustomerData from "./getCustomerData";

export default function saveCustomerData(data: Customer) {
    let dataStringified: any;
    const item = { [data.billNo]: data }
    const currentData = getAllCustomerData();
    if (!currentData) {
        dataStringified = JSON.stringify({...item});
    }
    else {
        dataStringified = JSON.stringify({...currentData,...item});
    }

    console.log(dataStringified);
    localStorage.setItem(STORAGE_KEYS.customer, dataStringified);
}