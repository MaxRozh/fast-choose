
const sort = (array) => {

    return array.sort((a, b) => {

        if (a.koef > b.koef) {
            return -1;
        }
        if (a.koef < b.koef) {
            return 1;
        }

        return 0;
    });
};

export default sort;
