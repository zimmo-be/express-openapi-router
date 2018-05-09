const mapOperations = require("./mapOperations");
const processPath = require("./processPath");
const express = require("express");

module.exports = class OpenApiRouter {
    constructor(apiDoc) {
        this.router = express.Router();
        this.operations = mapOperations(apiDoc);
    }

    use(operationId, controller) {
        const operation = this.operations[operationId];

        if (!operation) {
            throw new Error(`${operationId} is not defined in API document`);
        }
        const expressPath = processPath(operation.path);
        this.router[operation.method](expressPath, controller);
    }
};
