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

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
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

  const replacement = clone(styles);

  for (const key in replacement) {
    const selector = replacement[key];

    if (isViewportUnit(selector)) {
      replacement[key] = replace(selector);
      continue;
    }

    for (const key in selector) {
      const val = selector[key];

      if (isViewportUnit(val)) {
        selector[key] = replace(val);
        continue;
      }

      for (const key in val) {
        if (isViewportUnit(val[key])) {
          val[key] = replace(val[key]);
          continue;
        }
      }
    }
  }
  return replacement;
}
