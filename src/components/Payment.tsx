import { useState } from "react";
import getAllUserName from "../utils/getAllUserNames";

export function Payments() {
    const [userNames, setUserNames] = useState<Record<string, string> | null>(null);
    const [selectedUser, setSelectedUser] = useState<String | null>(null);
    const [listVisible, setListVisible] = useState(false);
    const userList=userNames?Object.values(userNames):[];
    const toggleUserList = () => {
        const users=getAllUserName
        setListVisible(prev => !prev);
    }
    return <>
        <button onClick={toggleUserList}>
            {selectedUser ?? "Select user"}
        </button>
        {
            listVisible &&
            <div>
                {
                    userList.length!==0 ?
                    userList.map((item)=><button onClick={()=>{
                        setSelectedUser(item);
                        toggleUserList();
                    }}>{item}</button>)
                    :
                    <p>No Users</p>
                }
            </div>
        }

    </>
}