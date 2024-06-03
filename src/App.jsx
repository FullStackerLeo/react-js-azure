// https://www.linkedin.com/pulse/step-by-step-guide-creating-responsive-sidebar-menu-khalilullah-pgsjc/
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarLeft from './components/SidebarLeft';
import MainContent from './components/MainContent';

function App() {

  return (
        <div id="layout-wrapper">
            <Header />
            <SidebarLeft />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App
