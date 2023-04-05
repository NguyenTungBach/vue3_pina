import axios from "axios";
import {userList} from "@/store/loadUser";

export const getUserList = async () => {
    try {
        await axios.get("http://localhost:8078/api/v1/admin/user")
            .then(function (res) {
                console.log(res.data)
                userList().setUser(res.data);
            });
    } catch (err) {
        console.log(err);
    }
}