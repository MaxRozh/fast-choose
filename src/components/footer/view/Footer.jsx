
import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

function Footer({text}) {

  return (
    <footer className="footer">

      <div className="footer_p1">

        <div className="footer_logo footer-col">Logo</div>

        <div className="footer_company footer-col">
          <p className="footer_title">{text.company}</p>
          <a className="footer_link" href="#">{text.about}</a>
          <a className="footer_link" href="#">{text.jobs}</a>
        </div>

        <div className="footer_commun footer-col">
          <p className="footer_title">{text.commun}</p>
          <a className="footer_link" href="#">{text.fCompanies}</a>
          <a className="footer_link" href="#">{text.developers}</a>
          <a className="footer_link" href="#">{text.brands}</a>
          <a className="footer_link" href="#">{text.investors}</a>
        </div>

        <div className="footer_oth-links footer-col">
          <p className="footer_title">{text.uLinks}</p>
          <a className="footer_link" href="#">{text.help}</a>
        </div>

        <div className="footer_social footer-col">
          <a className="footer_link insta" href="#">Instagram</a>
          <a className="footer_link twit" href="#">Twitter</a>
          <a className="footer_link fc" href="#">Facebook</a>
        </div>

      </div>

      <div className="footer_p2">
        <div className="footer_p2_links">
          <a className="footer_p2_link" href="#">{text.legal}</a>
          <a className="footer_p2_link" href="#">{text.privacy}</a>
          <a className="footer_p2_link" href="#">{text.cookies}</a>
          <a className="footer_p2_link" href="#">{text.aAds}</a>
        </div>
        <div className="footer_p2_oth">
          <p className="footer_p2_country">UK</p>
          <p className="footer_cop">© 2018 Fast-choose</p>
        </div>
      </div>

    </footer>
  );
}

if (process.env !== 'production') {

  Footer.propTypes = {
    text: PropTypes.shape({}).isRequired
  };
}

export default Footer;
