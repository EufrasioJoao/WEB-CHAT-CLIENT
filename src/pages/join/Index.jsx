import React from "react";

import { Header } from "../../components/header/Index";
import { RoomsContainer } from "./rooms_container/Index";
import Style from "./Style.module.css";

export function JoinRoom() {
    return (
        <div>
            <Header />
            <RoomsContainer />
        </div>
    );
}
