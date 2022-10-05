import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab } from "@mui/material";
import { logout } from "../../../redux/actions/authActions";

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const visibleReg = auth === null;
  const logoutHandler = (e) => {
    dispatch(logout());
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <Container
        maxWidth="xl"

      >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "space-around",
            }}
          >
            AutoForum 21
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AutoForum
          </Typography>
          {visibleReg && (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                component={NavLink}
                to="/registration"
              >
                Зарегистрироваться
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                component={NavLink}
                to="/login"
              >
                Войти
              </Button>
            </Box>
          )}

          {!visibleReg && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Перейти в личный кабинет">
                <IconButton
                  component={NavLink}
                  to="/personal"
                  sx={{ p: 0 }}
                >
                  <Avatar alt="text" src="/elDar.jpg" />
                </IconButton>
              </Tooltip>
              <Button onClick={logoutHandler} sx={{ color: "white" }} component={NavLink} to="/login">
                Выйти
              </Button>
              <Fab
                component={NavLink}
                to="/"
                variant="extended"
              >
                <NavigationIcon sx={{ mr: 1 }} />
                На главную
              </Fab>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
