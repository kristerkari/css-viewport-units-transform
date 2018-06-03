import { transform } from "../src/index.js";

describe("CSS viewport units", () => {
  it("should do nothing for values that are not viewport units", () => {
    expect(
      transform(
        {
          fontSize: 10
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      fontSize: 10
    });
    expect(
      transform(
        {
          test: {
            fontSize: 10
          }
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      test: {
        fontSize: 10
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: undefined
          }
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      test: {
        fontSize: undefined
      }
    });
  });

  it("should handle negative values", () => {
    expect(
      transform(
        {
          fontSize: "-10vw"
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      fontSize: -48
    });
    expect(
      transform(
        {
          test: {
            fontSize: "-10vw"
          }
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      test: {
        fontSize: -48
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "-1vw"
          }
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      test: {
        fontSize: -4.8
      }
    });
  });

  it("should not mutate input", () => {
    var styles = {
      fontSize: "10vw"
    };
    expect(
      transform(styles, {
        width: 480,
        height: 100
      })
    ).toEqual({
      fontSize: 48
    });
    expect(styles).toEqual({ fontSize: "10vw" });
  });

  it("should transform vw unit", () => {
    expect(
      transform(
        {
          fontSize: "10vw"
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      fontSize: 48
    });
    expect(
      transform(
        {
          test: {
            fontSize: "10vw"
          }
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      test: {
        fontSize: 48
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "1vw"
          }
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      test: {
        fontSize: 4.8
      }
    });
  });

  it("should transform vh unit", () => {
    expect(
      transform(
        {
          fontSize: "10vh"
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      fontSize: 75
    });
    expect(
      transform(
        {
          test: {
            fontSize: "10vh"
          }
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 75
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "1vh"
          }
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 7.5
      }
    });
  });

  it("should transform vmin unit", () => {
    expect(
      transform(
        {
          fontSize: "10vmin"
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      fontSize: 48
    });
    expect(
      transform(
        {
          test: {
            fontSize: "10vmin"
          }
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 48
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "1vmin"
          }
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 4.8
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "10vmin"
          }
        },
        {
          width: 1000,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 75
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "1vmin"
          }
        },
        {
          width: 1000,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 7.5
      }
    });
  });

  it("should transform vmax unit", () => {
    expect(
      transform(
        {
          fontSize: "10vmax"
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      fontSize: 75
    });
    expect(
      transform(
        {
          test: {
            fontSize: "10vmax"
          }
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 75
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "1vmax"
          }
        },
        {
          width: 480,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 7.5
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "10vmax"
          }
        },
        {
          width: 1000,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 100
      }
    });
    expect(
      transform(
        {
          test: {
            fontSize: "1vmax"
          }
        },
        {
          width: 1000,
          height: 750
        }
      )
    ).toEqual({
      test: {
        fontSize: 10
      }
    });
  });

  it("should handle subproperties", () => {
    expect(
      transform(
        {
          test: {
            shadowOffset: { width: 10, height: "10vw" },
            shadowRadius: "1vw",
            shadowColor: "red",
            shadowOpacity: 1
          }
        },
        {
          width: 480,
          height: 100
        }
      )
    ).toEqual({
      test: {
        shadowOffset: { width: 10, height: 48 },
        shadowRadius: 4.8,
        shadowColor: "red",
        shadowOpacity: 1
      }
    });
  });
});
