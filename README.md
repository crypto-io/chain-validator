# crypto-chain-validator
> Simple block & transaction validation using joi.

## INSTALL
```sh
yarn add crypto-chain-validator
```
or
```sh
npm i --save crypto-chain-validator
```

## EXAMPLE

```js
import { validate } from 'crypto-chain-validator';

const result = validate('block', {
  index: 0,
  prevHash: '0000000000000000000000000000000000000000000000000000000000000000',
  time: 0,
  transactions: [],
  nonce: 0,
  hash: '0000000000000000000000000000000000000000000000000000000000000000'
});

result.error; // null
```
