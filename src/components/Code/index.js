import React, { Component } from 'react'
import './index.less'

export default class Code extends Component {
    render() {
        return (
            <pre className="code-pre">
                {this.props.children}
            </pre>
        )
    }
}
