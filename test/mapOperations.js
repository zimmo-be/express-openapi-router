import test from 'ava';
import mapOperations from '../src/mapOperations';
const petStore = require('./openapi.json');

test('mapOperations', t => {
    const result = mapOperations(petStore);
    t.deepEqual(Object.keys(result), ["listPets", "createPets", "showPetById"]);
    t.is(result.listPets.path, "/pets");
    t.is(result.listPets.method, "get");
    t.is(typeof result.listPets.openapi, "object");
    t.is(result.createPets.path, "/pets");
    t.is(result.createPets.method, "post");
});
