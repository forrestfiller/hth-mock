import React, { Component } from 'react'
import Comment from '../presentation/Comment'

class Comments extends Component {

	constructor(){
		super()
		this.state = {
			comment: {
				username:'',
				body:'',
				timestamp:''
			}
		}
	}

		return(
			<div>
				<Comment {comment} />
			</div>
		)
	}
}

export default Comments