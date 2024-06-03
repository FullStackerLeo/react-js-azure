// Header.js
import React from 'react';
import logo_sm from "/src/static/picture/logo-sm.svg"
import us from "/src/static/picture/us.jpg"
import spain from "/src/static/picture/spain.jpg"
import germany from "/src/static/picture/germany.jpg"
import russia from "/src/static/picture/russia.jpg"
import italy from "/src/static/picture/italy.jpg"
import avatar_1 from '/src/static/picture/avatar-1.jpg'

function Header() {
  return (

    <header id="page-topbar">
        <div className="navbar-header">
            <div className="d-flex">
                {/* <!-- LOGO --> */}
                <div className="navbar-brand-box">
                    <a href="" className="logo logo-dark">
                        <span className="logo-sm">
                            {/* <img src="static/picture/logo-sm.svg" alt="" height="24"> */}
                            <img src={logo_sm} alt="Logo" height="24" />
                        </span>
                        <span className="logo-lg">
                            <img src={logo_sm} alt="Logo" height="24" />
                        </span>
                    </a>

                    <a href="" className="logo logo-light">
                        <span className="logo-sm">
                            <img src={logo_sm} alt="Logo" height="24" />
                        </span>
                        <span className="logo-lg">
                            <img src={logo_sm} alt="Logo" height="24" />
                        </span>
                    </a>
                </div>

                <button type="button" className="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                    <i className="fa fa-fw fa-bars"></i>
                </button>

                {/* <!-- App Search--> */}
                <form className="app-search d-none d-lg-block">
                    <div className="position-relative">
                        <input type="text" className="form-control" placeholder="Search..." />
                        <button className="btn btn-primary" type="button"><i className="bx bx-search-alt align-middle"></i></button>
                    </div>
                </form>
            </div>

            <div className="d-flex">

                <div className="dropdown d-inline-block d-lg-none ms-2">
                    <button type="button" className="btn header-item" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i data-feather="search" className="icon-lg"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">

                        <form className="p-3">
                            <div className="form-group m-0">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search ..." aria-label="Search Result" />

                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="dropdown d-none d-sm-inline-block">
                    <button type="button" className="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <img id="header-lang-img" src="static/picture/us.jpg" alt="Header Language" height="16"> */}
                        <img id="header-lang-img" src={us} alt="Header Language" height="16" />

                    </button>
                    <div className="dropdown-menu dropdown-menu-end">

                        {/* <!-- item--> */}
                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="en">
                            {/* <img src="static/picture/us.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">English</span> */}
                            <img src={us} alt="" className='me-1' height='12' />
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                            {/* <img src="static/picture/spain.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Spanish</span> */}
                            <img src={spain} alt="" className='me-1' height='12' />
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                            {/* <img src="static/picture/germany.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">German</span> */}
                            <img src={germany} alt="" className='me-1' height='12' />
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                            {/* <img src="static/picture/italy.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Italian</span> */}
                            <img src={italy} alt="" className='me-1' height='12' />
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                            {/* <img src="static/picture/russia.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Russian</span> */}
                            <img src={russia} alt="" className='me-1' height='12' />
                        </a>
                    </div>
                </div>

                <div className="dropdown d-none d-sm-inline-block">
                    <button type="button" className="btn header-item" id="mode-setting-btn">
                        <i data-feather="moon" className="icon-lg layout-mode-dark"></i>
                        <i data-feather="sun" className="icon-lg layout-mode-light"></i>
                    </button>
                </div>


                <div className="dropdown d-inline-block">
                    <button type="button" className="btn header-item right-bar-toggle me-2">
                        <i data-feather="settings" className="icon-lg"></i>
                    </button>
                </div>

                <div className="dropdown d-inline-block">
                    <button type="button" className="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <img className="rounded-circle header-profile-user" src="static/picture/avatar-1.jpg" alt="Header Avatar"> */}
                        <img className="rounded-circle header-profile-user" src={avatar_1} alt="Header Avatar" />
                        <span className="d-none d-xl-inline-block ms-1 fw-medium">Shawn L.</span>
                        <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                        {/* <!-- item--> */}
                        <a className="dropdown-item" href="apps-contacts-profile.html"><i className="mdi mdi-face-profile font-size-16 align-middle me-1"></i> Profile</a>
                        <a className="dropdown-item" href="auth-lock-screen.html"><i className="mdi mdi-lock font-size-16 align-middle me-1"></i> Lock screen</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="auth-logout.html"><i className="mdi mdi-logout font-size-16 align-middle me-1"></i> Logout</a>
                    </div>
                </div>

            </div>
        </div>
    </header>
);
}

export default Header;
