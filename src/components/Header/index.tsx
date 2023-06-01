import { HeaderWrapper, HeaderContent, HeaderUser } from "./styled";
import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { MdExitToApp } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/themeContext";
import CustomizedDialogs from "../Modal";
import UserFormInfo from "../UserFormInfo";

function Header() {
  const theme = useContext(ThemeContext);
  const userContext = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeaderWrapper>
      <HeaderContent>
        <div
          className="header-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"></path>
          </svg>
          <h3>Aluga-CE</h3>
        </div>
        <HeaderUser>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ minWidth: 100 }}
              style={{ cursor: "pointer", color: "var(--primary)" }}
            >
              <CustomizedDialogs
                modalTitle="Entre em contato conosco"
                modalText="Tem um imóvel para alugar?"
              >
                Funcionalidade em desenvolvimento
              </CustomizedDialogs>
            </Typography>
            <Tooltip title="Menu">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  {userContext.user?.name ? (
                    userContext.user?.name[0].toUpperCase()
                  ) : (
                    <Avatar sx={{ width: 32, height: 32 }} />
                  )}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {userContext?.user && Object.keys(userContext?.user).length > 0 && (
              <MenuItem>
                <Avatar />
                <CustomizedDialogs
                  modalTitle="Minhas informações"
                  modalText="Minhas informações"
                >
                  <UserFormInfo />
                </CustomizedDialogs>
              </MenuItem>
            )}
            {userContext.user?.has_property && (
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <BsHouses size={24} />
                </ListItemIcon>
                Meus imóveis
              </MenuItem>
            )}
            <MenuItem
              onClick={() => {
                theme.toggleTheme();
              }}
            >
              {theme.theme.title === "dark" ? (
                <>
                  <ListItemIcon>
                    <MdOutlineWbSunny size={24} />
                  </ListItemIcon>
                  Tema claro
                </>
              ) : (
                <>
                  <ListItemIcon>
                    <MdOutlineDarkMode size={24} />
                  </ListItemIcon>
                  Tema escuro
                </>
              )}
            </MenuItem>
            <Divider />
            {userContext?.user && Object.keys(userContext?.user).length > 0 ? (
              <MenuItem
                onClick={() => {
                  userContext.signOut();
                  navigate("/signIn");
                }}
              >
                <ListItemIcon>
                  <MdExitToApp
                    size={24}
                    style={{ transform: "rotate(180deg)" }}
                  />
                </ListItemIcon>
                Sair
              </MenuItem>
            ) : (
              <MenuItem onClick={() => navigate("/signIn")}>
                <ListItemIcon>
                  <MdExitToApp size={24} />
                </ListItemIcon>
                Entrar
              </MenuItem>
            )}
          </Menu>
        </HeaderUser>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
