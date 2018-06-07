
import React from 'react';
// import PropTypes from 'prop-types';

import './Footer.scss';

function Footer() {

    return (
        <footer className="footer">

            <div className="footer_p1">

                <div className="footer_logo footer-col">
                    Logo
                </div>

                <div className="footer_company footer-col">
                    <p className="footer_title">Company</p>

                    <a className="footer_link" href="#">
                        About
                    </a>
                    <a className="footer_link" href="#">
                        Jobs
                    </a>
                    <a className="footer_link" href="#">
                        For the record
                    </a>
                </div>

                <div className="footer_commun footer-col">
                    <p className="footer_title">Communities</p>

                    <a className="footer_link" href="#">
                        For Artists
                    </a>
                    <a className="footer_link" href="#">
                        Developers
                    </a>
                    <a className="footer_link" href="#">
                        Brands
                    </a>
                    <a className="footer_link" href="#">
                        Investors
                    </a>
                    <a className="footer_link" href="#">
                        Vendors
                    </a>
                </div>

                <div className="footer_oth-links footer-col">
                    <p className="footer_title">Useful Links</p>

                    <a className="footer_link" href="#">
                        Help
                    </a>
                    <a className="footer_link" href="#">
                        Gift
                    </a>
                    <a className="footer_link" href="#">
                        Web Player
                    </a>
                </div>

                <div className="footer_social footer-col">
                    <a className="footer_link insta" href="#">Instagram</a>
                    <a className="footer_link twit" href="#">Twitter</a>
                    <a className="footer_link fc" href="#">Facebook</a>
                </div>

            </div>

            <div className="footer_p2">
                <div className="footer_p2_links">
                    <a className="footer_p2_link" href="#">
                        Legal
                    </a>
                    <a className="footer_p2_link" href="#">
                        Privacy
                    </a>
                    <a className="footer_p2_link" href="#">
                        Cookies
                    </a>
                    <a className="footer_p2_link" href="#">
                        About Ads
                    </a>
                </div>

                <div className="footer_p2_oth">
                    <p className="footer_p2_country">UK</p>
                    <p className="footer_cop">© 2018 Fast-choose</p>
                </div>

            </div>

        </footer>
    );
}

// if (process.env !== 'production') {
//
//     Footer.propTypes = {
//
//     };
// }

export default Footer;
