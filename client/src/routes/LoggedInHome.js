//import logo from "../assets/images/logo";
import {Howl, Howler} from "howler";
import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWithHover';
import { useState } from 'react';
import LoggedInContainer from "../containers/LoggedInContainer";
import UploadSong from "./UploadSong";





const audioHolicPlaylistCardsData = [
    {
        title:"Today's Top hits",
        description:"Dua Lipa is on the top of the chart",
        imgUrl:"https://media.istockphoto.com/id/1043628624/photo/retro-old-school-design-ghetto-blaster-boombox-stereo-radio-cassette-tape-recorders-tower.webp?b=1&s=170667a&w=0&k=20&c=SJDoLL2qFESSkvZhJI11O0-YxfGWmqroKOehLo48Muk="
},
{
    title:"Chill Hits",
    description:"Kick back to best new and recent chill hits",
    imgUrl:"https://images.unsplash.com/photo-1508843286231-c86bcf866a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWxsJTIwaGl0c3xlbnwwfHwwfHx8MA%3D%3D"},
{
    title:"Rock Classics",
    description:"Rock legends and epic songs that inspire",
    imgUrl:"https://media.istockphoto.com/id/868670360/photo/band-performance.webp?b=1&s=170667a&w=0&k=20&c=mBikBPXs4uLauELaIxpE2872CfSPDqeoGekkEm4LJ7c="
},
{
    title:"All outs 2022",
    description:"The biggest songs of the 2022s",
    imgUrl:"https://media.istockphoto.com/id/1404157168/photo/dancing-on-music-festival-during-rainy-night.webp?b=1&s=170667a&w=0&k=20&c=__yTgHE_wV85Xd2HhZLngPu0xQQyEJyRWpcvshBNMpk="
},
{
    title:"RapCaviar",
    description:"New music from Jack Harlow, Kodak Black",
    imgUrl:"https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.webp?b=1&s=170667a&w=0&k=20&c=ianQoNtBBjNWVnUNvvmwnK9WA277WGc8QbFhIxmTvO0="
}];




const HomeComponent=()=>{
    return(
        <LoggedInContainer curActiveScreen="home">
            
            <PlaylistView titleText="AudioHolic Playlist" cardsData={audioHolicPlaylistCardsData}/>
            <div className="pt-12 pb-6 text-2xl font-bold text-white">
                Want to have your own Customized Music in our Site?
            </div>
            <div className="font-semibold text-white text-large">🎶 Discover the Rhythm of Life by uploading your music here.</div>
            <UploadSong/>
        </LoggedInContainer>
    )
}


const PlaylistView=({titleText,cardsData})=>{
    return(
        <div className="text-white pt-7">
            <div className="mb-3 text-2xl font-bold">{titleText}</div>
            <div className="flex justify-between w-full">
                {
                    cardsData.map((item)=>{
                        return <Card title={item.title} description={item.description} imgUrl={item.imgUrl}/>
                    })
                }
                </div>
        </div>
    )
};

const Card = ({title,description,imgUrl})=>{
    return(
        <div className="w-1/6 p-4 bg-blue-600 rounded-lg bg-opacity-60 h-1/4">
            <div className="pt-2 pb-4">
            <img className="w-full h-full rounded-md" src={imgUrl} />
    
            </div>

            <div className="py-2 text-sm font-bold text-white">{title}</div>
            <div className="text-sm font-semibold text-black">
            {description}
            </div>
            <div className="w-full h-1/10">

            </div>
        </div>
        
    )
};
export default HomeComponent;