module.exports = function mapOperations(apiDoc) {
    const operations = {};
    Object.keys(apiDoc.paths).map(path => {
        Object.keys(apiDoc.paths[path]).map(method => {
            const openapi = apiDoc.paths[path][method];
            if (openapi && openapi.operationId) {
                operations[openapi.operationId] = { openapi, method, path };
            }
        });
    });
    return operations;
};