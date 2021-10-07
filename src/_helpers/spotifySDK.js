
//additional code from spotify SDK to play music and shuffle

// import  {useDataLayerValue} from '../DataLayer'
// export default function spotifySDK(item,tokenn) {

 
//   window.onSpotifyWebPlaybackSDKReady = () => {
//     const token = tokenn;
//     const player = new window.Spotify.Player({
//       name: 'Web Playback SDK Quick Start Player',
//       getOAuthToken: cb => { cb(token); }
//     });
    
  
//     // Error handling
//     player.addListener('initialization_error', ({ message }) => { console.error(message); });
//     player.addListener('authentication_error', ({ message }) => { console.error(message); });
//     player.addListener('account_error', ({ message }) => { console.error(message); });
//     player.addListener('playback_error', ({ message }) => { console.error(message); });
  
//     // Playback status updates
//     player.addListener('player_state_changed', state => { console.log(state); });
  
//     // Ready
//     player.addListener('ready', ({ device_id }) => {
//       console.log('Ready with Device ID', device_id);
//       // const play = ({
//       //   spotify_uri,
//       //   playerInstance: {
//       //     _options: {
//       //       getOAuthToken,
//       //       id
//       //     }
//       //   }
//       // }) => {
//       //   getOAuthToken(access_token => {
//       //     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
//       //       method: 'PUT',
//       //       body: JSON.stringify({ uris: [spotify_uri] }),
//       //       headers: {
//       //         'Content-Type': 'application/json',
//       //         'Authorization': `Bearer ${access_token}`
//       //       },
//       //     });
//       //   });
//       // };
      
//       // play({
//       //   playerInstance: player,
//       //   spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
//       // });
      
//     });
  
//     // Not Ready
//     player.addListener('not_ready', ({ device_id }) => {
//       console.log('Device ID has gone offline', device_id);
//     });
  
//     // Connect to the player!
//     player.connect();
    
//   };

// }