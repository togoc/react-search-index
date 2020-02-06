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
                    <Link
                        // href={`https://s.taobao.com/search?q=${item.query}`}
                        to="/detail"
                    // rel="noopener noreferrer"
                    >
                        {item.keyword}
                    </Link>
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
        open: false
    };
    componentDidMount() {

    }
    render() {
        const { getList, getOrderList, orderList } = this.props.store
        return (
            <>
                {
                    this.props.children
                }
                <div className="global-search-wrapper" style={{ width: 300 }}>
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
                        onSearch={(str) => {
                            this.setState({
                                open: true,
                                query: str
                            })
                            getOrderList(str)
                        }}
                        onKeyUp={() => {
                            console.log(1)
                        }}
                        placeholder="请输入搜索内容"
                        optionLabelProp="text"
                        autoFocus
                        allowClear
                        filterOption={(inputValue, option) => {
                            inputValue = inputValue.replace(/\s+/g, "")
                            console.log(inputValue, option)
                            return true
                        }}
                        open={this.state.open}
                    >
                        <Input
                            onKeyUp={(e) => {
                                if (e.keyCode === 13) {
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