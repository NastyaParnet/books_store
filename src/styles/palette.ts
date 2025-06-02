import { PaletteOptions } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

declare module "@mui/material/styles" {
  interface TypeBackground {
    surface: string;
  }
  interface PaletteOptions {
    border: string;
    hover: {
      primary: string;
      secondary: string;
    };
  }
}

export const palette: PaletteOptions = {
  mode: "dark",
  text: {
    primary: "#FFFFFF",
    secondary: "#376DE3",
    disabled: "#9E9E9E",
  },
  background: {
    default: "#121212",
    surface: "#1C1C1E",
  },
  error: {
    main: "#F44336",
  },
  success: {
    main: "#4CAF50",
  },
  hover: {
    primary: "#7942F5",
    secondary: "#B388FF",
  },
  divider: "#303030",
  border: "#404040",
};
