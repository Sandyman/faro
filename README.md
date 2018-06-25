## README

### Faro

Perform faro out-shuffle for a string. More information about faro: https://en.wikipedia.org/wiki/Faro_shuffle

### Usage:

```javascript
const { shuffle, unshuffle } = faro;

console.log(shuffle('foobar'));     // Shows fboaor
console.log(unshuffle('fboaor'));   // Shows foobar
```

Unshuffle undoes what shuffle does. The other way around would work too.
