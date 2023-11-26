type Opacity = number | undefined;

type Shade =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "A100"
  | "A200"
  | "A400"
  | "A700";

type Color = (opacity?: Opacity, shade?: Shade) => string;

type ColorOpacity = {
  [key: number | string]: string;
};

const colorOpacity: ColorOpacity = {
  0: "00",
  1: "03",
  2: "05",
  3: "08",
  4: "0A",
  5: "0D",
  6: "0F",
  7: "12",
  8: "14",
  9: "17",
  10: "1A",
  11: "1C",
  12: "1F",
  13: "21",
  14: "24",
  15: "26",
  16: "29",
  17: "2B",
  18: "2E",
  19: "30",
  20: "33",
  21: "36",
  22: "38",
  23: "3B",
  24: "3D",
  25: "40",
  26: "42",
  27: "45",
  28: "47",
  29: "4A",
  30: "4D",
  31: "4F",
  32: "52",
  33: "54",
  34: "57",
  35: "59",
  36: "5C",
  37: "5E",
  38: "61",
  39: "63",
  40: "66",
  41: "69",
  42: "6B",
  43: "6E",
  44: "70",
  45: "73",
  46: "75",
  47: "78",
  48: "7A",
  49: "7D",
  50: "80",
  51: "82",
  52: "85",
  53: "87",
  54: "8A",
  55: "8C",
  56: "8F",
  57: "91",
  58: "94",
  59: "96",
  60: "99",
  61: "9C",
  62: "9E",
  63: "A1",
  64: "A3",
  65: "A6",
  66: "A8",
  67: "AB",
  68: "AD",
  69: "B0",
  70: "B3",
  71: "B5",
  72: "B8",
  73: "BA",
  74: "BD",
  75: "BF",
  76: "C2",
  77: "C4",
  78: "C7",
  79: "C9",
  80: "CC",
  81: "CF",
  82: "D1",
  83: "D4",
  84: "D6",
  85: "D9",
  86: "DB",
  87: "DE",
  88: "E0",
  89: "E3",
  90: "E6",
  91: "E8",
  92: "EB",
  93: "ED",
  94: "F0",
  95: "F2",
  96: "F5",
  97: "F7",
  98: "FA",
  99: "FC",
  100: "FF",
};

const defaultOpacity = (opacity: Opacity = 1) => {
  let o = Math.round(opacity * 100);
  return o < 0 ? 0 : o > 100 ? 100 : o;
};

export const getBrightness = (color) => {
  // Memastikan bahwa format warna yang diterima adalah #RRGGBB atau #RRGGBBAA
  const hex = color.charAt(0) === "#" ? color.substring(1, 7) : color;

  // Menghitung nilai rata-rata warna dalam skala abu-abu
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Mengembalikan nilai kecerahan (rata-rata warna)
  return (r + g + b) / 3;
};

export const isBright = (color) => {
  const brightness = getBrightness(color);

  return brightness > 128;
};

/** ********************************************************************** */

// COLORS

export const white: Color = (opacity) => {
  return "#FFFFFF" + colorOpacity[defaultOpacity(opacity)];
};

export const black: Color = (opacity) => {
  return "#000000" + colorOpacity[defaultOpacity(opacity)];
};

