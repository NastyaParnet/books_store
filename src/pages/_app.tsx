import Styledroot from "../styles/Styledroot";
import StoreProvider from "@/store/storeProvider";
import { AppProps } from "next/app";

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Styledroot>
        <Component {...pageProps} />
      </Styledroot>
    </StoreProvider>
  );
}
