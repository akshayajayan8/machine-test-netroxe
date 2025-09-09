import type { Customer } from "../types/Customer";
import getAllCustomerData from "./getCustomerData";

export default function getAllUserName(){
    let userNames:Record<string,string>={};
    const data=getAllCustomerData();
    const arrayData:Customer[]=Object.values(data);
    arrayData.forEach(element => {
        userNames[element.name]=element.name
    });

    return Object.values(userNames)


}