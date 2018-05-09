import test from 'ava';
import processPath from '../src/processPath';

test('processPath', t => {
    t.is(processPath("/hello"), "/hello");
    t.is(processPath("/"), "/");
    t.is(processPath("/{action}"), "/:action");
    t.is(processPath("/sites/{id}"), "/sites/:id");
    t.is(processPath("/sites/{id}/members"), "/sites/:id/members");
});
