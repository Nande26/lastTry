import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import {makeAuthenticatedGETRequest} from "../utils/ServerHelper";
import SingleSongCard from "../components/shared/SingleSongCard";

const SinglePlaylistView = () => {
    const [playlistDetails, setPlaylistDetails] = useState({});
    const {playlistId} = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/playlist/" + playlistId
            );
            setPlaylistDetails(response);
            console.log(response);
        };
        getData();
    }, []);

    return (
        <LoggedInContainer curActiveScreen={"library"}>
            {playlistDetails._id && (
                <div>
                    <div className="pt-8 text-xl font-semibold text-white">
                        {playlistDetails.name}
                    </div>
                    <div className="pt-10 space-y-3">
                        {playlistDetails.songs.map((item) => {
                            return (
                                <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </LoggedInContainer>
    );
};

export default SinglePlaylistView;