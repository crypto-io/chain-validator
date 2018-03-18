const test = require('tape');
const schemas = require('./');

const hex = '0000000000000000000000000000000000000000000000000000000000000000';

test('validate & return error', tape => {
  tape.plan(1);
  const result = schemas.validate('block', {});
  if (result.error) {    
    tape.ok(true);
  } else {
    tape.ok(false);
  }  
});

test('validate schema', tape => {
  tape.plan(1);
  const result = schemas.validate('block', {
    index: 0,
    prevHash: hex,
    time: 123,
    transactions: [],
    nonce: 1,
    hash: hex
  });
  if (result.error) {    
    tape.ok(false);
  } else {
    tape.ok(true);
  }  
});
