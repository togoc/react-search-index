import { observable, computed, action } from 'mobx'



class Count {
    name = 'togoc'
    @observable count = 100

    @computed get doubleCount() {
        return this.count * 2
    }

    @action increment = () => {
        this.count += 1
    }
}



export default new Count()