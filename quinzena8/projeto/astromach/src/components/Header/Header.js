import React from "react";
import axios from "axios";
import User from "../../image/user.png";
import {Img, ContainerHeader} from "./styled"

function Header() {
    return (
        <ContainerHeader>
            <h1>Astromach</h1>
            <div>
            <Img src= {User}alt="" />
            </div>
        </ContainerHeader>
    )
}

export default Header;