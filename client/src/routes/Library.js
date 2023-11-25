import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import {makeAuthenticatedGETRequest} from "../utils/ServerHelper";

const Library = () => {
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
        <LoggedInContainer curActiveScreen={"library"}>
            <div className="pt-8 text-xl font-semibold text-white">
                My Playlists
            </div>
            <div className="grid grid-cols-5 gap-5 py-5">
                {myPlaylists.map((item) => {
                    return (
                        <Card
                            key={JSON.stringify(item)}
                            title={item.name}
                            description=""
                            imgUrl={item.thumbnail}
                            playlistId={item._id}
                        />
                    );
                })}
            </div>
        </LoggedInContainer>
    );
};

const Card = ({title, description, imgUrl, playlistId}) => {
    const navigate = useNavigate();
    return (
        <div
            className="w-full p-4 bg-black rounded-lg cursor-pointer bg-opacity-40"
            onClick={() => {
                navigate("/playlist/" + playlistId);
            }}
        >
            <div className="pt-2 pb-4">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className="py-3 font-semibold text-white">{title}</div>
            <div className="text-sm text-gray-500">{description}</div>
        </div>
    );
};

export default Library;