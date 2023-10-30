//src/stores/counter.js
import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter', {
 state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {// 使用箭头函数
      doubleCount: (state) => state.count * 2,// 如果使用普通函数,不接收state也可以使用this
      doubleCount1(){return this.count * 2},
      },
  actions: {// 不能使用箭头函数定义，因为使用箭头函数会导致 this 指向错误
      increment() {
        this.count++
        // this.$patch({}) // 批量更新  
        // this.$patch((state) => {});
      },
     },
   })