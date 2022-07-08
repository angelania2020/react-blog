import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom'
import BlogLogo from '../../assets/web-design-big.png';

import './navigation.styles.scss'


const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>

                <Link className='logo-container' to='/' >
                    <img src={BlogLogo} className='logo' alt="Blog logo" />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/blog'>
                        BLOG
                    </Link>
                </div>

            </div>

            <Outlet />
        </Fragment>
    );
}

export default Navigation;