import { observable, computed, action } from 'mobx'
import Ajax from './ajax'


class Count {
    name = 'togoc'
    @observable count = 100
    @observable orderList = []

    @computed get doubleCount() {
        return this.count * 2
    }

    @action increment = () => {
        this.count += 1
    }

    @action getList = () => {
        Ajax.get('/list').then(res => {
            console.log(res)
            // this.count = res.data
        })
    }

    @action getOrderList = async (str) => {
        let data = []
        await Ajax.get('/order-list?keyword=' + str).then(res => {
            data = res.data
        })
        return data
    }
}



export default new Count()