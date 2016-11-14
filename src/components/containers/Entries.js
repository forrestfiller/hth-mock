import React, { Component } from 'react'
import Entry from '../presentation/Entry'
import superagent from 'superagent'

class Entries extends Component {
	constructor(){
		super()
		this.state = {
			entry: {
				title: '',
				text: '',
				type: ''
			},
			list: []
		}
	}

	componentDidMount(){
		console.log('componentDidMount: ')
		superagent
		.get('/api/entry')
		.query(null)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if (err){
				alert('ERROR: '+err)
				return
			}

			console.log(JSON.stringify(response.body))
			let results = response.body.results
			this.setState({
				list: results
			})
		})
	}

	submitEntry(){
		console.log('submitEntry: '+JSON.stringify(this.state.entry))
		let updatedList = Object.assign([], this.state.list)
		updatedList.push(this.state.entry)
		this.setState({
			list: updatedList
		})
	}

	updateEntry(event){
		console.log('updateEntry: '+event.target.id+' == '+event.target.value)
		let updatedEntry = Object.assign({}, this.state.entry)
		updatedEntry[event.target.id] = event.target.value
		this.setState({
			entry: updatedEntry
		})
	}

	render(){
		const listItems = this.state.list.map((entry, i) => {
			return (
				<li key={i}><Entry currentEntry={entry} /></li>
			)
		})

		return (
			<div>
				<ol>
					{listItems}
				</ol>
				<input id="title" type="text" onChange={this.updateEntry.bind(this)} className="form-control" placeholder="Project Title" /><br />
				<input id="text" type="text" onChange={this.updateEntry.bind(this)} className="form-control" placeholder="Project Description" /><br />
				<input id="type" type="text" onChange={this.updateEntry.bind(this)} className="form-control" placeholder="Type of Project" /><br />
				<button type="submit" onClick={this.submitEntry.bind(this)} className="btn btn-danger">Add Project Entry</button>
			</div>
		)
	}
}

export default Entries
