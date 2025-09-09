import { STORAGE_KEYS } from "../constants/generic";

export default function getAllCustomerData(){
    const data=localStorage.getItem(STORAGE_KEYS.customer);
    if (!data) return data;
    const parsedData=JSON.parse(data);
    return parsedData;

}