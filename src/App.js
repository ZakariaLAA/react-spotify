import React, { useEffect, useState } from 'react';
import ScriptTag from 'react-script-tag';
import './App.css';
import Login from "./Component/Login"
import { getTokenFromUrl } from './Component/spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Component/Player';
import  {useDataLayerValue} from './DataLayer'

const spotify =new SpotifyWebApi(); 

function App() {
  const [{user,token},dispatch] = useDataLayerValue();
  
     
  // const  handleScriptLoad=()=>  {
  //     return new Promise(resolve => {
  //         if (window.Spotify) {
  //           resolve();
  //         } else {
  //           window.onSpotifyWebPlaybackSDKReady = resolve;
  //         }
  //       });
  //   }
  useEffect(()=>{
      const hash = getTokenFromUrl();
      window.location.hash="";
      const _token = hash.access_token; 
      if(_token){
        dispatch({
          type:'SET_TOKEN',
          token:_token
        })
        spotify.setAccessToken(_token);
     
        spotify.getPlaylist('6IMxMOSl41bdtfLvnNhrso')
        .then(response=>{
          dispatch({
            type:"SET_DISCOVER",
            discover:response
          })
        })
        spotify.getMe().then(user => {
          dispatch({
            type:'SET_USER',
            user:user
          });
        });
 
         spotify.getUserPlaylists()
         .then((playlists)=>{
           dispatch({
             type:"SET_PLAYLISTS",
             playlists:playlists
           });
         });
      }
  },[]);
  return (
  <div className="app">
    <ScriptTag isHydrating={true} type="text/javascript" src="https://sdk.scdn.co/spotify-player.js" />
      {
        token ? (
          <Player spotify={spotify}/>
        ) :(
          <Login />
        )
      }
      

  </div>
  
  // <Router>
  //     <Switch>
  //        <Route  path='/Bpage'>
  //            <Bpage />
  //        </Route>
  //      <Route path='/'>
  //        <Apage />
  //      </Route>
  //      </Switch>
  // </Router>
    
    
  );
}

export default App;
