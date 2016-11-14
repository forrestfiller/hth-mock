import React, { Component } from 'react'
import styles from './styles'

class Entry extends Component {

	render(){
		const entryStyle = styles.entry

		return (
			<div style={entryStyle.container}>
				<h2 style={entryStyle.header}>
					<a style={entryStyle.title} href="#">{this.props.currentEntry.title}</a>
				</h2>
				<span className="detail">{this.props.currentEntry.text}</span><br />
				<span className="detail">{this.props.currentEntry.type} project type</span>
			</div>
		)
	}
}

export default Entry
