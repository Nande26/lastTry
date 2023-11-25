import {useState} from "react";
import TextInput from "../components/shared/TextInput";
import {makeAuthenticatedPOSTRequest} from "../utils/ServerHelper";

const CreatePlaylistModal = ({closeModal}) => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/create",
            {name: playlistName, thumbnail: playlistThumbnail, songs: []}
        );
        if (response._id) {
            closeModal();
        }
    };

    return (
        <div
            className="absolute flex items-center justify-center w-screen h-screen bg-opacity-50 bg-slight-dark-blue"
            onClick={closeModal}
        >
            <div
                className="w-1/3 p-8 rounded-md bg-lighter-dark-blue"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="mb-5 text-lg font-semibold text-white">
                    Create Playlist
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <TextInput
                        label="Name"
                        labelClassName={"text-white"}
                        placeholder="Playlist Name"
                        value={playlistName}
                        setValue={setPlaylistName}
                    />
                    <TextInput
                        label="Thumbnail"
                        labelClassName={"text-white"}
                        placeholder="Thumbnail"
                        value={playlistThumbnail}
                        setValue={setPlaylistThumbnail}
                    />
                    <div
                        className="flex items-center justify-center w-1/3 py-3 mt-4 font-semibold bg-white rounded cursor-pointer"
                        onClick={createPlaylist}
                    >
                        Create
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylistModal;