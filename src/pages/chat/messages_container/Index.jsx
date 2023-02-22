import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Style from "./Style.module.css";

import io from "socket.io-client";
const socket = io.connect("https://web-production-2cbb.up.railway.app");

export function MessagesContainer() {
    // context, useLocaton and states
    const [userImg, setUserImg] = useState("");
    const [_username, setUsername] = useState("");
    const location = useLocation();
    const [currentRoom, setCurrentRoom] = useState(location.state);
    const [input, setInput] = useState("");
    const [messageList, setMessageList] = useState([]);

    async function getUserData() {
        var cookies = document.cookie
            .split(";")
            .map((cookie) => cookie.split("="))
            .reduce(
                (accumulator, [key, value]) => ({
                    ...accumulator,
                    [key.trim()]: decodeURIComponent(value),
                }),
                {}
            );

        setUserImg(cookies?.user_image);
        setUsername(cookies?.username);
    }

    async function getMessage() {}

    // send message to backend and emiting send_message event
    const sendMessage = async () => {
        if (input != "") {
            const messageData = {
                room: currentRoom,
                author: _username,
                message: input,
                authorImage: userImg,
            };

            await socket.emit("send_message", messageData);
            setInput("");
        }
    };

    // useEffect to join current room
    useEffect(() => {
        getUserData();
        socket.emit("join_room", currentRoom);
    }, []);

    // useEffect to receive messages from the backend
    useEffect(() => {
        socket.on("receive_message", (data) => {
            let a = messageList;
            a.push(data);

            let uniqueChars = [...new Set(a)];
            // setMessageList((list) => [...list, data]);
            setMessageList(uniqueChars);
            // console.log(messageList);
        });
    }, [socket]);

    return (
        <section className={Style.messages_container}>
            <div className={Style.messages_box}>
                {messageList?.map((message, i) => {
                    return (
                        <div key={i} className={Style.message_row}>
                            <div className={Style.img_container}>
                                <img
                                    src={
                                        "/assets/images/" + message?.authorImage
                                    }
                                />
                            </div>
                            <div className={Style.message_content}>
                                <div>
                                    <span className={Style.message_owner}>
                                        {message?.author}
                                    </span>
                                    <span className={Style.message_text}>
                                        {message?.time}
                                    </span>
                                </div>
                                <span className={Style.message_text}>
                                    {message?.message}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={Style.message_input_container}>
                <div className={Style.message_input_box}>
                    <input
                        value={input}
                        type="text"
                        placeholder="Enter your message"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => {
                            e.key === "Enter" && sendMessage();
                        }}
                    />

                    <div onClick={sendMessage}>
                        <img src="/assets/images/send.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
