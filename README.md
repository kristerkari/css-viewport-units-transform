# css-viewport-units-transform

Transform CSS viewport units of a Javascript style object to pixels based on window dimensions. Supports `vw`, `vh`, `vmin` and `vmax` units.

```js
import { transform } from "css-viewport-units-transform";
// or const transform = require("css-viewport-units-transform").transform;

transform(
  {
    fontSize: "10vw"
  },
  {
    width: 480,
    height: 100
  }
);
```

↓ ↓ ↓ ↓ ↓ ↓

```js
{
  fontSize: 48;
}
```

or

```js
transform(
  {
    myClass: {
      fontSize: "10vh"
    }
  },
  {
    width: 480,
    height: 100
  }
);
```

↓ ↓ ↓ ↓ ↓ ↓

```js
{
  myClass: {
    fontSize: 10,
  }
}
```
