import {Outlet} from "react-router-dom";
import {Header} from "../components";

const Layaut = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layaut;