import React from 'react'
import '../CSS/Body.css'
import Header from './Header'
import  {useDataLayerValue} from '../DataLayer'
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow"

function Body({spotify}) {
    const [{discover},dispatch]=useDataLayerValue()
    return (
        <div className="body">
        <Header spotify={spotify}/>
        <div className="body__info">
            <img src={discover?.images[0].url} />
            <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover?.description}</p>
            </div>

        </div>
        <div className="body__songs">
               <div className="body__icons">
                    <PlayCircleFilledIcon className="body__play"/>
                    <FavoriteIcon/>
                    <MoreHorizIcon/>
               </div>
            {discover?.tracks.items.map((item,index)=>{
                return <SongRow key={index} track={item.track} />
            })}
        </div>
        </div>
    )
}

export default Body
