import { use } from "react"
import Userr from "./userr";

export default function User ({fetchUser}) {
    
    const users = use(fetchUser);
    // console.log(user);


    return(
        <div className="card">
            <h2>Users: {users.length}</h2>
            {
                users.map(user => <Userr key={user.id} user = {user}></Userr>)
            }
        </div>
    )
}