import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Item extends Component {
    render() {
        return (
            <>
                {/* <div className="content-item" key={v.keyword}>
                    <Link className="title" to="/detail">{v.keyword}</Link>
                    <div className="content-item-text">
                        <span className="text-time">
                            {moment(v.data).format('YYYY-MM-DD')}
                        </span>
                        <span className="text-main">
                            {v.main}
                        </span>
                    </div>
                </div> */}
                <Link to="/home/detail" >detail</Link>
            </>
        )
    }
}
