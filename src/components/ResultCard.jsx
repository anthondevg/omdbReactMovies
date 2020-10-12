import React, { Component } from 'react';

export default class ResultCard extends Component {
	
	constructor(props){
		super(props);
		this.onSelectedMovie = this.onSelectedMovie.bind(this);
	}
	
	onSelectedMovie(e){
		this.props.onSelectedMovie(e);
	}

	render() {
		return (
			<div>
				<div onClick={this.onSelectedMovie} className="cardMovie mb-2 p-2 d-flex flex-row">
					<div>
						<img className="img-fluid imgResultCard" src={this.props.img} alt=""/>
					</div>
					<div className="pl-2 infoCardMovie">
						<h5 className="infoTitle">{this.props.title}</h5>
					</div>
				</div>
			</div>
		);
	}
}
