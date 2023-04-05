import {defineStore} from "pinia";

export const useIndexStore = defineStore({
    id:"index",
    state: () => ({
        keyword:"test back 1",
        counter:0,
    }),
    getters:{
        checkCount: state => state.counter
    }, // cho phép gọi trực tiếp
    actions:{
        increment() {
            this.counter++
        },
    }
})

export const hello2 = defineStore({
    id:"index2",
    state: () =>({
        keyword2:"test back 2",
        counter2:0,
    }),
    getters:{
        doubleCount: state => state.counter * 2
    }, // cho phép gọi trực tiếp
    actions:{
        increment() {
            this.counter++
        },
    }
})


