import { observable, computed, action } from 'mobx'
import Ajax from './ajax'


class Count {
    name = 'togoc'
    @observable orderList = []
    @observable list = []

    @action increment = () => {
        this.count += 1
    }



    @action getOrderList = async (str) => {
        str = str.replace(/\s+/g, "")
        await Ajax.get('/order-list?keyword=' + str).then(res => {
            this.orderList = res.data
        })
    }

    @action getList = async (str) => {
        str = str.replace(/\s+/g, " ")
        await Ajax.get('/form-list?keyword=' + str).then(res => {
            this.list = res.data
        })
    }
}



export default new Count()