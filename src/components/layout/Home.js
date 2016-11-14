import React, { Component } from 'react'
import Comments from '../containers/Comments'
import Entries from '../containers/Entries'

class Home extends Component {

	render(){

		return(

			<div className="container">
				<div className="row">

					<div className="col-md-4">
						<Entries />
					</div>

					<div className="col-md-8">
						<Comments />
					</div>

				</div>
			</div>
		)
	}
}

export default Home
