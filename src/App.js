import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import MoviePost from './components/MoviePost';
import Header from './components/Header';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      queryField: '',
      movies: []
    }
  }

  searchField( entryValue ) {
    const value = entryValue;
    this.setState({
      queryField: value
    })
    this.performSearch()
  }

  performSearch() {
    const KEY_API = '1b5adf76a72a13bad99b8fc0c68cb085';
    const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${this.state.queryField}&api_key=${KEY_API}`;
    $.ajax({
      url: urlSearch,
      success: (data) => {
        const totalResults = data.results;
        this.setState({
          movies: totalResults
        })
      }
    })
  }

  renderMovies() {
    if(this.state.queryField) {
      return this.state.movies.map( movie => {
        return <MoviePost data={movie} key={movie.id} />
      })
    } else {
      return <p className="result-text">Make your search and press Enter.</p>
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="App__main">

          <form className="form--search">
            <p className="form__line">
              <input 
                className="form__input" 
                type="search" 
                onChange={ e => {
                  this.searchField(e.target.value)
                } }
                value={ this.state.queryField } 
                placeholder="I'm looking for the movie..." />
            </p>
          </form>

          { this.renderMovies() }
        </main>
      </div>
    );
  }
}

export default App;
