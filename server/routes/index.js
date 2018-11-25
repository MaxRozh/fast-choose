
const homeRoutes = require('./home-routes/homeRoutes');

module.exports = (app, db) => {

    homeRoutes(app, db);
};
