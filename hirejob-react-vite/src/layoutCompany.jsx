import { Outlet } from 'react-router-dom';

import Footer from '../src/components/footer/footer';
import HeaderCompany from '../src/components/header/companyHeader';

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