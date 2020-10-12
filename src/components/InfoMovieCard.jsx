import React, { Component } from 'react';

export default class InfoMovieCard extends Component {
	render() {
		return (
			<div className="card">
				<img className="img-fluid infoImg" src={this.props.poster} alt=""/>

				<div className="text-dark px-3">
					<h1>{this.props.title}</h1>

					<small>{this.props.year}</small> | <small>Rated: {this.props.rated}</small>
					| <small>Genre: {this.props.genre}</small>

					<p>{this.props.plot}</p>

					<span className="bg-warning text-white rounded my-4 p-2">
						ImdbRating : {this.props.ImdbRating}
					</span>
				</div>
			</div>
		);
	}
}
