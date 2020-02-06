import { Icon, Button, Input, AutoComplete } from 'antd';
import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom';

const { Option } = AutoComplete;


function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}



function renderOption(item) {
    return (
        <Option key={item._id} text={item.keyword}>
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
        dataSource: [],
        query: 'a',
    };

    handleSearch = async query => {
        query = query.replace(/^\s*|\s*$/g, '')
        let data = await this.props.store.getOrderList(query)
        console.log(data)
        this.setState({
            dataSource: query ? data : [],
            query
        });
    };

    onSelect = (value) => {

        console.log('onSelect', value); //待取
    }
    searchResult = async (query) => {
        // return [
        //     {
        //         query: "321",
        //         category: "321",
        //         count: 1
        //     }
        // ]

        // return new Array(getRandomInt(5))
        //     .join('.')
        //     .split('.')
        //     .map((item, idx) => ({
        //         query,
        //         category: `${query}${idx}`,
        //         count: getRandomInt(200, 100),
        //     }));

    }
    render() {
        const { getList, getOrderList } = this.props.store
        const { dataSource } = this.state;
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
                        dataSource={dataSource.map(renderOption)}
                        onSelect={this.onSelect}
                        onSearch={this.handleSearch}
                        placeholder="请输入搜索内容"
                        optionLabelProp="text"
                        autoFocus
                        allowClear
                    >
                        <Input
                            suffix={
                                <Button
                                    className="search-btn"
                                    style={{ marginRight: -12 }}
                                    size="large"
                                    type="primary"
                                    onClick={() => {
                                        getOrderList(this.state.query)
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