
import React from 'react';
import PropTypes from 'prop-types';

import './SideBar.scss';

function SideBar({favorites, library, history, openedListType, onRemoveFavorite, onRemoveLibrary,
    onRemoveHistory, onOpenList}) {

    const fireOnOpenList = (listType) => {
        onOpenList(listType, 'remove-item');
    };

    return (
        <div className="side-bar">

            <div className="side-bar_item favorites">
                <span
                    className="favorites_icon side-bar_item-input"
                    onClick={() => { fireOnOpenList('favorites_icon'); }}
                >F</span>
                <div className={'side-bar_list' + (openedListType === 'favorites' ? ' opened' : '')}>
                    {
                        favorites.map((item) => {
                            return <div className="side-bar_list-item" key={item.id}>
                                <a href={item.link}>{item.text}</a>
                                <span
                                    className="remove-item"
                                    onClick={() => { onRemoveFavorite(item.id); }}
                                >X</span>
                            </div>;
                        })
                    }
                </div>
            </div>

            <div className="side-bar_item">
                <span
                    className="library_icon side-bar_item-input"
                    onClick={() => { fireOnOpenList('library_icon'); }}
                >L</span>
                <div className={'side-bar_list' + (openedListType === 'library' ? ' opened' : '')}>
                    {
                        library.map((item) => {
                            return <div className="side-bar_list-item" key={item.id}>
                                <a href={item.link}>{item.text}</a>
                                <span
                                    className="remove-item"
                                    onClick={() => { onRemoveLibrary(item.id); }}
                                >X</span>
                            </div>;
                        })
                    }
                </div>
            </div>

            <div className="side-bar_item history">
                <span
                    className="history_icon side-bar_item-input"
                    onClick={() => { fireOnOpenList('history_icon'); }}
                >H</span>
                <div className={'side-bar_list' + (openedListType === 'history' ? ' opened' : '')}>
                    {
                        history.map((item) => {
                            return <div className="side-bar_list-item" key={item.id}>
                                <a href={item.link}>{item.text}</a>
                                <span
                                    className="remove-item"
                                    onClick={() => { onRemoveHistory(item.id); }}
                                >X</span>
                            </div>;
                        })
                    }
                </div>
            </div>

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
        onRemoveFavorite: PropTypes.func.isRequired,
        onRemoveLibrary: PropTypes.func.isRequired,
        onRemoveHistory: PropTypes.func.isRequired,
        onOpenList: PropTypes.func.isRequired
    };
}

export default SideBar;
