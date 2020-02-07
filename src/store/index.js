import { observable, computed, action } from 'mobx'
import Ajax from './ajax'


class Count {
    name = 'togoc'
    @observable orderList = []
    @observable list = []
    @observable todoList = []

    @action addTodo = (str) => {
        str = str.replace(/\s+/g, " ")
        this.todoList.push({
            id: Math.random(),
            title: str
        })
    }

    @action delTodo = (id) => {
        this.todoList.forEach((v, index) => {
            if (id === v.id) {
                this.todoList.splice(index, 1)
            }
        })
    }



    @action getOrderList = async (str) => {
        str = str.replace(/\s+/g, "")
        if (str === "") return
        await Ajax.get('/order-list?keyword=' + str).then(res => {
            this.orderList = res.data
        })
    }

    @action getList = async (str) => {
        str = str.replace(/\s+/g, " ")
        if (str === "") return
        await Ajax.get('/form-list?keyword=' + str).then(res => {
            this.list = res.data
        })
    }
}



export default new Count()