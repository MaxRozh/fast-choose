
import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

function Header({isSignIn = false, name, isStartedLogin = false, onSignIn, onLogin, onLogout, onSearch}) {

    let inputSearchElem = null;
    let inputLoginElem = null;

    const fireOnSearch = () => {

        const value = inputSearchElem !== null ? inputSearchElem.value.trim() : '';

        onSearch(value);
    };

    const fireOnLogin = () => {

        if (inputLoginElem === null) {

            onLogin(false, '');
        } else {

            const value = inputLoginElem !== null ? inputLoginElem.value.trim() : '';

            if (value.length === 0) {
                return;
            }

            onLogin(true, value);
        }
    };

    return (
        <header>
            <div className="logo">Logo</div>

            <div className="search">
                <input
                    type="text"
                    placeholder="Type here"
                    ref={InputSearchElem => inputSearchElem = InputSearchElem}
                    onChange={fireOnSearch}
                />
                <input type="button" value="Search" onClick={fireOnSearch}/>
            </div>

            <div className="sign-in">
                <p>{isSignIn ? 'Hi ' + name : 'Hi guest'}</p>
                { isSignIn
                    ? <div>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                    : <div>
                        <button onClick={onSignIn}>Sign up</button>
                        <button onClick={fireOnLogin}>Login</button>
                        { isStartedLogin
                            ? <input
                                type="text"
                                placeholder="Your name..."
                                ref={InputLoginElem => inputLoginElem = InputLoginElem}
                            />
                            : null
                        }
                    </div>
                }
            </div>
        </header>
    );
}

if (process.env !== 'production') {

    Header.propTypes = {
        isSignIn: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        isStartedLogin: PropTypes.bool.isRequired,
        onSignIn: PropTypes.func.isRequired,
        onLogin: PropTypes.func.isRequired,
        onLogout: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired
    };
}

export default Header;
