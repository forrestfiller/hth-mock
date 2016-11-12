import React, { Component } from 'react'

class Comment extends Component {
	render(){
		return (
			<div>
				<span>{this.props.username}</span><br />
				<p>hey this is a comment</p>
				<span>{this.props.body}</span><br />
				<span>{this.props.timestamp}</span><br />
			</div>

		)
	}
}

export default Comment