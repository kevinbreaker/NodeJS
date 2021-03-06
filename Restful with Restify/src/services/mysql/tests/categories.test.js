const test = require('ava');

const { connection, errorHandler } = require('./setup');
const categories = require('../categories')({ connection, errorHandler });
const create = () => categories.save('Category-test');

test.beforeEach(t => connection.query('TRUNCATE TABLE categories'));
test.after.always(t => connection.query('TRUNCATE TABLE categories'));

test('Create category', async t => {
  const result = await create();
  t.is(result.category.name, 'Category-test');
});

test('List all categories', async t => {
  await create();
  const list = await categories.all();
  t.is(list.categories.length, 1);
  t.is(list.categories[0].name, 'Category-test');
});

test('Update category', async t => {
  await create();
  const updated = await categories.update(1, 'Category-test-updated');
  t.is(updated.category.name, 'Category-test-updated');
  t.is(updated.affectedRows, 1);
});

test('Delete category', async t => {
  await create();
  const removed = await categories.del(1);
  t.is(removed.affectedRows, 1);
});
