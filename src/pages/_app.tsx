import "@styles/globals.css";
import { ReactElement } from "react";
import { AppPropsWithLayout } from "types/base";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return <div className="">{getLayout(<Component {...pageProps} />)}</div>;
}