export const red: Color = (opacity, shade) => {
  const color = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const pink: Color = (opacity, shade) => {
  const color = {
    50: "#fce4ec",
    100: "#f8bbd0",
    200: "#f48fb1",
    300: "#f06292",
    400: "#ec407a",
    500: "#e91e63",
    600: "#d81b60",
    700: "#c2185b",
    800: "#ad1457",
    900: "#880e4f",
    A100: "#ff80ab",
    A200: "#ff4081",
    A400: "#f50057",
    A700: "#c51162",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const purple: Color = (opacity, shade) => {
  const color = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const deepPurple: Color = (opacity, shade) => {
  const color = {
    50: "#ede7f6",
    100: "#d1c4e9",
    200: "#b39ddb",
    300: "#9575cd",
    400: "#7e57c2",
    500: "#673ab7",
    600: "#5e35b1",
    700: "#512da8",
    800: "#4527a0",
    900: "#311b92",
    A100: "#b388ff",
    A200: "#7c4dff",
    A400: "#651fff",
    A700: "#6200ea",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const indigo: Color = (opacity, shade) => {
  const color = {
    50: "#e8eaf6",
    100: "#c5cae9",
    200: "#9fa8da",
    300: "#7986cb",
    400: "#5c6bc0",
    500: "#3f51b5",
    600: "#3949ab",
    700: "#303f9f",
    800: "#283593",
    900: "#1a237e",
    A100: "#8c9eff",
    A200: "#536dfe",
    A400: "#3d5afe",
    A700: "#304ffe",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const blue: Color = (opacity, shade) => {
  const color = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const lightBlue: Color = (opacity, shade) => {
  const color = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const cyan: Color = (opacity, shade) => {
  const color = {
    50: "#e0f7fa",
    100: "#b2ebf2",
    200: "#80deea",
    300: "#4dd0e1",
    400: "#26c6da",
    500: "#00bcd4",
    600: "#00acc1",
    700: "#0097a7",
    800: "#00838f",
    900: "#006064",
    A100: "#84ffff",
    A200: "#18ffff",
    A400: "#00e5ff",
    A700: "#00b8d4",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const teal: Color = (opacity, shade) => {
  const color = {
    50: "#e0f2f1",
    100: "#b2dfdb",
    200: "#80cbc4",
    300: "#4db6ac",
    400: "#26a69a",
    500: "#009688",
    600: "#00897b",
    700: "#00796b",
    800: "#00695c",
    900: "#004d40",
    A100: "#a7ffeb",
    A200: "#64ffda",
    A400: "#1de9b6",
    A700: "#00bfa5",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const green: Color = (opacity, shade) => {
  const color = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const lightGreen: Color = (opacity, shade) => {
  const color = {
    50: "#f1f8e9",
    100: "#dcedc8",
    200: "#c5e1a5",
    300: "#aed581",
    400: "#9ccc65",
    500: "#8bc34a",
    600: "#7cb342",
    700: "#689f38",
    800: "#558b2f",
    900: "#33691e",
    A100: "#ccff90",
    A200: "#b2ff59",
    A400: "#76ff03",
    A700: "#64dd17",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const lime: Color = (opacity, shade) => {
  const color = {
    50: "#f9fbe7",
    100: "#f0f4c3",
    200: "#e6ee9c",
    300: "#dce775",
    400: "#d4e157",
    500: "#cddc39",
    600: "#c0ca33",
    700: "#afb42b",
    800: "#9e9d24",
    900: "#827717",
    A100: "#f4ff81",
    A200: "#eeff41",
    A400: "#c6ff00",
    A700: "#aeea00",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const yellow: Color = (opacity, shade) => {
  const color = {
    50: "#fffde7",
    100: "#fff9c4",
    200: "#fff59d",
    300: "#fff176",
    400: "#ffee58",
    500: "#ffeb3b",
    600: "#fdd835",
    700: "#fbc02d",
    800: "#f9a825",
    900: "#f57f17",
    A100: "#ffff8d",
    A200: "#ffff00",
    A400: "#ffea00",
    A700: "#ffd600",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const amber: Color = (opacity, shade) => {
  const color = {
    50: "#fff8e1",
    100: "#ffecb3",
    200: "#ffe082",
    300: "#ffd54f",
    400: "#ffca28",
    500: "#ffc107",
    600: "#ffb300",
    700: "#ffa000",
    800: "#ff8f00",
    900: "#ff6f00",
    A100: "#ffe57f",
    A200: "#ffd740",
    A400: "#ffc400",
    A700: "#ffab00",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const orange: Color = (opacity, shade) => {
  const color = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const deepOrange: Color = (opacity, shade) => {
  const color = {
    50: "#fbe9e7",
    100: "#ffccbc",
    200: "#ffab91",
    300: "#ff8a65",
    400: "#ff7043",
    500: "#ff5722",
    600: "#f4511e",
    700: "#e64a19",
    800: "#d84315",
    900: "#bf360c",
    A100: "#ff9e80",
    A200: "#ff6e40",
    A400: "#ff3d00",
    A700: "#dd2c00",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const brown: Color = (opacity, shade) => {
  const color = {
    50: "#efebe9",
    100: "#d7ccc8",
    200: "#bcaaa4",
    300: "#a1887f",
    400: "#8d6e63",
    500: "#795548",
    600: "#6d4c41",
    700: "#5d4037",
    800: "#4e342e",
    900: "#3e2723",
    A100: "#d7ccc8",
    A200: "#bcaaa4",
    A400: "#8d6e63",
    A700: "#5d4037",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const grey: Color = (opacity, shade) => {
  const color = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};

export const blueGrey: Color = (opacity, shade) => {
  const color = {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    300: "#90a4ae",
    400: "#78909c",
    500: "#607d8b",
    600: "#546e7a",
    700: "#455a64",
    800: "#37474f",
    900: "#263238",
    A100: "#cfd8dc",
    A200: "#b0bec5",
    A400: "#78909c",
    A700: "#455a64",
  };

  return color[shade ?? "500"] + colorOpacity[defaultOpacity(opacity)];
};
