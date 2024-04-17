import { Outlet } from 'react-router-dom';

import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

const LayoutPage = ({children}) => {

    return (
        <>
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
        <main>{children}</main>
        </>
    )
}

export default LayoutPage;