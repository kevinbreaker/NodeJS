const test = require('ava');
const { connection, errorHandler } = require('./setup');
const users = require('../users')({ connection, errorHandler });
const auth = require('../auth')({ connection, errorHandler });
const create = () => users.save('user@test.com', '123456');

test('User login - success!', async t => {
  await create();
  const result = await auth.autenticate('user@test.com', '123456');
  t.not(result.token, null);
  t.not(result.token.length, 0);
});
