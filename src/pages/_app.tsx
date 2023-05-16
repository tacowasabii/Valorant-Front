import "@styles/globals.css";
import { ReactElement } from "react";
import { AppPropsWithLayout } from "types/base";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <div>
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </div>
  );
}
