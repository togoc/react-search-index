import { Icon, Button, Input, AutoComplete } from 'antd';
import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom';

const { Option } = AutoComplete;




function renderOption(item) {
    return (
        <Option key={item.keyword} text={item.keyword}>
            <div className="global-search-item">
                <span className="global-search-item-desc">
                    {/* <Link
                        // href={`https://s.taobao.com/search?q=${item.query}`}
                        // to="/detail"
                    // rel="noopener noreferrer"
                    // >
                </Link> */}
                    {item.keyword}
                </span>
            </div>
        </Option>
    );
}
@inject('store')
@observer
class Complete extends React.Component {
    state = {
        query: '',
        open: false,
        timer: '0'
    };
    onSearch = (str) => {
        this.setState(() => {
            if (typeof (this.state.timer) === 'number')
                clearTimeout(this.state.timer)
            let timer = setTimeout(() => {
                this.setState({
                    open: true,
                    query: str
                })
                this.props.store.getOrderList(str)
            }, 1100)
            return { timer }
        })
    }
    render() {
        const { getList, orderList } = this.props.store
        return (
            <>
                <div className="global-search-wrapper" style={{ width: "100%", maxWidth: 450 }}>
                    <AutoComplete
                        className="global-search"
                        size="large"
                        style={{ width: '100%' }}
                        dataSource={orderList.map(renderOption)}
                        onSelect={(str) => {
                            this.setState({
                                open: false,
                                query: str
                            })
                            getList(str)
                        }}
                        onSearch={str => {
                            str = str.replace(/\s+/g, "")
                            if (str === '') return
                            this.setState({
                                query: str,
                            })
                            this.onSearch(str)
                        }}
                        placeholder="请输入搜索内容"
                        defaultActiveFirstOption={false}
                        optionLabelProp="text"
                        autoFocus={this.state.open}
                        allowClear
                        open={this.state.open}
                    >
                        <Input
                            onKeyUp={(e) => {
                                if (e.keyCode === 13) {
                                    clearTimeout(this.state.timer)
                                    this.setState({
                                        open: false,
                                    })
                                    getList(this.state.query)
                                }
                            }}
                            suffix={
                                <Button
                                    className="search-btn"
                                    style={{ marginRight: -12 }}
                                    size="large"
                                    type="primary"
                                    onClick={() => {
                                        this.setState({
                                            open: false,
                                        })
                                        getList(this.state.query)
                                    }}
                                >
                                    <Icon type="search" />
                                </Button>
                            }
                        />
                    </AutoComplete>
                </div>
            </>
        );
    }
}
export default Complete