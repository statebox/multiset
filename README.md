[![Build
Status](https://travis-ci.org/statebox/multiset.svg?branch=master)](https://travis-ci.org/statebox/multiset)

# Wasdis?

Simple ordered natural multisets in JS, for example:

> `[0, 0, 1, 1, 1, 2, 3]` is a multiset with the element `0` appearing
> twice and `1` appearing thrice.

# Usage

`npm install --save statebox/multiset`

Import library

```js
const MSet = require('multiset')
const mset = new MSet([0,0,1,1,1,2,3])
```

Check the elements and multiplicity of the set

```js
mset.elements() //=> [0,1,2,3]
mset.multiplicity(0) //=> 2
mset.multiplicity(1) //=> 3
mset.multiplicity(2) //=> 1
mset.multiplicity(3) //=> 1
mset.multiplicity(4) //=> 0
```

You can check if one mset is a submultiset of the other.

```js
mset.subsetOf([0,0,0,1,1,1,1,2,3,4]) //=> true

const a = new MSet([0,1,1])
const b = new MSet([0,1,2])
const c = new MSet([0,1,1,2])

a.subsetOf(a) //=> true
a.subsetOf(b) //=> false
a.subsetOf(c) //=> true
b.subsetOf(a) //=> false
b.subsetOf(c) //=> true
```
