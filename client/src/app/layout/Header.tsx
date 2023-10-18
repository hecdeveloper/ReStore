import { ShoppingCart } from "@mui/icons-material";
import {
    AppBar,
    Badge,
    Box,
    IconButton,
    List,
    ListItem,
    Switch,
    Toolbar,
    Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    { tittle: "catalog", path: "/catalog" },
    { tittle: "about", path: "/about" },
    { tittle: "contact", path: "/contact" },
];

const rightLinks = [
    { tittle: "login", path: "/login" },
    { tittle: "register", path: "/register" },
];

const navStyles = {
    color: "inherit",
    textDecoration: "none",
    typography: "h6",
    "&:hover": { color: "secondary.main" },
    "&.active": { color: "text.secondary" },
};

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const Header = ({ darkMode, handleThemeChange }: Props) => {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to="/"
                        sx={{ color: "inherit", textDecoration: "none" }}
                    >
                        Re-Store
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>

                <List sx={{ display: "flex" }}>
                    {midLinks.map(({ tittle, path }) => (
                        <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                            {tittle.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box>
                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                        <Badge badgeContent="4" color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: "flex" }}>
                        {rightLinks.map(({ tittle, path }) => (
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                {tittle.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
