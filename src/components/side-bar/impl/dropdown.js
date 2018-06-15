
export const removeClickListener = () => {
    window.onclick = null;
};

export const addClickListener = (elemClassName, callback, notClosedElem) => {

    window.onclick = function(event) {
        if (!event.target.matches(elemClassName)) {

            if (notClosedElem) {

                if (!event.target.matches(notClosedElem)) {
                    callback();
                    removeClickListener();
                }
            } else {

                callback();
                removeClickListener();
            }
        }
    };
};
