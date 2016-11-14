import React, { Component } from 'react'
import styles from './styles'

class Entry extends Component {

	render(){
		const entryStyle = styles.entry
		//const zipCode = this.props.currentZone.zipCodes[0]
		// better way to do this is to iterate through the Array
		// and turn it into a comma separated string here.

		return (
			<div style={entryStyle.container}>
				<h2 style={entryStyle.header}>
					<a style={entryStyle.title} href="#">{this.props.currententry.title}</a>
				</h2>
				<span className="detail">{this.props.currententry.text}</span><br />
				<span className="detail">{this.props.currententry.type} project type</span>
			</div>
		)
	}
}

export default Entry
