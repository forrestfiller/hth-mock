import React, { Component } from 'react'
import styles from './styles'

class Comment extends Component {

	render(){
		const commentStyle = styles.comment

		return (
			<div>
				<p style={{fontSize:18, fontWeight:400}}>
					{this.props.currentComment.body}<br />
				</p>
				<span style={{fontWeight:200}}>{this.props.currentComment.username}</span>
				<span style={{fontWeight:200, marginLeft:12, marginRight:12}}>|</span>
				<span style={{fontWeight:200}}>{this.props.currentComment.timestamp}</span>
				<hr />
			</div>
		)
	}
}

export default Comment
