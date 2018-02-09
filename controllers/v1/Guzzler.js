let CachingRedisBackedController = require('../base/CachingRedisBackedController');

class GuzzlerController extends CachingRedisBackedController {

    constructor () {
        super();
    }

    getGuzzlers (req, res) {
        this._getData(
            '_gasguzz',
            [
                ['to_address', 'to_address'],
                ['ID', 'id'],
                ['pcttot', 'pct_total']
            ],
            'guzzlers',
            req, res
        );
    }

}

module.exports = (route) => {
    var controller = new GuzzlerController();
    route.get('/guzzlers', controller.getGuzzlers.bind(controller));
}