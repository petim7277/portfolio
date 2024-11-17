import Navbar from "../reusables/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}
export default Layout;