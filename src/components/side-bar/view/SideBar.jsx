
import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import SideBarItem from './SideBarItem.jsx';

import './SideBar.scss';

function SideBar({favorites, library, history, openedListType, text, isSideBarOpened, onToggleList, onCloseList,
    onRemove, onToggleSideBar}) {

    const favoritesList = SideBarItem('favorites', text, favorites, openedListType, onToggleList, onCloseList, onRemove);
    const libraryList = SideBarItem('library', text, library, openedListType, onToggleList, onCloseList, onRemove);
    const historyList = SideBarItem('history', text, history, openedListType, onToggleList, onCloseList, onRemove);

    return (
        <div className="side-bar">

            <Drawer open={isSideBarOpened} onClose={() => onToggleSideBar(false)}>
                <div
                    tabIndex={0}
                    role="button"
                >
                    <List component="nav">
                        <ListItem button>
                            {favoritesList}
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            {libraryList}
                        </ListItem>
                        <ListItem button>
                            {historyList}
                        </ListItem>
                    </List>
                </div>
            </Drawer>

        </div>
    );
}

if (process.env !== 'production') {

    SideBar.propTypes = {
        favorites: PropTypes.array.isRequired,
        library: PropTypes.array.isRequired,
        history: PropTypes.array.isRequired,
        openedListType: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.bool.isRequired
        ]),
        text: PropTypes.object.isRequired,
        isSideBarOpened: PropTypes.bool.isRequired,
        onToggleList: PropTypes.func.isRequired,
        onCloseList: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
        onToggleSideBar: PropTypes.func.isRequired
    };
}

export default SideBar;
