
const express = require(`express`);
const wizardStore = require(`./wizards/store`);
const imageStore = require(`./images/store`);
const wizardsRouter = require(`./wizards/route`)(wizardStore, imageStore);
const logger = require(`../logger`);

const app = express();
app.use(express.static(`static`));

app.use(`/api/wizards`, wizardsRouter);

const HOSTNAME = process.env.SERVER_HOST || `localhost`;
const PORT = parseInt(process.env.SERVER_PORT, 10) || 3000;

const serverAddress = `http://${HOSTNAME}:${PORT}`;
module.exports = {
    run() {
        app.listen(PORT, HOSTNAME, () => {
            logger.info(`Server running at ${serverAddress}/`);
        });
    },
    app
};

///////////////

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    // public mongoUrl: string = 'mongodb://localhost/CRMdb';
    public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;

////////////////////////

const app = express();

export default {
    start
};

function start(port) {
    initExpress();

    routes.init(app);

    initErrorHandling();

    db.init();

    if (config.isDevLocal) {
        app.use(morgan('dev'));
    }

    return new Promise((resolve, reject) => {
        app.listen(port, () => {
            return resolve(port);
        });
    });
}

function initExpress() {
    if (config.isDevLocal) app.use(morgan('dev')); //log requests

    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/', express.static(pathHelper.getClientRelative('/')));

    app.use(cors());

    initSession();
}

function initSession() {
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
}

function initErrorHandling() {
    //log unhandled errors
    app.use((err, req, res, next) => {
        logger.error(err);

        console.log(err);

        let message = _.isError(err) ? err.message : err;
        message = config.isDevLocal ? message : 'Server Error';

        res.status(500).send({error: message});
    });
}

////////////////////////

export class App {

    public config: any;
    public app: express.Application;
    public server: Server;
    public router: express.Router;

    public log = debug('server:log');

    private _controllers: string[];

    constructor(config: any) {

        this.app = express();

        this.app.use(express.static(__dirname + '/../../public'));
        this.app.use(bodyParser.json());

        this.config = config;

        this.server = createServer(this.app);
        this.router = express.Router();

        this.log.log = console.log.bind(console);

        this._loadControllers();

        this._run();
    }

    private loadController(controllerName: string) {

        let identifier = controllerName.replace(/Controller/, '').toLowerCase();
        let pathToFile = __dirname + '/controllers/' + identifier + '.controller';

        import(pathToFile).then((Controller: any) => {
            let controllerInstance: BaseController = InstanceLoader.getInstance(Controller, controllerName, this.router);

            controllerInstance.registerEndpoints();

            this._applyRoutingOrLoadNextController();
        })

            .catch((error) => {
                console.log('Issues loading ' + controllerName + ':');
                console.log(error.message);
                this._applyRoutingOrLoadNextController();
            });
    }

    private _loadControllers() {
        this._controllers = [].concat(this.config.controllers);
        this.loadController(this._controllers.pop());
    }

    private _applyRoutingOrLoadNextController() {
        if (this._controllers.length > 0) {
            return this.loadController(this._controllers.pop());
        } else {
            this.app.use(this.router);
        }
    }

    private _run() {
        this.log.log('Server started on port ' + this.config.server.port);
        this.server.listen(this.config.server.port);
    }
}

/////////////////

function start(port) {
    initExpress();

    routes.init(app);

    initErrorHandling();

    if (config.isDevLocal) {
        app.use(morgan('dev'));
    }

    return new Promise((resolve, reject) => {
        app.listen(port, () => {
            return resolve(port);
        });
    });
}

function initExpress() {
    if (config.isDevLocal) app.use(morgan('dev')); //log requests

    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/', express.static(pathHelper.getClientRelative('/'), {index: false}));

    app.use(cors());
}

function initErrorHandling() {
    //log unhandled errors
    app.use((err, req, res, next) => {
        logger.error(err);

        console.log(err);

        let message = _.isError(err) ? err.message : err;
        message = config.isDevLocal ? message : 'Server Error';

        res.status(500).send({error: message});
    });
}