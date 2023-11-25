import {useContext} from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({info, playSound}) => {
    const {currentSong, setCurrentSong} = useContext(songContext);

    return (
        <div
            className="flex p-2 rounded-sm hover:bg-gray-400 hover:bg-opacity-20"
            onClick={() => {
                setCurrentSong(info);
            }}
        >
            <div
                className="w-12 h-12 bg-center bg-cover"
                style={{
                    backgroundImage: `url("${info.thumbnail}")`,
                }}
            ></div>
            <div className="flex w-full">
                <div className="flex flex-col justify-center w-5/6 pl-4 font-bold text-gray-900">
                    <div className="cursor-pointer hover:underline">
                        {info.name}
                    </div>
                    <div className="text-xs font-bold text-white cursor-pointer hover:underline">
                        {info.artist.firstName + " " + info.artist.lastName}
                    </div>
                </div>
                <div className="flex items-center justify-center w-1/6 text-sm text-gray-400">
                    
                </div>
            </div>
        </div>
    );
};

export default SingleSongCard;