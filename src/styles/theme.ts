"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const roboto = Roboto({
  weight: ["100", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette,
});
export default theme;
