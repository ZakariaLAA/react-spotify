import React,{useEffect,useState} from 'react'
import '../CSS/Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopSharpIcon from '@material-ui/icons/LoopSharp';
import { Grid,Slider } from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDownSharp';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlaySharp';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';


import  {useDataLayerValue} from '../DataLayer'
function Footer() {
    const [{item,token,player,playing},dispatch]=useDataLayerValue();
    const [ready,setReady]=useState(playing)
    const [volume,setVolume]=useState(1)
    const volumeIcon=()=> {
        if(volume>=0.6){
            return <VolumeUpIcon />
        }else if(volume>=0.1 && volume<=0.5){
            return <VolumeDownIcon />
        }else{
            return <VolumeOffIcon />
        }
    }   
    const skip=(type)=>{
        if("previous"){
            player.previousTrack();
        }else{
            player.nextTrack();
        }
    }
    const handleSliderChange = (event, newValue) => {
         	player.setVolume(newValue).then(() => {
                setVolume(newValue);
            });
      };
    const play=()=>{
        if(playing){
        player.pause().then(() => {
            console.log('Paused!');
            dispatch({
                type:"SET_PLAYING",
                playing:false
            })
          });}
          else{
            player.resume().then(() => {
                console.log('resumed!');
                dispatch({
                    type:"SET_PLAYING",
                    playing:true
                })
              });  
          }
    }
    useEffect(() => {
        window.onSpotifyWebPlaybackSDKReady = () => {
            const tokenn = token;
            const player = new window.Spotify.Player({
              name: 'Web Playback SDK Quick Start Player',
              getOAuthToken: cb => { cb(tokenn); }
            });
            
            dispatch({
                type:"SET_PLAYER",
                players:player
            })
            // Error handling
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });
          console.log(player)
            // Playback status updates
        
            // Ready
            player.addListener('ready', ({ device_id }) => {
              console.log('Ready with Device ID', device_id);
            
               	
            //setVolume
            
              // const play = ({
              //   spotify_uri,
              //   playerInstance: {
              //     _options: {
              //       getOAuthToken,
              //       id
              //     }
              //   }
              // }) => {
              //   getOAuthToken(access_token => {
              //     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
              //       method: 'PUT',
              //       body: JSON.stringify({ uris: [spotify_uri] }),
              //       headers: {
              //         'Content-Type': 'application/json',
              //         'Authorization': `Bearer ${access_token}`
              //       },
              //     });
              //   });
              // };
              
              // play({
              //   playerInstance: player,
              //   spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
              // });
              
            });
          
            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
              console.log('Device ID has gone offline', device_id);
            });
           if(player!==null){
            player.addListener('player_state_changed', (state) => {;
                setReady(true)
                
                if(state && !state.paused){
                    
                    dispatch({
                        type:"SET_PLAYING",
                        playing:true
                    }) 
                }else if(state && state.paused){
                    setReady(true)
                }
                else{
                    setReady(false)
                }
              });
           }else{
            setReady(false)
           }
            	

       
            // Connect to the player!
            player.connect().then(success => {
                if (success) {
                  console.log('The Web Playback SDK successfully connected to Spotify!');
                }
              })
            
          };
    }, [])
   

    return (
        <div className='footer'>
            
            <div className="footer__left">
                <img className='footer__album' src="https://images.genius.com/88a5efd1461e1ab71e78c2784003e723.1000x1000x1.jpg" />
                <div className="footer__songInfo">
                <h4>Yeah</h4>
                <p>Ushher</p>
                </div>
            </div>

            {ready ? <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon onClick={()=>skip("previous")}  className="footer__icon"/>
                {!playing ? <PlayCircleOutlineIcon onClick={play} fontSize="large" className="footer__icon "/>:<PauseCircleOutlineIcon  onClick={play} fontSize="large" className="footer__icon "/>}
                <SkipNextIcon  onClick={()=>skip("next")} className="footer__icon"/>
                <LoopSharpIcon className="footer__green"/>
            </div>
            : <h1 className="footer__connect">Connect your Device</h1>}
            <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    {volumeIcon()}
                </Grid>
                <Grid item xs>
                    <Slider    defaultValue={1}
                    onChange={handleSliderChange}
                    min={0}
                    step={0.1}
                    max={1}/>
                </Grid>
            </Grid>
            </div>
        </div>
    )
} 

export default Footer
