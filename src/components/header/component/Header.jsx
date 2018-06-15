
import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

function Header({isSignIn = false, name, isStartedLogin = false, text, onSignIn, onLogin, onLogout,
    onSearch}) {

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
                    placeholder={text.commonPlaceholder}
                    ref={InputSearchElem => inputSearchElem = InputSearchElem}
                    onChange={fireOnSearch}
                />
                <input type="button" value={text.search} onClick={fireOnSearch}/>
            </div>

            <div className="sign-in">
                <p>{isSignIn ? `${text.hi} ${name}` : `${text.hi} ${text.guest}`}</p>
                { isSignIn
                    ? <div>
                        <button onClick={onLogout}>{text.logout}</button>
                    </div>
                    : <div>
                        <button onClick={onSignIn}>{text.signUp}</button>
                        <button onClick={fireOnLogin}>{text.login}</button>
                        { isStartedLogin
                            ? <input
                                type="text"
                                placeholder={text.loginPlaceholder}
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
        text: PropTypes.object.isRequired,
        onSignIn: PropTypes.func.isRequired,
        onLogin: PropTypes.func.isRequired,
        onLogout: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired
    };
}

export default Header;
