import {useState} from "react";
import {useCookies} from "react-cookie";
import {Icon} from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/ServerHelper"


const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const signUp = async () => {
        if (email !== confirmEmail) {
            alert(
                "Email and confirm email fields must match. Please check again"
            );
            return;
        }
        const data = {email, password, username, firstName, lastName};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/register",
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
                <Icon icon="fa6-solid:music" width="80" />
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 py-10 inputRegion">
                {/*  I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
                <div className="mb-4 text-2xl font-bold">
                    Sign up for free to start listening.
                </div>
                <TextInput
                    label="Email address"
                    placeholder="Enter your email"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <TextInput
                    label="Confirm Email Address"
                    placeholder="Enter your email again"
                    className="mb-6"
                    value={confirmEmail}
                    setValue={setConfirmEmail}
                />
                <TextInput
                    label="Username"
                    placeholder="Enter your username"
                    className="mb-6"
                    value={username}
                    setValue={setUsername}
                />
                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong password here"
                    value={password}
                    setValue={setPassword}
                />
                <div className="flex items-center justify-between w-full space-x-8">
                    <TextInput
                        label="First Name"
                        placeholder="Enter Your First Name"
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        className="my-6"
                        value={lastName}
                        setValue={setLastName}
                    />
                </div>
                <div className="flex items-center justify-center w-full my-8 ">
                    <button
                        className="p-3 px-10 font-semibold bg-blue-500 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="w-full border border-gray-300 border-solid"></div>
                <div className="my-6 text-lg font-semibold">
                    Already have an account?
                </div>
                <div className="flex items-center justify-center w-full py-4 font-bold text-gray-500 border border-gray-500 rounded-full">
                    <Link to="/login">LOG IN INSTEAD</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;