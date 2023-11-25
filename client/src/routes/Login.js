import {useState} from "react";
import {Icon} from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/ServerHelper";
import {useCookies} from "react-cookie";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {
        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/login",
            data
        );
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            alert("Success");
            navigate("/home");
        } else {
            alert("Failure");
        }
    };

    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="flex justify-center w-full p-5 border-b border-gray-300 border-solid logo">
                <Icon icon="fa6-solid:music" width="100" />
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 py-10 inputRegion">
                {/*  I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
                <div className="mb-4 font-bold">
                    To continue, log in to AudioHolic.
                </div>
                <TextInput
                    label="Email address or username"
                    placeholder="Email address or username"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />
                <div className="flex items-center justify-end w-full my-8 ">
                    <button
                        className="p-3 px-10 font-semibold bg-blue-500 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}
                    >
                        LOG IN
                    </button>
                </div>
                <div className="w-full border border-gray-300 border-solid"></div>
                <div className="my-6 text-lg font-semibold">
                    Don't have an account?
                </div>
                <div className="flex items-center justify-center w-full py-4 font-bold text-gray-500 border border-gray-500 rounded-full">
                    <Link to="/signup">SIGN UP FOR AUDIOHOLIC</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;