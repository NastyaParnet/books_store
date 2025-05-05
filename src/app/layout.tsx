import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Styledroot from "../styles/Styledroot";
import StoreProvider from "@/store/storeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <Styledroot>{children}</Styledroot>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
