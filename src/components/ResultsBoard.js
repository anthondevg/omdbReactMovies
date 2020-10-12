import React, { Component } from 'react';

import ResultCard from './ResultCard';
import axios from 'axios';

export default class resultsBoard extends Component {

	onSelectedMovie(id){
		this.props.onSelectedMovie(id);
	}

	render() {
		const results = this.props.results;
		let movieCards;
		
		if(results){
			movieCards = results.map((result) =>
				<ResultCard onSelectedMovie={() => this.onSelectedMovie(result.imdbID)} key={result.imdbID} img={result.Poster} title={result.Title}/>
			)
		}

		return (
			<div className="movieBoxesContainer p-2">
				{movieCards == undefined ? <p>No se encontraron Resultados a esta busqueda</p> : movieCards}
			</div>
		);
	}
}
