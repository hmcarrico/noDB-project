import React, { Component } from 'react';

const movieQuotes = require('movie-quotes');

export default class Quotes extends Component {
    render() {
      return (
          <div>
            {movieQuotes.random()}
        </div>
      )
    }
}