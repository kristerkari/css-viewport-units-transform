# css-viewport-units-transform

[![Build Status](https://travis-ci.org/kristerkari/css-viewport-units-transform.svg?branch=master)](https://travis-ci.org/kristerkari/css-viewport-units-transform)
[![Build status](https://ci.appveyor.com/api/projects/status/yurf32v23qawgkmp/branch/master?svg=true)](https://ci.appveyor.com/project/kristerkari/css-viewport-units-transform/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/kristerkari/css-viewport-units-transform/badge.svg?branch=master)](https://coveralls.io/github/kristerkari/css-viewport-units-transform?branch=master)

Transform CSS viewport units of a Javascript style object to pixels based on window dimensions.

Supports `vw`, `vh`, `vmin` and `vmax` units.

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
