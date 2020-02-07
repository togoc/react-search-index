import { observable, action } from 'mobx'
import Ajax from './ajax'


class Count {
    @observable orderList = []
    orderListStore = []
    @observable list = []
    listStore = []
    @observable todoList = []
    detailListStore = []
    @observable currentDetail = ""


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



    @action getOrderList = (str) => {
        this.orderList = []
        this.orderListStore.forEach(v => v.title === str && (this.orderList = v.list))
        this.orderList.length === 0 &&
            Ajax.get('/order-list?keyword=' + str).then(res => {
                this.orderList = res.data
                this.orderListStore.push({
                    list: res.data.length === 0 ? [{
                        keyword: "无数据"
                    }] : res.data, title: str
                })
            })
    }

    @action getList = (str) => {
        this.list = []
        this.orderList = []
        this.listStore.forEach(v => v.title === str && (this.list = v.list))
        this.list.length === 0 &&
            Ajax.get('/form-list?keyword=' + str).then(res => {
                this.list = res.data
                this.listStore.push({
                    list: res.data.length === 0 ? [{
                        keyword: "无数据"
                    }] : res.data, title: str
                })
            })
    }


    @action getDetail = (source) => {
        this.currentDetail = ""
        this.detailListStore.forEach(v => v.source === source && (this.currentDetail = v.detail))
        this.currentDetail.length === 0 &&
            Ajax.get('/detail?source=' + source).then(res => {
                this.currentDetail = res.data
                this.detailListStore.push({
                    detail: res.data.length === 0 ? "1" : res.data, source
                })
            })
    }
}



export default new Count()