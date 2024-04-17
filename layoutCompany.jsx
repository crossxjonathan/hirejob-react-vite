import { Outlet } from 'react-router-dom';

import Footer from './hirejob-react-vite/src/components/footer/footer';
import HeaderCompany from './hirejob-react-vite/src/components/header/companyHeader';

const LayoutCompany = ({children}) => {

    return (
        <>
        <div>
            <HeaderCompany />
            <Outlet />
            <Footer />
        </div>
        <main>{children}</main>
        </>
    )
}

export default LayoutCompany;