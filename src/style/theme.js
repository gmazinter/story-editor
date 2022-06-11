//corresponding to material-ui default breakpoints
const breakpoints = ["600px", "960px", "1280px", "1920px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const zIndices = [0, 1, 2, 3, 4, 5, 10, 20, 50, 100];
zIndices.background = zIndices[0];
zIndices.content = zIndices[1];
zIndices.important = zIndices[5];
zIndices.popover = zIndices[6];
zIndices.modal = zIndices[7];
zIndices.highest = zIndices[8];

const theme = {
  fontSizes: [
    "8px",
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "32px",
    "40px",
    "56px",
    "64px",
  ],
  space: ["2px", "4px", "8px", "10px", "12px", "16px", "24px", "32px", "64px"],
  sizes: [
    "2px",
    "4px",
    "8px",
    "16px",
    "32px",
    "64px",
    "128px",
    "256px",
    "512px",
  ],
  colors: {
    primary: "rgb(220, 0, 78)",
  },

  breakpoints,

  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints.sm})`,
    medium: `@media screen and (min-width: ${breakpoints.md})`,
    large: `@media screen and (min-width: ${breakpoints.lg})`,
    extraLarge: `@media screen and (min-width: ${breakpoints})`,
  },

  shadows: {
    small: "0 0 8px -4px grey",
    smallSharp: "0 0 12px -2px #dbdbdb",
    medium: "0 0 20px -2px #dbdbdb",
    // large:
  },
  radii: ["2px", "4px", "8px", "16px", "32"],

  zIndices,
};

export default theme;
