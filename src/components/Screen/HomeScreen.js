import React from "react";
import Header from "../Header";
import Category from "../Category"
import About from "../About"
import Event from "../Event";
import { withRouter } from "react-router-dom";
import { BrowserView,MobileView } from "react-device-detect";
import Navbar from "../Navbar";
import NavbarBottom from "../NavBarBottom";

function HomeScreen() {
    return (
        <>
            <BrowserView>
                <Navbar />
            </BrowserView>
            <div className="pb-16 md:pb-0">
                <Header />
                <Category />
                <Event />
                <About />
            </div>
            <MobileView>
                <NavbarBottom />
            </MobileView>
        </>
    )
}

export default withRouter(HomeScreen);