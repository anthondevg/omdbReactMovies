import React, { Component } from 'react';

export default class SearchBar extends Component {

	constructor(props){
		super(props);
		this.searchTitle = this.searchTitle.bind(this);
		this.refreshInput = this.refreshInput.bind(this);
	}

	searchTitle(e) {
		e.preventDefault();
		this.props.onSearchTitle();
	}

	refreshInput(e){
		this.props.onRefreshInput(e);
	}

	render() {
		const title = this.props.title;

		return (
			<div>
				<div className="search-container">

				    <input type="text" id="search-bar" name="title" value={title} onChange={this.refreshInput} placeholder="Buscar ej: Parasitos"/>
					
				    <a href="/" onClick={this.searchTitle} className="searchBtn">
				    	<img className="search-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"/>
				    </a>
				</div>
			</div>			
		);
	}
}
