import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
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
        const { list } = this.props.store
        console.log(list)
        return (
            <div className="home">
                <div className="title">
                    <Title />
                </div>
                <div className="main">
                    <div className="nav">
                        <span></span>
                        <div className="content">
                            {
                                list.map(v => {
                                    return (
                                        <div className="content-item" key={v.keyword}>
                                            <Link className="title" to="/detail">{v.keyword}</Link>
                                            <div className="content-item-text">
                                                <span className="text-time">
                                                    {moment(v.data).format('YYYY-MM-DD')}
                                                </span>
                                                <span className="text-main">
                                                    {v.main}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })

                            }
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