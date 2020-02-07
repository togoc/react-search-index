import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Button, message } from 'antd'
import './index.less'



@inject('store')
@observer class Detail extends Component {
	state = {
		showTop: false
	}
	componentDidMount() {
		const { getDetail } = this.props.store
		getDetail(this.props.match.params.id)



		// this.handleScroll()
	}
	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate')
	}
	componentDidUpdate() {
		let codeNodeList = document.querySelectorAll('code')
		codeNodeList.forEach(v => {
			v.addEventListener('click', function () {
				var text = this.innerText;
				var textarea = document.createElement('textarea');
				document.body.appendChild(textarea)
				textarea.value = text
				textarea.select();
				document.execCommand("Copy");
				document.body.removeChild(textarea)
				message.success('复制成功!');
				console.log(1)
			})
		})
	}

	handleScroll = () => {
		this.refs.content.onscroll = () => {
			let winScroll = this.refs.content.scrollTop
			if (winScroll >= 350) {
				this.state.showTop
					||
					this.setState({
						showTop: true
					})
			} else {
				this.state.showTop
					&&
					this.setState({
						showTop: false
					})
			}
		};
	}
	render() {
		const { currentDetail } = this.props.store
		return (
			<>
				<div className="search">
					<Button type="primary" shape="circle" icon="search"
						onClick={() => {
							this.props.history.go(-1)
						}}
					/>
					{
						this.state.showTop
						&&
						<Button type="primary" shape="circle" icon="arrow-up"
							onClick={() => {
								this.refs.content.scrollTo(0, 0)
							}}
						/>
					}
				</div>
				<div className="content-outer">
					<div ref='content' className="detail-content" dangerouslySetInnerHTML={{ __html: currentDetail }} />
				</div>
			</>
		)
	}
}
export default Detail 