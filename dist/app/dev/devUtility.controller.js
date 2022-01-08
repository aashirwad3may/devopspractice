"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersData = void 0;
const usersData = (req, res, next) => {
    return res.status(201).send('No users preset as no Db configured');
};
exports.usersData = usersData;
//# sourceMappingURL=devUtility.controller.js.map