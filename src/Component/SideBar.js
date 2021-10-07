import React from 'react'
import "../CSS/SideBar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerValue } from '../DataLayer';


function SideBar() {
    const [{playlists},dispatch] = useDataLayerValue();
   
    return (
        <div className="sidebar">
            <img className="sidebar__logo"
             src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
            alt="spotify-logo" />

            <SidebarOption title='Home' Icon={HomeIcon}/>
            <SidebarOption title='Search' Icon={SearchIcon}/>
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon}/>
            <br />
             <strong className="sidebar__title">PLAYLISTS</strong>
             <hr />
            {playlists?.items?.map((playlist)=>{
               return <SidebarOption key={playlist.id} title={playlist.name} />
            })}
        </div>
    )
}

export default SideBar
