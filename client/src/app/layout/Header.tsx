import { AppBar, List, ListItem, Switch, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const midLinks = [
    {tittle: 'catalog', path: '/catalog'},
    {tittle: 'about', path: '/about'},
    {tittle: 'contact', path: '/contact'},
]

const rightLinks = [
    {tittle: 'login', path: '/login'},
    {tittle: 'register', path: '/register'},
]




interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const Header = ({ darkMode, handleThemeChange }: Props) => {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar> 
                <Typography variant='h6'>Re-Store</Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({tittle, path}) => (
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{color: 'inherit', textDecoration: 'none', mr: 4}}
                        >
                            {tittle.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({tittle, path}) => (
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{color: 'inherit', textDecoration: 'none', mr: 4}}
                        >
                            {tittle.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}

export default Header