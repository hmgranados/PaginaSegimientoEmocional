import {NavbarItem} from "../../config";
import * as React from "react";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export interface ItemsNavbarProps {
    items: NavbarItem[];
}

const ItemNavbar: React.FC<ItemsNavbarProps> = ({ items }) => {
    return (
        <>
            {items?.map((item: NavbarItem) => (
                <Button
                    key={item.label}
                    component={NavLink}
                    to={item.href}
                    sx={{color: "#89939E"}}
                >
                    {item.label}
                </Button>
            ))}
        </>
    )
}

export default ItemNavbar;