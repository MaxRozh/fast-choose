
import * as actions from './actions';

export const mapStateToProps = (props) => {

    const {section, searchingElements, isSearching} = props.sectionApp;

    return {
        section,
        isSearching,
        // text: text,
        searchingElements
    };
};

export const mapDispatchToProps = (dispatch) => {

    window.globalWorker.changeCurrentApp('section', [
        {
            name: 'onSearch',
            action: (value) => {
                dispatch(actions.search(value));
            }
        }
    ]);

    return {};
};
