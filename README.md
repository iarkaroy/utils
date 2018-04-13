Javascript Utils
====
A library to provide commonly required javascript functions.

## Installation
```
npm install @iarkaroy/utils
```

## Usage
```
import * as utils from '@iarkaroy/utils';
```
### `is.arr()`
Checks whether the passed argument is an array.
```
utils.is.arr(any);
```
### `is.obj()`
Checks whether the passed argument is an object.
```
utils.is.obj(any);
```
### `is.str()`
Checks whether the passed argument is a string.
```
utils.is.str(any);
```
### `is.fnc()`
Checks whether the passed argument is a function.
```
utils.is.fnc(any);
```
### `is.num()`
Checks whether the passed argument is a number.
```
utils.is.num(any);
```
### `is.und()`
Checks whether the passed argument is undefined.
```
utils.is.und(any);
```
### `is.nul()`
Checks whether the passed argument is null.
```
utils.is.nul(any);
```
### `range(end [, start = 0 [, step = 1]])`
Generates an array with numbers.
```
utils.range(100, 1, 2);
```
### `max()`
Returns max number from an array.
```
utils.max(arrayOfNumbers);
```
### `min()`
Returns min number from an array.
```
utils.min(arrayOfNumbers);
```
### `rand(max [, min = 0])`
Generates random number in specified range.
```
utils.rand(100, 50);
```

## Tests
```
npm test
```
