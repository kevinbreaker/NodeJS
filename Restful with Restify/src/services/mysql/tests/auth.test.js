const test = require('ava');
const { connection, errorHandler } = require('./setup');
const users = require('../users')({ connection, errorHandler });
const auth = require('../auth')({ connection, errorHandler });
const create = () => users.save('user@test.com', '123456');

test('User login - success!', async t => {
  await create();
  const result = await auth.authenticate('user@test.com', '123456');
  t.not(result.token, null);
  t.not(result.token.length, 0);
});

test('User login - failed', async t => {
  const promis = auth.authenticate('user2@test2.com', '654321');
  const error = await t.throws(promis);
  t.is(error.error, 'failed to find user, try again or contact the developer (kevinbreaker2604@gmail.com)')
});
