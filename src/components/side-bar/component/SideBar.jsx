
import React from 'react';
import PropTypes from 'prop-types';

import './SideBar.scss';

function SideBar({favorites, library, history, removeFavorite, removeLibrary, removeHistory}) {

    return (
        <div className="side-bar">

            <div className="side-bar_item favorites">
                <span className="favorites_icon" />
                <div className="side-bar_list favorites_list">
                    {
                        favorites.map((item) => {
                            return <div className="favorite-item" key={item.id}>
                                <a href={item.link}>{item.text}</a>
                                <span
                                    className="remove-item"
                                    onClick={() => { removeFavorite(item.id); }}
                                >X</span>
                            </div>;
                        })
                    }
                </div>
            </div>

            <div className="side-bar_item my-library">
                <span className="library_icon" />
                <div className="side-bar_list library_list">
                    {
                        library.map((item) => {
                            return <div className="library-item" key={item.id}>
                                <a href={item.link}>{item.text}</a>
                                <span
                                    className="remove-item"
                                    onClick={() => { removeLibrary(item.id); }}
                                >X</span>
                            </div>;
                        })
                    }
                </div>
            </div>

            <div className="side-bar_item history">
                <span className="history_icon" />
                <div className="side-bar_list history_list">
                    {
                        history.map((item) => {
                            return <div className="history-item" key={item.id}>
                                <a href={item.link}>{item.text}</a>
                                <span
                                    className="remove-item"
                                    onClick={() => { removeHistory(item.id); }}
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
        removeFavorite: PropTypes.func.isRequired,
        removeLibrary: PropTypes.func.isRequired,
        removeHistory: PropTypes.func.isRequired
    };
}

export default SideBar;
