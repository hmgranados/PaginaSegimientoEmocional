import { Link } from "react-router-dom";
import './header.css'
import {routes} from "../../routes";
import ItemNavbar from './ItemNavbar.tsx'
import {useUserStore} from "../../hooks";
import {itemNavbarData} from "../../config";
import {Button} from "@mui/material";
import logo from '../../assets/img/imgLogo.png';

const Header = () => {
    const user = useUserStore(state => state);

    return (
        <nav className="nav">
            <ul>
                <Link to={routes.HOME}> 
                <img src={logo} alt="Logo" className="logo" />
                </Link>
                {user.id !== 0 && <ItemNavbar items={itemNavbarData[user.role.name]} />}
            </ul>
            <ul>
                {user.id === 0 ? (
                    <>
                        <Button
                            component={Link}
                            to={routes.LOGIN}
                            sx={{color: "#89939E"}}
                        >
                            Login
                        </Button>
                        <Button
                            component={Link}
                            to={routes.SIGN_UP}
                            sx={{color: "#89939E"}}
                        >
                            SIGN UP
                        </Button>
                    </>
                ) : (
                    <>
                        <p>{user.email}</p>
                        <Button
                            sx={{color: "#89939E"}}
                            onClick={() => useUserStore.getState().logout()}
                        >
                            Cerrar sesión
                        </Button>
                    </>

                )}
            </ul>
        </nav>
    )
}

export default Header;