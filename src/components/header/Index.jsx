import React, { useState, useContext } from "react";
import { context } from "../../context/Index";
import { List, MagnifyingGlass, User, X } from "phosphor-react";
import Style from "./Style.module.css";
import { useNavigate } from "react-router-dom";

export function Header() {
    // context and states
    const [showSearch, setShowSearch] = useState(false);
    const { setSearchTerm } = useContext(context);

    const navigate = useNavigate();

    return (
        <header className={Style.header}>
            <nav>
                <div className={Style.logo_box}>
                    <div className={showSearch ? Style.logoN : Style.logo}>
                        WEB CHAT
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                    }}
                >
                    {showSearch ? (
                        <div className={Style.input_container}>
                            <input
                                type="text"
                                placeholder="search here"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            ></input>
                            <div className={Style.iconX}>
                                <X
                                    onClick={() => {
                                        setSearchTerm("");
                                        setShowSearch(!showSearch);
                                    }}
                                    color="#bbb"
                                    size={30}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={Style.iconX}>
                            <MagnifyingGlass
                                onClick={() => {
                                    setShowSearch(!showSearch);
                                }}
                                color="#bbb"
                                size={30}
                            />
                        </div>
                    )}

                    <div
                        onClick={() => navigate("/profile")}
                        className={Style.profile_}
                    >
                        <User color="tomato" size={30} />
                    </div>
                </div>
            </nav>
        </header>
    );
}
