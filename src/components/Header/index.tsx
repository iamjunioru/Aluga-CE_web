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
import logo_menu from '../../assets/logo_menu.svg';

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
          <img src={logo_menu} alt="Aluga-CE Logo" />
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
