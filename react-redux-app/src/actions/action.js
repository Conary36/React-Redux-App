import axios from 'axios';

export const FETCH_MUSIC_START = 'FETCH_MUSIC_START';
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS';
export const FETCH_MUSIC_FAIL = 'FETCH_MUSIC_FAIL';

export const getMusic = () => dispatch =>{
    dispatch({type: FETCH_MUSIC_START});
    setTimeout(() => {
        // axios
        //     .get( "https://billboard-api2.p.rapidapi.com/hot-100",
        //     "headers": {
        //         "content-type": "application/octet-stream",
        //         "x-rapidapi-host": "billboard-api2.p.rapidapi.com",
        //         "x-rapidapi-key": "d875c1aaa7msh6b0b9e7a209b2cbp16ab9fjsn9eefceb93b98"
        //     }, "params": {
        //         "date": "2019-05-11",
        //         "range": "1-10"
             
        //     })
        axios
            .get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=53d56d94234b82b6638be14996b2b8c8&format=json')
            .then(res => {
            console.log(res.data.artists.artist)
            dispatch({type: FETCH_MUSIC_SUCCESS, payload: res.data.artists.artist});
        })
            .catch(err => dispatch({type: FETCH_MUSIC_FAIL, payload: err}))

    
    //     .then(res => {
    //         console.log(res.data);
    //         dispatch({type: FETCH_MUSIC_SUCCESS, payload: res});
    //     })
    //     .catch(err => dispatch({type: FETCH_MUSIC_FAIL, payload: err}));
    }, []);
}