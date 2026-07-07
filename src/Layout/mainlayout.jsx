import React from "react";
import Footer from "../component/footer";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const mainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default mainLayout;