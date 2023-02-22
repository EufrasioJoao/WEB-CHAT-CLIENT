import React, { useContext } from "react";
import { List, User, X } from "phosphor-react";
import Style from "./Style.module.css";
import { context } from "../../../context/Index";
import { useNavigate } from "react-router-dom";

export function ChatRoomHeader({ room }) {
    // context
    const { isAsideVisible, setIsAsideVisible } = useContext(context);
    const navigate = useNavigate();

    return (
        <header className={Style.header}>
            <nav>
                <div className={Style.logo_box}>
                    <div className={Style.logo}>{room}</div>
                </div>
                <div
                    onClick={() => navigate("/profile")}
                    className={Style.profile_}
                >
                    <User color="tomato" size={30} />
                </div>
            </nav>
        </header>
    );
}
