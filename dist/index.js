"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const figlet_1 = __importDefault(require("figlet"));
const colors_1 = __importDefault(require("colors"));
const devUtility_route_config_1 = __importDefault(require("./app/dev/devUtility.route.config"));
const port = 3000;
const app = (0, express_1.default)();
app.use('/v1/dev', devUtility_route_config_1.default);
app.set('port', port);
app.listen(port, () => {
    const banner = figlet_1.default.textSync('DEV_APP', { horizontalLayout: 'full' });
    console.log(colors_1.default.bgBlack(colors_1.default.rainbow(banner)));
    console.log(`Server started at port ${port}`.green);
});
//# sourceMappingURL=index.js.map