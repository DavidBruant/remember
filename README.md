# remember

A thin Promise-based wrapped around localStorage.get/setItem with a basic understanding of objects


## Install

```sh
npm i https://github.com/DavidBruant/remember#v1.0.2
```

## Usage

```js
import remember, {forget} from "remember"

// save a value in localStorage
remember('yo', {a: 25})
.then(() => {
    // get this value
    remember('yo').then(({a}) => console.log(a)); // 25
})
.then(() => {
    // remove this value from localStorage
    forget('yo')
})
.then(() => {
    // remove this value from localStorage
    remember('yo').then(value => console.log(value)); // undefined
})
```
