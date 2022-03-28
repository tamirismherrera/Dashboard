import { useAuth } from "../contexts/auth";
import { useState } from "react";

import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import AccountCircle from "@mui/icons-material/AccountCircle";

function MenuUserDashboard() {
  const { user, signout } = useAuth();

  const [menuUser, setMenuUser] = useState(null);

  const handleMenuUser = (event) => {
    setMenuUser(event.currentTarget);
  };

  const handleCloseMenuUser = () => {
    setMenuUser(null);
  };

  return (
    <div>
      <Button onClick={handleMenuUser} color="inherit">
        <AccountCircle /> Olá, {user.nome}
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={menuUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(menuUser)}
        onClose={handleCloseMenuUser}
      >
        <MenuItem>Minha Conta</MenuItem>
        <MenuItem onClick={signout}> Sair</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuUserDashboard;
