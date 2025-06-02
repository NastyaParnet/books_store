import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

export default function Styledroot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
