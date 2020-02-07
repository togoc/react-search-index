import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import { BackTop } from 'antd'
import { Link } from 'react-router-dom'
import { Title } from '../../components'

import './index.less'
@inject('store')
@observer class Home extends Component {
    state = {
        add: false
    }

    render() {
        const { list, todoList, addTodo, delTodo } = this.props.store
        return (
            <div className="home-outer">
                <BackTop />
                <div className="home">
                    <div className="title">
                        <Title />
                    </div>
                    <div className="main">
                        <div className="nav">
                            <div className="content">
                                {
                                    list.length === 0 ?
                                        <p>无数据! tips:头内容必须正确!</p>
                                        :
                                        list.map(v => {
                                            return (
                                                <div className="content-item" key={v.keyword}>
                                                    <div className="item-title"><Link className="title" to="/detail">{v.keyword}</Link></div>
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
                            <div className="tips-inner">
                                {
                                    todoList.map(v => {
                                        return (
                                            <div className="todo-item" title="🗑" key={v.id} onClick={
                                                () => {
                                                    delTodo(v.id)
                                                }
                                            }>
                                                <div className="todo-item-inner">
                                                    {v.title}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="add-content todo-item">
                                    {
                                        this.state.add
                                            ?
                                            <input type="text" ref="in" placeholder="Add To Do"
                                                onBlur={() => {
                                                    this.refs.in.value = ""
                                                    this.setState({
                                                        add: false
                                                    })
                                                }}
                                                onKeyUp={(e) => {
                                                    if (e.keyCode === 13) {
                                                        this.setState({
                                                            add: false
                                                        })
                                                        addTodo(this.refs.in.value)
                                                    }
                                                }}
                                            />
                                            :
                                            <button onClick={() => {
                                                setTimeout(() => {
                                                    this.refs.in.focus()
                                                }, 200)
                                                this.setState({
                                                    add: true
                                                })
                                            }}>+</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home