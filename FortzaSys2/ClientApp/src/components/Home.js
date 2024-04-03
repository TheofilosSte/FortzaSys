import React, { Component } from 'react';
import SearchComponent from './Search';
import VideoPlayer from './VideoPlayer';
import styles from './style.module.css';



export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
            <h1>Søk video her:</h1>
            {/* Render the search component*/}
            <SearchComponent />
            <VideoPlayer/>
        
      </div>
    );
  }
}
