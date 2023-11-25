import {useState} from "react";
import {Icon} from "@iconify/react";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import IconText from "../components/shared/IconText";
import TextInput from "../components/shared/TextInput";
import TextWithHover from "../components/shared/TextWithHover";
import {makeAuthenticatedPOSTRequest} from "../utils/ServerHelper";
import {useNavigate} from "react-router-dom";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";

const UploadSong = () => {
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();

    const submitSong = async () => {
        const data = {name, thumbnail, track: playlistUrl};
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        );
        if (response.err) {
            alert("Could not create song");
            return;
        }
        alert("Success");
        navigate("/home");
    };

    return (
        <div className="flex w-full h-full">
            {/* This first div will be the left panel */}
             {/* <div className="flex flex-col justify-between w-1/5 h-full pb-10 "> */}
            {/*    <div>
                    
                    
                    <div className="py-5">
                        <IconText
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            active
                        />
                        <IconText
                            iconName={"material-symbols:search-rounded"}
                            displayText={"Search"}
                        />
                        <IconText
                            iconName={"icomoon-free:books"}
                            displayText={"Library"}
                        />
                        <IconText
                            iconName={"material-symbols:library-music-sharp"}
                            displayText={"My Music"}
                        />
                    </div>
                    <div className="pt-5">
                        <IconText
                            iconName={"material-symbols:add-box"}
                            displayText={"Create Playlist"}
                        />
                        <IconText
                            iconName={"mdi:cards-heart"}
                            displayText={"Liked Songs"}
                        />
                    </div>
                </div> */}
                {/* <div className="px-5">
                    <div className="flex items-center justify-center w-2/5 px-2 py-1 text-white border border-gray-100 rounded-full cursor-pointer hover:border-white">
                        <Icon icon="carbon:earth-europe-africa" />
                        <div className="ml-2 text-sm font-semibold">
                            English
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
            {/* This second div will be the right part(main content) */}
            <div className="w-4/5 h-full overflow-auto">
                {/* <div className="flex items-center justify-end w-full bg-black navbar h-1/10 bg-opacity-30">
                    <div className="flex w-1/2 h-full">
                        <div className="flex items-center justify-around w-2/3">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="border-r border-white h-1/2"></div>
                        </div>
                        <div className="flex items-center justify-around w-1/3 h-full">
                            <CreatePlaylistModal displayText={"Upload Song"} />
                            <div className="flex items-center justify-center w-10 h-10 font-semibold bg-white rounded-full cursor-pointer">
                                AC
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="p-8 pt-0 overflow-auto content">
                    <div className="mt-8 mb-5 text-2xl font-semibold text-white">
                        Upload Your Music
                    </div>
                    <div className="flex w-2/3 space-x-3">
                        <div className="w-1/2">
                            <TextInput
                                label="Name"
                                labelClassName={"text-white"}
                                placeholder="Name"
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInput
                                label="Thumbnail"
                                labelClassName={"text-white"}
                                placeholder="Thumbnail"
                                value={thumbnail}
                                setValue={setThumbnail}
                            />
                        </div>
                    </div>
                    <div className="py-5">
                        {uploadedSongFileName ? (
                            <div className="w-1/3 p-3 bg-white rounded-full">
                                {uploadedSongFileName.substring(0, 35)}...
                            </div>
                        ) : (
                            <CloudinaryUpload
                                setUrl={setPlaylistUrl}
                                setName={setUploadedSongFileName}
                            />
                        )}
                    </div>
                    <div
                        className="flex items-center justify-center w-40 p-4 font-semibold bg-white rounded-full cursor-pointer"
                        onClick={submitSong}
                    >
                        Submit Song
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadSong;