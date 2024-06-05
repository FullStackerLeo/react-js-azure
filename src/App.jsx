// https://www.linkedin.com/pulse/step-by-step-guide-creating-responsive-sidebar-menu-khalilullah-pgsjc/

import Header from './components/Header';
import Footer from './components/Footer';
import SidebarLeft from './components/SidebarLeft';
import MainContent from './components/MainContent';

function App() {
    const handleRegisterClick = () => {
        // You can add additional logic here if needed
    };

    return (
        <div id="layout-wrapper">
            <Header handleRegisterClick={handleRegisterClick} />
            <SidebarLeft />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App
