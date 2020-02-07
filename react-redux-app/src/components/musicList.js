import React from 'react';
import {connect} from 'react-redux';

import {getMusic} from '../actions/action';

const mapStateToProps = state => ({
  music: state.music,
  error: state.error,
  isFetching: state.isFetching
});

const MusicList = props => {
    const fetchMusic = e => {
        e.preventDefault();
        props.getMusic();
    };

    return (
      <>
        <h2>Choose a Music Genre</h2>
        {props.isFetching && <p>Fetching your music</p>}
        <div>
          {props.music.map(music => (
            <h4 key={music.url}>{music.name}</h4>
          ))}
        </div>
        {props.error && <p className="error">{props.error}</p>}
        <button onClick={fetchMusic}>Fetch Music!</button>
      </>
    );
}


export default connect(
    mapStateToProps,
    {getMusic}
)(MusicList);

