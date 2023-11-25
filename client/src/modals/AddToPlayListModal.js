import {useState, useEffect} from "react";
import {makeAuthenticatedGETRequest} from "../utils/ServerHelper";

const AddToPlaylistModal = ({closeModal, addSongToPlaylist}) => {
    const [myPlaylists, setMyPlaylists] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/me"
            );
            setMyPlaylists(response.data);
        };
        getData();
    }, []);

    return (
        <div
            className="absolute flex items-center justify-center w-screen h-screen bg-black bg-opacity-50"
            onClick={closeModal}
        >
            <div
                className="w-1/3 p-8 rounded-md bg-app-black"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="mb-5 text-lg font-semibold text-white">
                    Select Playlist
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    {myPlaylists.map((item) => {
                        return (
                            <PlaylistListComponent
                                info={item}
                                addSongToPlaylist={addSongToPlaylist}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const PlaylistListComponent = ({info, addSongToPlaylist}) => {
    return (
        <div className="flex items-center w-full p-3 space-x-4 cursor-pointer bg-app-black hover:bg-gray-400 hover:bg-opacity-20" onClick={()=>{
            addSongToPlaylist(info._id)
        }}>
            <div>
                <img
                    src={info.thumbnail}
                    className="w-10 h-10 rounded"
                    alt="thumbnail"
                />
            </div>
            <div className="text-sm font-semibold text-white">{info.name}</div>
        </div>
    );
};

export default AddToPlaylistModal;