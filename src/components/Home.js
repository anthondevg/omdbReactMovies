import React from 'react';
import SearchBar from './SearchBar.js';
import ResultsBoard from './ResultsBoard';
import InfoMovieCard from './InfoMovieCard';
import axios from 'axios';

export default class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			title: '',
			displayedMovie: {
				Poster: 'https://hwr.org.uk/wp-content/uploads/2016/11/placeholder-dark-600-400-729dad18518ecd2cd47afb63f9e6eb09.jpg'

			},
			results: []
		};

		this.searchTitle = this.searchTitle.bind(this);
		this.refreshInput = this.refreshInput.bind(this);
		this.onSelectedMovie = this.onSelectedMovie.bind(this);
	}
	
	searchTitle() {
		axios.get(`http://www.omdbapi.com/?s=${this.state.title}&apikey=9081448a`)
	      .then(res => {
	        console.log(res.data.Search);

	        this.setState({
				results: res.data.Search
	        });

	      });
	}
	
	refreshInput(e){
		console.log(e.target.value);

		this.setState({
			[e.target.name] : e.target.value
		});
	}
	onSelectedMovie(id){
		axios.get(`http://www.omdbapi.com/?i=${id}&apikey=9081448a`)
			.then(res => {
				console.log(res.data);
				this.setState({
					displayedMovie: res.data
				});
			});
	}
	render() {
		return (
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-md-8 mt-3" >
						<SearchBar 
								title={this.state.title} 
								onRefreshInput={this.refreshInput} 
								onSearchTitle={this.searchTitle} 
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<ResultsBoard onSelectedMovie={this.onSelectedMovie} results={this.state.results} />
					</div>

					<div className="col-md-8 movieInfoContainer p-3">
						<InfoMovieCard 
							poster={this.state.displayedMovie.Poster} 
							title={this.state.displayedMovie.Title}
							year={this.state.displayedMovie.Year}
							rated={this.state.displayedMovie.Rated}
							genre={this.state.displayedMovie.Genre}
							plot={this.state.displayedMovie.Plot}
							ImdbRating={this.state.displayedMovie.imdbRating}
						/>
					</div>
				</div>
			</div>
		);
	}
}
