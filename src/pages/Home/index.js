import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
import { BackTop } from 'antd'
import { Title, Form } from '../../components'
import Detail from '../Detail'

import './index.less'
@inject('store')
@observer class Home extends Component {
    state = {
        add: false
    }

    render() {
        const { list, todoList, addTodo, delTodo } = this.props.store
        const { push } = this.props.history
        return (
            <div className="home-outer">
                <BackTop />
                <div className="home">
                    <div className="title">
                        <Title push={push} />
                    </div>
                    <div className="main">
                        <div className="nav">
                            <div className="content">
                                <Switch>
                                    <Route component={Detail} path="/home/:id" />
                                    <Route render={() => <Form list={list} />} path="/home" eaxct />
                                </Switch>
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