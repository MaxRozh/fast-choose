
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const itemSvg = {
    favorites: <SvgIcon color="primary">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </SvgIcon>,
    library: <SvgIcon color="primary">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>
    </SvgIcon>,
    history: <SvgIcon color="primary">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
    </SvgIcon>
};

const SideBarItem = (type, text, itemArray, openedListType, onToggleList, onCloseList, onRemove) => {

    const isListOpened = openedListType === type;
    let listAnchorEl = null;

    const fireOnToggleList = (event) => {

        if (listAnchorEl.contains(event.target)) {
            return;
        }

        onToggleList(type);
    };

    return <div style={{display: 'flex'}}>
        <Button
            buttonRef={(node) => { listAnchorEl = node; }}
            aria-owns={isListOpened ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onClick={() => onToggleList(type)}
        >
            {type}
            {itemSvg[type]}
        </Button>
        <Popper open={isListOpened} anchorEl={listAnchorEl} placement="right" transition disablePortal>
            {({ TransitionProps }) => (
                <Grow {...TransitionProps} id="menu-list-grow">
                    <Paper>
                        <ClickAwayListener onClickAway={fireOnToggleList}>
                            <MenuList>

                                { itemArray.length === 0
                                    ? <Typography>{text.noSaved}</Typography>
                                    : itemArray.map((item) => {
                                        return <MenuItem onClick={fireOnToggleList} key={item.id}>
                                            {item.text}
                                            <SvgIcon color="error" align="right" onClick={() => { onRemove(type, item.id); }}>
                                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                            </SvgIcon>
                                        </MenuItem>;
                                    })
                                }
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    </div>;
};

if (process.env !== 'production') {

    SideBarItem.propTypes = {
        type: PropTypes.string.isRequired,
        text: PropTypes.object.isRequired,
        itemArray: PropTypes.array.isRequired,
        openedListType: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.bool.isRequired
        ]),
        onToggleList: PropTypes.object.isRequired,
        onCloseList: PropTypes.bool.isRequired,
        onRemove: PropTypes.func.isRequired
    };
}

export default SideBarItem;
