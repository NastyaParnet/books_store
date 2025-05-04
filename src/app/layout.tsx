import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Styledroot from "../styles/Styledroot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <Styledroot>{children}</Styledroot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
