import type { Customer } from "../types/Customer";

export default function getTotalBalanceAmount(data:Customer[]){
    if (data.length===0) return 0;
    console.log("userdataa",data);
    let totalBalanceAmount:number=0;
    data.forEach(item=>{
        console.log("balanceamount",item)
        totalBalanceAmount+=item.balanceAmount
    });
    return totalBalanceAmount;

}