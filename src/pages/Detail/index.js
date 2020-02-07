import React, { Component } from 'react'
import { Title } from '../../components'
import { Button, BackTop, Anchor } from 'antd'
import './index.less'
const { Link } = Anchor;
let str = `
<h1 id="title">title</h1>
<h2 id="">目的</h2>
<ul>
	<li>在学习的过程中, 知识不可能一直一下子掌握. 经常有些内容想起来了, 但是具体内容又不是很了解, 每次都去想上次在哪里用过. </li>
	<li>通过网速的搜索工具返回的内容太过于繁杂, 不能准确符合自己理解内容的风格.</li>
	<li>由上为了加快回顾学习的内容, 需要自己建立一个知识库检索内容.</li>
	<li>多使用, 巩固学习的知识, 这也是一个学习的过程.</li>
</ul>
<h2 id="ui">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="reactless">框架 React less</h2>
<pre><code class="js language-js">    div.content-item-text {
        span.text-time {
            margin-right: 1em;
        }
        span.text-main {}
    }
</code></pre>
<h2 id="ui-1">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-2">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-3">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-4">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-5">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-6">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-7">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-8">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-9">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-10">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-11">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-12">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-13">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-14">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-15">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-16">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-17">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-18">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-19">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-20">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-21">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-22">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-23">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-24">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-25">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-26">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-27">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-28">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-29">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-30">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-31">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-32">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-33">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
<h2 id="ui-34">功能 UI</h2>
<ul>
	<li>模仿百度搜索UI</li>
	<li>根据关键字, 进行内容检索, 显示列表.</li>
	<li>显示最近 添加/修改 内容的列表.</li>
</ul>
`
export default class Detail extends Component {
	state = {
		showTop: false
	}
	componentDidMount() {
		this.refs.content.onscroll = () => {
			let winScroll = this.refs.content.scrollTop
			if (winScroll >= 350) {
				this.setState({
					showTop: true
				})
			} else {
				this.setState({
					showTop: false
				})
			}
		};
	}
	render() {
		return (
			<>
				<div className="search">
					<Button type="primary" shape="circle" icon="home"
						onClick={() => {
							this.props.history.go(-1)
						}}
					/>
					{
						this.state.showTop && <Button type="primary" shape="circle" icon="to-top"
							onClick={() => {
								this.refs.content.scrollTo(0, 0)
							}}
						/>
					}
				</div>
				<div className="content-outer">
					<div ref='content' className="detail-content" dangerouslySetInnerHTML={{ __html: str }} />
				</div>
			</>
		)
	}
}
