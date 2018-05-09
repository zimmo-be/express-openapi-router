import test from 'ava';
import OpenApiRouter from '../src/OpenApiRouter';
import sinon from 'sinon';

test('OpenApiRouter', t => {
    const api = new OpenApiRouter(require('./openapi.json'));
    const getStub = sinon.stub(api.router, "get");

    const controllerMock = () => { };
    api.use('showPetById', controllerMock);
    t.true(getStub.calledOnce);
    t.is(getStub.firstCall.args[0], "/pets/:petId");
});
