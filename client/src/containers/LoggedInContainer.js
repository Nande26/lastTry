import {useContext, useState, useLayoutEffect, useRef} from "react";
import {Howl, Howler} from "howler";
import {Icon} from "@iconify/react";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlayListModal";
import {makeAuthenticatedPOSTRequest} from "../utils/ServerHelper";


const LoggedInContainer = ({children, curActiveScreen}) => {
    const [createPlaylistModalOpen, setCreatePlaylistModalOpen] =
        useState(false);
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

    const {
        currentSong,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused,
        setIsPaused,
    } = useContext(songContext);

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        // the following if statement will prevent the useEffect from running on the first render.
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!currentSong) {
            return;
        }
        changeSong(currentSong.track);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong && currentSong.track]);

    const addSongToPlaylist = async (playlistId) => {
        const songId = currentSong._id;

        const payload = {playlistId, songId};
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/add/song",
            payload
        );
        if(response._id){
            setAddToPlaylistModalOpen(false)
        }
    };

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

    const pauseSound = () => {
        soundPlayed.pause();
    };

    const togglePlayPause = () => {
        if (isPaused) {
            playSound();
            setIsPaused(false);
        } else {
            pauseSound();
            setIsPaused(true);
        }
    };


    return (
        <div className="w-full h-full bg-slight-dark-blue">
            {createPlaylistModalOpen && (
                <CreatePlaylistModal
                    closeModal={() => {
                        setCreatePlaylistModalOpen(false);
                    }}
                />
            )}
            {addToPlaylistModalOpen && (
                <AddToPlaylistModal
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
            )}
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
                {/* This first div will be the left panel */}
                <div className="flex flex-col justify-between w-1/5 h-full pb-10 bg-gray-700">
                    <div>
                        {/* This div is for logo */}
                        <div className="flex justify-center pt-5 logoDiv">
                        <Icon icon="icons8:music" width="100" />
                        </div>
                        <div className="py-5">
                            <IconText
                                iconName={"clarity:home-solid"}
                                displayText={"Home"}
                                targetLink={"/home"}
                                active={curActiveScreen === "home"}
                            />
                            <IconText
                                iconName={"material-symbols:search"}
                                displayText={"Search"}
                                active={curActiveScreen === "search"}
                                targetLink={"/search"}
                            />
                            <IconText
                                iconName={"fluent:library-24-filled"}
                                displayText={"Library"}
                                active={curActiveScreen === "library"}
                                targetLink={"/library"}
                            />
                            <IconText
                                iconName={
                                    "material-symbols:library-music"
                                }
                                displayText={"My Music"}
                                targetLink="/myMusic"
                                active={curActiveScreen === "myMusic"}

                            />
                            <IconText
                                iconName={"material-symbols-light:library-add"}
                                displayText={"Create Playlist"}
                                onClick={() => {
                                    setCreatePlaylistModalOpen(true);
                                }}
                            />
                        </div>
                        
                    </div>
                    <div className="px-5">
                        <div className="flex items-center justify-center w-2/5 px-2 py-1 text-white border border-gray-100 rounded-full cursor-pointer hover:border-white">
                            <Icon icon="carbon:earth-europe-africa" />
                            <div className="ml-2 text-sm font-semibold">
                                English
                            </div>
                        </div>
                    </div>
                </div>
                {/* This second div will be the right part(main content) */}
                <div className="w-4/5 h-full overflow-auto bg-gray-800">
                    <div className="flex items-center justify-end w-full navbar h-1/10 bg-dark-blue bg-opacity-30">
                        
                    </div>
                    <div className="p-8 pt-0 overflow-auto content">
                        {children}
                    </div>
                </div>
            </div>
            {/* This div is the current playing song */}
            {currentSong && (
                <div className="flex items-center w-full px-4 text-white h-1/10 bg-lighter-dark-blue bg-opacity-30">
                    <div className="flex items-center w-1/4">
                        <img
                            src={currentSong.thumbnail}
                            alt="currentSongThumbail"
                            className="rounded h-14 w-14"
                        />
                        <div className="pl-4">
                            <div className="font-bold text-gray-900 cursor-pointer text-m hover:underline">
                                {currentSong.name}
                            </div>
                            <div className="font-bold cursor-pointer text-xm hover:underline">
                                {currentSong.artist.firstName +
                                    " " +
                                    currentSong.artist.lastName}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/2 h-full">
                        <div className="flex items-center justify-between w-1/3">
                            {/* controls for the playing song go here */}
                            <Icon
                                icon="ph:shuffle-fill"
                                fontSize={30}
                                className="text-gray-900 cursor-pointer hover:text-white"
                            />
                            <Icon
                                icon="mdi:skip-previous-outline"
                                fontSize={30}
                                className="text-gray-900 cursor-pointer hover:text-white"
                            />
                            <Icon
                                icon={
                                    isPaused
                                        ? "ic:baseline-play-circle"
                                        : "ic:baseline-pause-circle"
                                }
                                fontSize={50}
                                className="text-gray-900 cursor-pointer hover:text-white"
                                onClick={togglePlayPause}
                            />
                            <Icon
                                icon="mdi:skip-next-outline"
                                fontSize={30}
                                className="text-gray-900 cursor-pointer hover:text-white"
                            />
                            <Icon
                                icon="ic:twotone-repeat"
                                fontSize={30}
                                className="text-gray-900 cursor-pointer hover:text-white"
                            />
                        </div>
                        {/* <div>Progress Bar Here</div> */}
                    </div>
                    <div className="flex items-center justify-end w-1/4 pr-4 space-x-4">
                        <Icon
                            icon="ic:round-playlist-add"
                            fontSize={30}
                            className="text-gray-900 cursor-pointer hover:text-white"
                            onClick={() => {
                                setAddToPlaylistModalOpen(true);
                            }}
                        />
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoggedInContainer;