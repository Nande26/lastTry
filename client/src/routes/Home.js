//import logo from "../assets/images/logo";
import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWithHover';

const focusCardsData = [
    {
        title:"Peaceful Piano",
        description:"Relaxe and indulge with beautiful piano pieces",
        imgUrl:"https://media.istockphoto.com/id/185268966/photo/grand-piano.webp?b=1&s=170667a&w=0&k=20&c=4OnU1uGwLO6HAFRT2Z0ukqS5dJG2bN8NUH7PY-Dojww="
},
{
    title:"Study",
    description:"Up tempo instrumental hip hop beats",
    imgUrl:"https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?cs=srgb&dl=ballpen-blur-book-1925536.jpg&fm=jpg"},
{
    title:"Work",
    description:"Up tempo instrumental hip hop beats",
    imgUrl:"https://media.istockphoto.com/id/1473781095/photo/a-man-financier-auditor-sits-in-the-office-he-holds-documents-checks-accounts-types-on-a.webp?b=1&s=170667a&w=0&k=20&c=Ur3qJ1RjdrFkBDgofYogRfebLq4lFodh8mAgzu6pCec="
},
{
    title:"Rain",
    description:"A tranquil melody where raindrops softly dance",
    imgUrl:"https://media.istockphoto.com/id/1455038582/photo/rain-drop.webp?b=1&s=170667a&w=0&k=20&c=0czyea70W_dp0R70hJE4m1ljfmb4qgXhj_j6Rj9NsuY="
},
{
    title:"Beats to think to",
    description:"Exploring through the language of music",
    imgUrl:"https://media.istockphoto.com/id/1273305991/photo/feeling-bored-technology-can-take-care-of-that.webp?b=1&s=170667a&w=0&k=20&c=8DtzbPaK8Dma3GaTqteyGYZkeP9RJeudHguSRdCACeY="
}];


const soundSpcaePlaylistCardsData = [
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


const soundOfIndiaCardsData = [
    {
        title:"Peaceful Piano trying",
        description:"Relaxe and indulge with beautiful piano pieces",
        imgUrl:"https://media.istockphoto.com/id/185268966/photo/grand-piano.webp?b=1&s=170667a&w=0&k=20&c=4OnU1uGwLO6HAFRT2Z0ukqS5dJG2bN8NUH7PY-Dojww="
},
{
    title:"Study",
    description:"Up tempo instrumental hip hop beats",
    imgUrl:"https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?cs=srgb&dl=ballpen-blur-book-1925536.jpg&fm=jpg"},
{
    title:"Work",
    description:"Up tempo instrumental hip hop beats",
    imgUrl:"https://media.istockphoto.com/id/1473781095/photo/a-man-financier-auditor-sits-in-the-office-he-holds-documents-checks-accounts-types-on-a.webp?b=1&s=170667a&w=0&k=20&c=Ur3qJ1RjdrFkBDgofYogRfebLq4lFodh8mAgzu6pCec="
},
{
    title:"Rain",
    description:"A tranquil melody where raindrops softly dance",
    imgUrl:"https://media.istockphoto.com/id/1455038582/photo/rain-drop.webp?b=1&s=170667a&w=0&k=20&c=0czyea70W_dp0R70hJE4m1ljfmb4qgXhj_j6Rj9NsuY="
},
{
    title:"Beats to think to",
    description:"Exploring through the language of music",
    imgUrl:"https://media.istockphoto.com/id/1273305991/photo/feeling-bored-technology-can-take-care-of-that.webp?b=1&s=170667a&w=0&k=20&c=8DtzbPaK8Dma3GaTqteyGYZkeP9RJeudHguSRdCACeY="
}];



const HomeComponent = () =>{
return (
    <div className="flex w-full h-full ">
        <div className="w-1/6 h-full bg-dark-blue">

            
            <div className="flex justify-center p-3 logoDiv">
            <Icon icon="icons8:music" width="100" />
            </div>

            <div className="py-5">
                <IconText 
                iconName={"clarity:home-solid"}
                displayText={"Home"}
                active/>

                <IconText 
                iconName={"material-symbols:search"}
                displayText={"Search"}
                />

                <IconText 
                iconName={"fluent:library-24-filled"}
                displayText={"Library"}
                />
            </div>

            <div className="py-4">
            <IconText 
                iconName={"material-symbols-light:library-add"}
                displayText={"Create Playlist"}
                />
            <IconText 
                iconName={"icon-park-solid:like"}
                displayText={"Liked Songs"}
                />
            </div>
        </div>

        <div className="w-full h-full overflow-auto bg-lighter-dark-blue">
            <div className="flex items-center justify-end w-full navbar bg-slight-dark-blue h-1/10 bg-opacity-30">
                <div className="flex justify-end w-1/2 h-full">
                    <TextWithHover displayText={"Signup"}/>
                <div className="flex items-center justify-center px-8 mx-3 mt-3 font-semibold bg-white rounded-full cursor-pointer h-2/3">Login</div>
                
                </div>
            </div>
            
            
            
            <div className="p-8 pt-0 content">
                <PlaylistView titleText="Focus" cardsData={focusCardsData}/>
                <PlaylistView titleText="SoundSpcae Playlist" cardsData={soundSpcaePlaylistCardsData}/>
                <PlaylistView titleText="Sound of India" cardsData={soundOfIndiaCardsData}/>
            </div>

        </div>

    </div>
) 
};


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
            
        </div>
        
    )
};
export default HomeComponent