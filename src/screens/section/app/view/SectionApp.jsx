
import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './SectionApp.scss';

function SectionApp({section, isSearching, searchingElements}) {

    return (
        <div className="main-content">
            <Button flat="true">SECTION</Button>
        </div>
    );
}

if (process.env !== 'production') {

    SectionApp.propTypes = {
        section: PropTypes.object.isRequired,
        isSearching: PropTypes.bool.isRequired,
        searchingElements: PropTypes.array.isRequired
        // text: PropTypes.object.isRequired
    };
}

export default SectionApp;
