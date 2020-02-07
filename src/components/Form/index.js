import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Empty } from 'antd';
import moment from 'moment'
import './index.less'
export default class Item extends Component {
    render() {
        const { list } = this.props
        return (
            <div className="form">
                {
                    list.length === 0 ?
                        <Empty description="暂无数据" />
                        :
                        list.map(v => v.keyword == '无数据' ?
                            <Empty key={v.keyword} description="暂无数据" />
                            :
                            (
                                <div className="content-item" key={v.keyword}>
                                    <div className="item-title"><Link className="title" to={"/home/" + v._id}>{v.keyword}</Link></div>
                                    <div className="content-item-text">

                                        <span className="text-main">
                                            <span className="text-time">
                                                {moment(v.data).format('YYYY-MM-DD')}
                                            </span>
                                            {v.main}
                                        </span>
                                    </div>
                                </div>
                            )
                        )
                }
            </div>
        )
    }
}
