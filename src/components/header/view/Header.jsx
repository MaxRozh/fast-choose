import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import LoginModal from './LoginModal';

import './Header.scss';

function Header({isSignIn = false, name, isProfileMenuOpened = false, text, profileAnchorEl, onSignIn, onLogin,
                  onLogout, onSearch, onOpenProfileMenu, onOpenSideBar}) {

  let v = '';

  const fireOnSearch = (e) => {

    const value = e && e.target ? e.target.value.trim() : v.trim();
    v = value;

    onSearch(value);
  };

  return (
    <header>

      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu" onClick={onOpenSideBar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className="flex">
              <Link to="/" replace className="header__logo">Fast Choose</Link>
            </Typography>

            <TextField
              id="search"
              className="header__search"
              label={text.commonPlaceholder}
              type="search"
              margin="normal"
              onChange={fireOnSearch}
            />
            <IconButton onClick={fireOnSearch}>
              <SearchIcon />
            </IconButton>

            <div>
              <IconButton
                aria-owns="menu-appbar"
                aria-haspopup="true"
                onClick={onOpenProfileMenu}
                color="inherit"
              >
                <AccountCircle />
                {isSignIn ? <Typography>{name}</Typography> : null}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={profileAnchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={isProfileMenuOpened}
                onClose={onOpenProfileMenu}
              >

                {isSignIn
                  ? (
                    <div>
                      <MenuItem onClick={() => onOpenProfileMenu({currentTarget: null})}>Profile</MenuItem>
                      <MenuItem onClick={() => onOpenProfileMenu({currentTarget: null})}>My account</MenuItem>
                      <MenuItem onClick={onLogout}>{text.logout}</MenuItem>
                    </div>
                  ) : (
                    <div>
                      <MenuItem>
                        <LoginModal onSignIn={onSignIn} onLogin={onLogin} text={text} />
                      </MenuItem>
                    </div>
                  )
                }
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>

    </header>
  );
}

if (process.env !== 'production') {

  Header.propTypes = {
    isSignIn: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isProfileMenuOpened: PropTypes.bool.isRequired,
    text: PropTypes.shape({}).isRequired,
    profileAnchorEl: PropTypes.shape({}).isRequired,
    onSignIn: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onOpenProfileMenu: PropTypes.func.isRequired,
    onOpenSideBar: PropTypes.func.isRequired
  };
}

export default Header;
