const viewportUnitRE = /^([+-]?[0-9.]+)(vh|vw|vmin|vmax)$/;

function isViewportUnit(value) {
  return viewportUnitRE.test(value);
}

function getMatchObject(dim) {
  const vh = dim.height;
  const vw = dim.width;
  return {
    vh: vh,
    vw: vw,
    vmax: Math.max(vw, vh),
    vmin: Math.min(vw, vh)
  };
}

export function transform(styles, dimensions) {
  const dim = getMatchObject(dimensions);

  function replaceViewportUnit(match, number, unit) {
    const base = dim[unit];
    const val = parseFloat(number) / 100;
    return val * base;
  }

  function replace(value) {
    return parseFloat(value.replace(viewportUnitRE, replaceViewportUnit));
  }

  for (const key in styles) {
    const selector = styles[key];

    if (isViewportUnit(selector)) {
      styles[key] = replace(selector);
      continue;
    }

    for (const key in selector) {
      const val = selector[key];

      for (const key in val) {
        if (isViewportUnit(val[key])) {
          val[key] = replace(val[key]);
          continue;
        }
      }

      if (!isViewportUnit(val)) {
        continue;
      }

      selector[key] = replace(val);
    }
  }
  return styles;
}
