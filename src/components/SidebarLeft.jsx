// Header.js
import React from 'react';
import { NavLink, Link } from "react-router-dom";
import giftbox from "/src/static/picture/giftbox.png"
import MetisMenu from "@metismenu/react";

function SidebarLeft() {
    
return (
<div class="vertical-menu">
    <div data-simplebar="" class="h-100">

        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">
            {/* <!-- Left Menu Start --> */}
            <ul class="metismenu list-unstyled" id="side-menu">

            <MetisMenu>

                <li class="menu-title" data-key="t-menu">Menu</li>

                <li>
                    {/* <NavLink to=""> */}
                    <NavLink to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,14a3,3,0,0,0-3,3v7.026h6V17A3,3,0,0,0,12,14Z"/><path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H7V17a5,5,0,0,1,10,0v7.026h3.8a3.2,3.2,0,0,0,3.2-3.2v-10.4Z"/></svg>
                        <span data-key="t-dashboard">Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    {/* <Link to="#" className="has-arrow"> */}
                    <Link to="#" className="has-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m6,6h3v3h-3v-3Zm9,12h3v-3h-3v3Zm-9,0h3v-3h-3v3Zm9-9h3v-3h-3v3Zm9-4v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-13,9.5c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm0-9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm9,9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm0-9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Z"/></svg>
                        <span data-key="t-apps">Apps</span>
                    </Link>
                    <ul class="sub-menu" aria-expanded="false">
                        <li>
                            {/* <NavLink to="apps-calendar.html"> */}
                            <NavLink to="apps-calendar.html">
                                <span data-key="t-calendar">Calendar</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="apps-chat.html">
                                <span data-key="t-chat">Chat</span>
                            </NavLink>
                        </li>

                        <li>
                            <Link to="#" className="has-arrow">
                                <span data-key="t-email">Email</span>
                            </Link>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><NavLink to="apps-email-inbox.html" data-key="t-inbox">Inbox</NavLink></li>
                                <li><NavLink to="apps-email-read.html" data-key="t-read-email">Read Email</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" className="has-arrow">
                                <span data-key="t-invoices">Invoices</span>
                            </Link>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><NavLink to="apps-invoices-list.html" data-key="t-invoice-list">Invoice List</NavLink></li>
                                <li><NavLink to="apps-invoices-detail.html" data-key="t-invoice-detail">Invoice Detail</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" className="has-arrow">
                                <span data-key="t-contacts">Contacts</span>
                            </Link>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><NavLink to="apps-contacts-grid.html" data-key="t-user-grid">User Grid</NavLink></li>
                                <li><NavLink to="apps-contacts-list.html" data-key="t-user-list">User List</NavLink></li>
                                <li><NavLink to="apps-contacts-profile.html" data-key="t-profile">Profile</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
	<Link to="#"  class="has-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.912,20.027l-1.057-5.96a3.477,3.477,0,0,0-1-5.793A10,10,0,0,0,2.226,7.9L1.5,12s1.607,0,1.778-.013a12.2,12.2,0,0,0,4.9-1.191A1.484,1.484,0,0,0,8,11.5a1.5,1.5,0,1,0,1.637-1.484A16.531,16.531,0,0,0,16.121,3.14a7.966,7.966,0,0,1,3.833,6.009l.078.746.738.133A1.5,1.5,0,0,1,20.5,13H19.351l-.22.624C18.214,16.222,15.13,19,12,19a8.358,8.358,0,0,1-7-5H1.147L.065,20.115A3.238,3.238,0,0,0,3.237,24L9,24V20.408A8.2,8.2,0,0,0,12,21a8.218,8.218,0,0,0,3-.591V24h5.762a3.217,3.217,0,0,0,2.56-1.256A3.172,3.172,0,0,0,23.912,20.027Z"/><circle cx="14.5" cy="11.5" r="1.5"/></svg>
		<span data-key="t-authentication">Authentication</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="auth-login.html" data-key="t-login">Login</NavLink></li>
		<li><NavLink to="auth-register.html" data-key="t-register">Register</NavLink></li>
		<li><NavLink to="auth-recoverpw.html" data-key="t-recover-password">Recover Password</NavLink></li>
		<li><NavLink to="auth-lock-screen.html" data-key="t-lock-screen">Lock Screen</NavLink></li>
		<li><NavLink to="auth-logout.html" data-key="t-logout">Log Out</NavLink></li>
		<li><NavLink to="auth-confirm-mail.html" data-key="t-confirm-mail">Confirm Mail</NavLink></li>
		<li><NavLink to="auth-email-verification.html" data-key="t-email-verification">Email Verification</NavLink></li>
		<li><NavLink to="auth-two-step-verification.html" data-key="t-two-step-verification">Two Step Verification</NavLink></li>
	</ul>
</li>

<li>
	<Link to="#"  class="has-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m7.5,12h-2c-.827,0-1.5.673-1.5,1.5v2c0,.827.673,1.5,1.5,1.5h2c.827,0,1.5-.673,1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5Zm.5,3.5c0,.276-.225.5-.5.5h-2c-.275,0-.5-.224-.5-.5v-2c0-.276.225-.5.5-.5h2c.275,0,.5.224.5.5v2ZM19.5,2h-1.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5H7V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-1.5C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5Zm-15,1h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm15,20H4.5c-1.93,0-3.5-1.57-3.5-3.5v-10.5h22v10.5c0,1.93-1.57,3.5-3.5,3.5Z"/></svg>
		<span data-key="t-pages">Pages</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="pages-starter.html" data-key="t-starter-page">Starter Page</NavLink></li>
		<li><NavLink to="pages-maintenance.html" data-key="t-maintenance">Maintenance</NavLink></li>
		<li><NavLink to="pages-comingsoon.html" data-key="t-coming-soon">Coming Soon</NavLink></li>
		<li><NavLink to="pages-timeline.html" data-key="t-timeline">Timeline</NavLink></li>
		<li><NavLink to="pages-faqs.html" data-key="t-faqs">FAQs</NavLink></li>
		<li><NavLink to="pages-pricing.html" data-key="t-pricing">Pricing</NavLink></li>
		<li><NavLink to="pages-404.html" data-key="t-error-404">Error 404</NavLink></li>
		<li><NavLink to="pages-500.html" data-key="t-error-500">Error 500</NavLink></li>
	</ul>
</li>

<li><NavLink to="layouts-horizontal.html">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.768,11.448l-4.418-4.361c-.498-.492-1.35-.143-1.35,.552v3.361H2V4c0-.552-.448-1-1-1s-1,.448-1,1V20c0,.552,.448,1,1,1s1-.448,1-1v-7H18v3.361c0,.695,.852,1.044,1.35,.552l4.418-4.361c.309-.305,.309-.799,0-1.104Z"/></svg>
		<span data-key="t-horizontal">Horizontal</span>
	</NavLink>
</li>

<li class="menu-title mt-2" data-key="t-components">Elements</li>

<li>
	<Link to="#"  class="has-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM11,2h2a3,3,0,0,1,2.816,2H8.184A3,3,0,0,1,11,2ZM5,6H19a3,3,0,0,1,3,3v3H2V9A3,3,0,0,1,5,6ZM19,22H5a3,3,0,0,1-3-3V14h9v1a1,1,0,0,0,2,0V14h9v5A3,3,0,0,1,19,22Z"/></svg>
		<span data-key="t-components">Components</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="ui-alerts.html" data-key="t-alerts">Alerts</NavLink></li>
		<li><NavLink to="ui-buttons.html" data-key="t-buttons">Buttons</NavLink></li>
		<li><NavLink to="ui-cards.html" data-key="t-cards">Cards</NavLink></li>
		<li><NavLink to="ui-carousel.html" data-key="t-carousel">Carousel</NavLink></li>
		<li><NavLink to="ui-dropdowns.html" data-key="t-dropdowns">Dropdowns</NavLink></li>
		<li><NavLink to="ui-grid.html" data-key="t-grid">Grid</NavLink></li>
		<li><NavLink to="ui-images.html" data-key="t-images">Images</NavLink></li>
		<li><NavLink to="ui-modals.html" data-key="t-modals">Modals</NavLink></li>
		<li><NavLink to="ui-offcanvas.html" data-key="t-offcanvas">Offcanvas</NavLink></li>
		<li><NavLink to="ui-progressbars.html" data-key="t-progress-bars">Progress Bars</NavLink></li>
		<li><NavLink to="ui-tabs-accordions.html" data-key="t-tabs-accordions">Tabs & Accordions</NavLink></li>
		<li><NavLink to="ui-typography.html" data-key="t-typography">Typography</NavLink></li>
		<li><NavLink to="ui-video.html" data-key="t-video">Video</NavLink></li>
		<li><NavLink to="ui-general.html" data-key="t-general">General</NavLink></li>
		<li><NavLink to="ui-colors.html" data-key="t-colors">Colors</NavLink></li>
	</ul>
</li>

<li>
	<Link to="#"  class="has-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M13.088,5.084c1.065-.696,2.912-2.201,2.912-4.284V0H8V.8c0,2.083,1.847,3.588,2.912,4.284C5.548,5.908,1,12.63,1,18c0,3.309,2.691,6,6,6h10c3.309,0,6-2.691,6-6,0-5.37-4.548-12.092-9.912-12.916Zm-2.445,8.676l3.042,.507c1.341,.223,2.315,1.373,2.315,2.733,0,1.654-1.346,3-3,3v1h-2v-1c-1.654,0-3-1.346-3-3h2c0,.551,.449,1,1,1h2c.551,0,1-.449,1-1,0-.378-.271-.698-.644-.76l-3.042-.507c-1.341-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3v-1h2v1c1.654,0,3,1.346,3,3h-2c0-.551-.449-1-1-1h-2c-.551,0-1,.449-1,1,0,.378,.271,.698,.644,.76Z"/></svg>
		<span data-key="t-ui-elements">Extended</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="extended-lightbox.html" data-key="t-lightbox">Lightbox</NavLink></li>
		<li><NavLink to="extended-rangeslider.html" data-key="t-range-slider">Range Slider</NavLink></li>
		<li><NavLink to="extended-sweet-alert.html" data-key="t-sweet-alert">SweetAlert 2</NavLink></li>
		<li><NavLink to="extended-session-timeout.html" data-key="t-session-timeout">Session Timeout</NavLink></li>
		<li><NavLink to="extended-rating.html" data-key="t-rating">Rating</NavLink></li>
		<li><NavLink to="extended-notifications.html" data-key="t-notifications">Notifications</NavLink></li>
	</ul>
</li>

<li>
	<Link to="#" >
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="M.42,3.104c.818,1.553,1.837,3.486,3.694,4.442,.604,.311,1.437,.462,2.186,.462,.401,0,1.219-.084,2.013-.603,.394,.759,.619,1.5,.69,2.15,.027,.25,.236,.441,.488,.446h.009c.248,0,.459-.182,.495-.428,.06-.415,.362-1.789,1.616-2.734,.309,.393,.708,.716,1.19,.917,.396,.165,.814,.247,1.23,.247,.504,0,1.005-.12,1.463-.357,1.17-.608,2.272-1.667,3.276-3.149,.236-.349,.293-.777,.156-1.173-.145-.418-.493-.751-.933-.893-1.314-.422-3.271-.749-5.136,.085-1.429,.639-2.15,2.101-1.735,3.438-.748,.53-1.242,1.179-1.559,1.784-.129-.33-.297-.667-.485-1.006,.12-.141,.238-.291,.347-.465,.562-.895,.72-2.003,.435-3.042-.277-1.011-.932-1.826-1.844-2.295C5.021-.612,2.22,.184,.815,.794,.463,.949,.19,1.237,.069,1.586c-.116,.336-.087,.696,.083,1.013l.268,.504Zm12.847,.324c1.573-.705,3.274-.414,4.423-.046,.143,.046,.25,.143,.292,.267,.024,.068,.036,.174-.039,.286-.909,1.342-1.889,2.292-2.909,2.822-.565,.292-1.256,.321-1.848,.075-.552-.229-.949-.658-1.12-1.206-.263-.845,.242-1.77,1.201-2.198ZM1.215,1.711c1.241-.541,3.717-1.246,6.346,.107,.659,.339,1.135,.933,1.337,1.67,.211,.769,.141,1.601-.391,2.339-.844-1.164-2.071-2.293-3.776-3.181-.241-.127-.546-.032-.674,.212-.128,.245-.032,.547,.213,.674,1.626,.846,2.768,1.922,3.529,3.015-.781,.527-1.607,.458-1.697,.45-.551-.006-1.073-.109-1.53-.344-1.576-.811-2.475-2.515-3.267-4.019l-.271-.511c-.037-.069-.043-.141-.019-.212,.029-.086,.103-.16,.2-.203Zm21.966,7.943c-.497-.452-1.142-.675-1.809-.652-.67,.032-1.288,.322-1.739,.818l-3.732,4.102c-.314-1.108-1.335-1.923-2.543-1.923H3.5c-1.93,0-3.5,1.57-3.5,3.5v5c0,1.93,1.57,3.5,3.5,3.5h5.965c2.706,0,5.291-1.159,7.093-3.18l6.806-7.64c.911-1.022,.829-2.604-.183-3.526Zm-.563,2.861l-6.806,7.639c-1.612,1.809-3.926,2.846-6.347,2.846H3.5c-1.379,0-2.5-1.121-2.5-2.5v-5c0-1.379,1.121-2.5,2.5-2.5H13.357c.905,0,1.643,.737,1.643,1.643,0,.812-.605,1.511-1.398,1.624l-6.161,.737c-.274,.032-.47,.281-.437,.556,.032,.274,.282,.477,.556,.437l6.172-.738c1.022-.146,1.846-.879,2.146-1.824l4.496-4.94c.271-.298,.643-.473,1.046-.492,.402-.02,.79,.12,1.088,.393,.609,.555,.658,1.506,.11,2.122Z"/>
        </svg>
		<span class="badge rounded-pill bg-soft-danger text-danger float-end">7</span>
		<span data-key="t-forms">Forms</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="form-elements.html" data-key="t-form-elements">Basic Elements</NavLink></li>
		<li><NavLink to="form-validation.html" data-key="t-form-validation">Validation</NavLink></li>
		<li><NavLink to="form-advanced.html" data-key="t-form-advanced">Advanced Plugins</NavLink></li>
		<li><NavLink to="form-editors.html" data-key="t-form-editors">Editors</NavLink></li>
		<li><NavLink to="form-uploads.html" data-key="t-form-upload">File Upload</NavLink></li>
		<li><NavLink to="form-wizard.html" data-key="t-form-wizard">Wizard</NavLink></li>
		<li><NavLink to="form-mask.html" data-key="t-form-mask">Mask</NavLink></li>
	</ul>
</li>

<li>
	<Link to="#"  class="has-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/></svg>
		<span data-key="t-tables">Tables</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="tables-basic.html" data-key="t-basic-tables">Bootstrap Basic</NavLink></li>
		<li><NavLink to="tables-datatable.html" data-key="t-data-tables">DataTables</NavLink></li>
		<li><NavLink to="tables-responsive.html" data-key="t-responsive-table">Responsive</NavLink></li>
		<li><NavLink to="tables-editable.html" data-key="t-editable-table">Editable</NavLink></li>
	</ul>
</li>

<li>
	<Link to="#"  class="has-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M6,11l3-3V24h-3V11ZM1,24h3V13l-3,3v8ZM22.909,0h-5.909l2.439,2.439-3.939,3.939L9.5,.379,.045,9.833l2.121,2.121,7.333-7.333,6,6,6.061-6.061,2.439,2.439V1.091c0-.602-.488-1.091-1.091-1.091Zm1.091,18c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-3.4-1.469l1.216-1.216-1.132-1.131-1.216,1.216c-.436-.247-.932-.4-1.469-.4s-1.033,.153-1.469,.4l-1.216-1.216-1.132,1.131,1.216,1.216c-.247,.436-.4,.932-.4,1.469s.153,1.033,.4,1.469l-1.216,1.216,1.132,1.131,1.216-1.216c.436,.247,.932,.4,1.469,.4s1.033-.153,1.469-.4l1.216,1.216,1.132-1.131-1.216-1.216c.247-.436,.4-.932,.4-1.469s-.153-1.033-.4-1.469Zm-2.6,.068c-.772,0-1.4,.628-1.4,1.4s.628,1.4,1.4,1.4,1.4-.628,1.4-1.4-.628-1.4-1.4-1.4Z"/></svg>
		<span data-key="t-charts">Charts</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="charts-apex.html" data-key="t-apex-charts">Apexcharts</NavLink></li>
		<li><NavLink to="charts-echart.html" data-key="t-e-charts">Echarts</NavLink></li>
		<li><NavLink to="charts-chartjs.html" data-key="t-chartjs-charts">Chartjs</NavLink></li>
		<li><NavLink to="charts-knob.html" data-key="t-knob-charts">Jquery Knob</NavLink></li>
		<li><NavLink to="charts-sparkline.html" data-key="t-sparkline-charts">Sparkline</NavLink></li>
	</ul>
</li>

<li>
	<Link to="#"  class="has-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.274,6.743,17.328.8A2.58,2.58,0,0,0,14.035.451a2.5,2.5,0,0,0-.318,3.806l.592.591a.81.81,0,0,1,0,1.142l-2.1,2.1a1.506,1.506,0,0,1-1.431.393l-.82-.21a8.124,8.124,0,0,0-2.9-.219,3.368,3.368,0,0,0-2.837,2.256,3.509,3.509,0,0,0,.817,3.682L6.784,15.8.293,22.293a1,1,0,1,0,1.414,1.414L8.174,17.24l1.25,1.294A4.675,4.675,0,0,0,12.675,20a3.51,3.51,0,0,0,1.172-.2,3.143,3.143,0,0,0,2.106-2.7,8.093,8.093,0,0,0-.214-2.874L15.527,13.2a1.508,1.508,0,0,1,.4-1.414L18.016,9.7a.93.93,0,0,1,.593-.244.728.728,0,0,1,.52.217l.506.506a2.575,2.575,0,0,0,3.32.374,2.5,2.5,0,0,0,.319-3.806Z"/></svg>
		<span data-key="t-icons">Icons</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="icons-boxicons.html" data-key="t-boxicons">Boxicons</NavLink></li>
		<li><NavLink to="icons-materialdesign.html" data-key="t-material-design">Material Design</NavLink></li>
		<li><NavLink to="icons-dripicons.html" data-key="t-dripicons">Dripicons</NavLink></li>
		<li><NavLink to="icons-fontawesome.html" data-key="t-font-awesome">Font Awesome 5</NavLink></li>
	</ul>
</li>

<li>
	<Link to="#"  class="has-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M14,12c0,1.019-.308,1.964-.832,2.754l-3.168-3.168V7.101c2.282,.463,4,2.48,4,4.899Zm-6-4.899c-2.282,.463-4,2.48-4,4.899,0,2.761,2.239,5,5,5,1.019,0,1.964-.308,2.754-.832l-3.754-3.754V7.101Zm8,1.899h4v-2h-4v2Zm0,4h4v-2h-4v2Zm0,4h4v-2h-4v2ZM24,6v15H0V6c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1v13H22V6Z"/></svg>
		<span data-key="t-maps">Maps</span>
	</Link>
	<ul class="sub-menu" aria-expanded="false">
		<li><NavLink to="maps-google.html" data-key="t-g-maps">Google</NavLink></li>
		<li><NavLink to="maps-vector.html" data-key="t-v-maps">Vector</NavLink></li>
		<li><NavLink to="maps-leaflet.html" data-key="t-l-maps">Leaflet</NavLink></li>
	</ul>
</li>
            </MetisMenu>
            </ul>
            <div class="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
                <div class="card-body">
                    <img src={giftbox} alt="" />

                    <div class="mt-4">
                        <h5 class="alertcard-title font-size-16">Let's Chat!</h5>
                        <p class="font-size-13">Upgrade your plan from a Free trial.</p>
                        <NavLink to="#!" class="btn btn-primary mt-2">email me: ReApexCA@gmail.com Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Sidebar --> */}
    </div>
</div>
);
}

export default SidebarLeft;
