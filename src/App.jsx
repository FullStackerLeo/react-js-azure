import Layout from "./layout/Layout_.jsx";
import SideMenuProvider from "./menu/SideMenuProvider";
import sideMenuConfigData from "./menu/LeftMenuData.jsx";

function App() {
    return (
        <SideMenuProvider menuData={sideMenuConfigData}>
            <Layout />
        </SideMenuProvider>
    )
}

export default App;