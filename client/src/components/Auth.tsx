import { ChangeEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { SignupInput } from "@ashwin_khowala/medium_common"
import { SERVER_URL } from "../config";

export default function Auth({ type }: { type: "signup" | "signin" }) {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try {    
            const response = await axios.post(`${SERVER_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
            const jwt= response.data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        } catch (error) {
            //alert the user here the error message

            console.error(error);
        }

    }

    return (
        <div className="flex justify-center">
            <div className="flex justify-center flex-col px-10">
                <div className="text-3xl font-extrabold text-center">
                    Create an account
                </div>
                <div className="text-slate-400 px-10">
                    {type==="signin"?"Don't have an account?":"Already have an account?"}
                    <Link to={type==="signin"?"/signup":"/signin"} className="text-blue-500 pl-2 underline">{type==="signin"?"Signup":"Login"}</Link>
                </div>
                <div className="pt-4">
                    {type==="signup"?<LableInput lable="Name" palceholder="Enter your name" onChange={(e) => setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })} />:null}
                    <LableInput lable="Email" palceholder="Enter your email" onChange={(e) => setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })} />
                    <LableInput lable="Password" type={"password"} palceholder="Enter your password" onChange={(e) => setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })} />

                    <button onClick={sendRequest} type="button" className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{type==="signup"?"Sign Up":"Sign In"}</button>


                </div>
            </div>
        </div>
    )
}

interface LableInputProps {
    lable: string;
    palceholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    type?: string;
}

function LableInput({ lable, palceholder, onChange, type }: LableInputProps) {
    return (
        <div className="w-full">
            <label className="block mb-2 text-sm font-semibold text-black pt-3">{lable}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={palceholder} required />
        </div>
    )

}
