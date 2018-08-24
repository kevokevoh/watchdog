'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Invoked as bin script
if (require.main === module) {
    _commander2.default.option('-l, --fetch-live-users <type>', 'Run default users').option('-c, --currency-code <type>', 'Currency code to consider').option('-t, --top-apps-threshold <type>', 'Top Apps threshold').parse(process.argv);

    const LiveFunction = _commander2.default.fetchLiveUsers;

    if (LiveFunction) {
        console.log('Run it');
    }
}
//# sourceMappingURL=index.js.map