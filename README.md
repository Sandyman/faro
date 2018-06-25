## README

### Faro

Perform faro out-shuffle for a string or an array. More information about faro: https://en.wikipedia.org/wiki/Faro_shuffle

### Installation

```bash
npm i -S faro
```

### Usage:

```javascript
const faro = require('faro');

const { shuffle, unshuffle } = faro;

console.log(shuffle('foobar'));     // Shows fboaor
console.log(unshuffle('fboaor'));   // Shows foobar
```

Unshuffle undoes what shuffle does. The other way around would work too.

You can do the same, but for arrays:

```javascript
const faro = require('faro');

const { shuffleArray, unshuffleArray } = faro;

console.log(shuffleArray(['f','o','o','b','a','r']));
console.log(unshuffleArray(['f','b','o','a','o','r']));
```

The following functions are available: 

```javascript
shuffle
shuffleArray
unshuffle
unshuffleArray
weave
weaveArray
unweave
unweaveArray
```

`weave` and `shuffle` are aliases, as are `unweave` and `unshuffle`.
