import axios from 'axios';

export const FETCH_MUSIC_START = 'FETCH_MUSIC_START';
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS';
export const FETCH_MUSIC_FAIL = 'FETCH_MUSIC_FAIL';

export const getMusic = () => dispatch =>{
    dispatch({type: FETCH_MUSIC_START});
    setTimeout(() => {
    axios
        .get('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
        .then(res => {
            console.log(res);
            dispatch({type: FETCH_MUSIC_SUCCESS, payload: res.data.results});
        })
        .catch(err => dispatch({type: FETCH_MUSIC_FAIL, payload: err}));
    }, []);
}