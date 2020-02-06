import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Title } from '../../components'

import './index.less'
@inject('store')
@observer class Home extends Component {
    state = {
        nav: [
            {
                id: 1,
                title: '网页'
            },
            {
                id: 2,
                title: '图片'
            }
        ]
    }

    render() {
        console.log(this.props)
        const { store } = this.props
        return (
            <div className="home">
                <div className="title">
                    <Title />
                </div>
                <div className="main">
                    <div className="nav">
                        <span></span>
                        <div className="content">
                            <div className="content-item">
                                <Link className="title" to="/detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil.</Link>
                                <div className="content-item-text">
                                    <span className="text-time">
                                        20127-323-231
                                </span>
                                    <span className="text-main">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias at quis velit quidem praesentium corrupti reiciendis deserunt adipisci quod reprehenderit.
                                </span>
                                </div>
                            </div>
                            <div className="content-item">
                                <a className="title" href="https://gitee.com/togoc/markdown-show/blob/master/test.md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil.</a>
                                <div className="content-item-text">
                                    <span className="text-time">
                                        20127-323-231
                                </span>
                                    <span className="text-main">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias at quis velit quidem praesentium corrupti reiciendis deserunt adipisci quod reprehenderit.
                                </span>
                                </div>
                            </div>
                            <div className="content-item">
                                <a className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil.</a>
                                <div className="content-item-text">
                                    <span className="text-time">
                                        2020.20.20
                                </span>
                                    <span className="text-main">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias at quis velit quidem praesentium corrupti reiciendis deserunt adipisci quod reprehenderit.
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tips">

                    </div>
                </div>
            </div>
        )
    }
}
export default Home