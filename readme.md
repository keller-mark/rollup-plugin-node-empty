rollup-plugin-node-empty
===

```
npm install --save-dev rollup-plugin-node-empty
```


```js
import empty from 'rollup-plugin-node-empty';
rollup({
  entry: 'main.js',
  plugins: [
    empty({
      fs: "empty",
      http: "empty",
      https: "empty",
      buffer: "empty",
    }),
  ],
})
```

and now if main contains this, it should just work

```js
import { open, close, read } from 'fs';

// etc
```

