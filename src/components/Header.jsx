// Header.js
import React    from 'react';
import logo_sm  from "/src/static/picture/logo.png"
import us       from "/src/static/picture/us.jpg"
import spain    from "/src/static/picture/spain.jpg"
import germany  from "/src/static/picture/germany.jpg"
import russia   from "/src/static/picture/russia.jpg"
import italy    from "/src/static/picture/italy.jpg"
import avatar_1 from '/src/static/picture/avatar-1.jpg'
import avatar_6 from '/src/static/picture/avatar-6.jpg'
import avatar_3 from '/src/static/picture/avatar-3.jpg'
import github   from '/src/static/picture/github.png'
import bitbucket from '/src/static/picture/bitbucket.png'
import dribbble  from '/src/static/picture/dribbble.png'
import dropbox  from '/src/static/picture/dropbox.png'
import mail_chimp from '/src/static/picture/mail_chimp.png'
import slack    from '/src/static/picture/slack.png'
import moon     from '/src/static/picture/moon.png'


const  Header = ({ handleRegisterClick } ) => {
  return (
    <header id="page-topbar">
    <div className="navbar-header">
        <div className="d-flex">
            {/* <!-- LOGO --> */}
            <div className="navbar-brand-box">
                <a href="" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src={logo_sm} alt="Logo" height="24" />
                    </span>
                    <span className="logo-lg">
                        <img src={logo_sm} alt="Logo" height="24" /> <span className="logo-txt">ReApex</span>
                    </span>
                </a>

                <a href="" className="logo logo-light">
                    <span className="logo-sm">
                        <img src={logo_sm} alt="Logo" height="24" />
                    </span>
                    <span className="logo-lg">
                        <img src={logo_sm} alt="Logo" height="24" /> <span className="logo-txt">ReApex</span>
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
                    <svg className="icon-lg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
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
                    {/* <img id="header-lang-img" src={us.jpg" alt="Header Language" height="16"> */}
                    <img id="header-lang-img" src={us} alt="Header Language" height="16" />

                </button>
                <div className="dropdown-menu dropdown-menu-end">

                        {/* <!-- item--> */}
                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="en">
                            {/* <img src={us.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">English</span> */}
                            <img src={us} alt="" className='me-1' height='12' /> <span className="align-middle">English</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                            {/* <img src={spain.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Spanish</span> */}
                            <img src={spain} alt="" className='me-1' height='12' />  <span className="align-middle">Spanish</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                            {/* <img src={germany.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">German</span> */}
                            <img src={germany} alt="" className='me-1' height='12' /> <span className="align-middle">Germany</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                            {/* <img src={italy.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Italian</span> */}
                            <img src={italy} alt="" className='me-1' height='12' /> <span className="align-middle">Italian</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                            {/* <img src={russia.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Russian</span> */}
                            <img src={russia} alt="" className='me-1' height='12' /> <span className="align-middle">Russian</span>
                        </a>
                </div>
            </div>
            <div className="dropdown d-none d-sm-inline-block">
                <button type="button" className="btn header-item" id="mode-setting-btn">
                    {/* <i data-feather="moon" className="icon-lg layout-mode-dark" ></i>
                    <i data-feather="sun" className="icon-lg layout-mode-light" ></i> */}
                    <img src={moon} alt="moon" height='18'/>
                </button>
            </div>
            <div className="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" className="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {/* <i data-feather="grid" className="icon-lg"></i> */}
                        {/* <svg className="icon-lg" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                     */}

                    <svg className="icon-lg" viewBox="0 0 24 24">
                        <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/></svg>


                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                    <div className="p-2">
                        <div className="row g-0">
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src={github} alt="Github"/>
                                    <span>GitHub</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src={bitbucket} alt="bitbucket"/>
                                    <span>Bitbucket</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src={dribbble} alt="dribbble"/>
                                    <span>Dribbble</span>
                                </a>
                            </div>
                        </div>

                        <div className="row g-0">
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src={dropbox} alt="dropbox"/>
                                    <span>Dropbox</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src={mail_chimp} alt="mail_chimp"/>
                                    <span>Mail Chimp</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src={slack} alt="slack"/>
                                    <span>Slack</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon position-relative" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {/* <i data-feather="bell" className="icon-lg"></i> */}
<svg className='icon-lg' id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.97,6.88c-.3-1.67-1.75-2.88-3.45-2.88h-1.03c.31-.42,.5-.94,.5-1.5,0-1.38-1.12-2.5-2.5-2.5h-5c-1.38,0-2.5,1.12-2.5,2.5,0,.56,.19,1.08,.5,1.5h-1.03c-1.7,0-3.15,1.21-3.45,2.88L.69,20h7.31c0,2.21,1.79,4,4,4s4-1.79,4-4h7.31l-2.34-13.12ZM8,2.5c0-.83,.67-1.5,1.5-1.5h5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-5c-.83,0-1.5-.67-1.5-1.5ZM1.88,19L4.02,7.06c.21-1.19,1.25-2.06,2.46-2.06h11.05c1.21,0,2.25,.87,2.46,2.06l2.13,11.94H1.88Zm10.12,4c-1.65,0-3-1.35-3-3h6c0,1.65-1.35,3-3,3Z"/></svg>

                    <span className="badge bg-danger rounded-pill">5</span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div className="p-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="m-0"> Notifications </h6>
                            </div>
                            <div className="col-auto">
                                <a href="#!" className="small text-reset text-decoration-underline"> Unread (3)</a>
                            </div>
                        </div>
                    </div>
                    <div data-simplebar="" style={{ maxHeight: '230px' }}>
                        <a href="#!" className="text-reset notification-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                    <img src={avatar_3} className="rounded-circle avatar-sm" alt="user-pic"/>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">James Lemire</h6>
                                    <div className="font-size-13 text-muted">
                                        <p className="mb-1">It will seem like simplified English.</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>1 hours ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#!" className="text-reset notification-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 avatar-sm me-3">
                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                        <i className="bx bx-cart"></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">Your order is placed</h6>
                                    <div className="font-size-13 text-muted">
                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>3 min ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#!" className="text-reset notification-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 avatar-sm me-3">
                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                        <i className="bx bx-badge-check"></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">Your item is shipped</h6>
                                    <div className="font-size-13 text-muted">
                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>3 min ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#!" className="text-reset notification-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                    <img src={avatar_6} className="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">Salena Layfield</h6>
                                    <div className="font-size-13 text-muted">
                                        <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>1 hours ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 border-top d-grid">
                        <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                            <i className="mdi mdi-arrow-right-circle me-1"></i> <span>View More..</span> 
                        </a>
                    </div>
                </div>

            </div>
            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item right-bar-toggle me-2">
                    {/* <i data-feather="settings" className="icon-lg"></i> */}
                    <svg className="icon-lg" viewBox="0 0 24 24"><g id="_01_align_center" data-name="01 align center"><path d="M15,24H9V20.487a9,9,0,0,1-2.849-1.646L3.107,20.6l-3-5.2L3.15,13.645a9.1,9.1,0,0,1,0-3.29L.107,8.6l3-5.2L6.151,5.159A9,9,0,0,1,9,3.513V0h6V3.513a9,9,0,0,1,2.849,1.646L20.893,3.4l3,5.2L20.85,10.355a9.1,9.1,0,0,1,0,3.29L23.893,15.4l-3,5.2-3.044-1.758A9,9,0,0,1,15,20.487Zm-4-2h2V18.973l.751-.194A6.984,6.984,0,0,0,16.994,16.9l.543-.553,2.623,1.515,1-1.732-2.62-1.513.206-.746a7.048,7.048,0,0,0,0-3.75l-.206-.746,2.62-1.513-1-1.732L17.537,7.649,16.994,7.1a6.984,6.984,0,0,0-3.243-1.875L13,5.027V2H11V5.027l-.751.194A6.984,6.984,0,0,0,7.006,7.1l-.543.553L3.84,6.134l-1,1.732L5.46,9.379l-.206.746a7.048,7.048,0,0,0,0,3.75l.206.746L2.84,16.134l1,1.732,2.623-1.515.543.553a6.984,6.984,0,0,0,3.243,1.875l.751.194Zm1-6a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"/></g></svg>
                    {/* <svg className="icon-lg" viewBox="0 0 24 24"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/></svg> */}



                </button>
            </div>
            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle header-profile-user" src={avatar_1} alt="Header Avatar" />
                    <span className="d-none d-xl-inline-block ms-1 fw-medium">Shawn L.</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="apps-contacts-profile.html"><i className="mdi mdi-face-profile font-size-16 align-middle me-1"></i> Profile</a>
                    <a className="dropdown-item" href="auth-lock-screen.html"><i className="mdi mdi-lock font-size-16 align-middle me-1"></i> Lock screen</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={(e)=>{
                        e.preventDefault();
                        handleRegisterClick();
                    }}><i className="mdi mdi-logout font-size-16 align-middle me-1"></i> Logout/Register</a>
                </div>
            </div>
        </div>
    </div>
</header>
);
}

export default Header;
