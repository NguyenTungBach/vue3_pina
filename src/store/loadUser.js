import {defineStore} from "pinia";

export const userList = defineStore({
    id:"userAxios",
    state: () =>({
        keyword2:"test userList",
        counter2:0,
        users:[]
    }),
    getters:{
        doubleCount: state => state.counter2 * 2
    }, // cho phép gọi trực tiếp
    actions:{
        setUser(users){
            this.users = users;
        }
    }
})