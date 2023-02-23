import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Style.module.css";
import { context } from "../../context/Index";

export function Register() {
    // context, useNavigate and states
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("masculin");
    const [serverMsg, setServerMsg] = useState("");
    const navigate = useNavigate();

    // function to submit the values to login a user
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            email.trim() != "" &&
            username.trim() != "" &&
            gender.trim() != ""
        ) {
            // values to be submited
            let user_image =
                gender == "masculin"
                    ? `m${Math.floor(Math.random() * 9)}.jpg`
                    : `w${Math.floor(Math.random() * 4)}.jpg`;

            document.cookie = `logged=true`;
            document.cookie = `email=${email}`;
            document.cookie = `username=${username}`;
            document.cookie = `user_image=${user_image}`;
            document.cookie = `gender=${gender}`;

            navigate(`/join`);
        }
    };

    return (
        <div className={Style.register}>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className={Style.register_container}
            >
                <div className={Style.form_container}>
                    <span>ENTER THE CHAT</span>
                    <small>Email</small>
                    <input
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <small>Username</small>
                    <input
                        type="text"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <small>Gender</small>
                    <select
                        name=""
                        value={gender}
                        id="select"
                        required
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="masculin">Masculin</option>
                        <option value="femenin">Femenin</option>
                    </select>
                    <p>{serverMsg}</p>
                    <button>Continue</button>
                </div>
            </form>
        </div>
    );
}
