import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { Button } from 'antd'
import './index.less'
@inject('store')
@observer class Detail extends Component {
	state = {
		showTop: false
	}
	componentDidMount() {
		const { getDetail } = this.props.store
		getDetail(this.props.match.params.id)
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
						this.state.showTop && <Button type="primary" shape="circle" icon="arrow-up"
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