"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUsersData = exports.usersData = void 0;
const usersData = (req, res, next) => {
    return res.status(201).send('No users present as no DB configured');
};
exports.usersData = usersData;
const noUsersData = (req, res, next) => {
    return res.status(202).send('Returning random values 202');
};
exports.noUsersData = noUsersData;
//# sourceMappingURL=devUtility.controller.js.map