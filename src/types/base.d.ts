/**
 * Base Types
 */
import type { NextPage } from "next";
import type { AppProps } from "next/app";
s;

type ChildrenType = {
  children: React.ReactNode;
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
import { ReactNode, ReactElement } from "react";
import { NextPage as NextPageOriginal, NextPageContext } from "next";

type LayoutComponent = (page: ReactElement) => ReactElement;

export interface NextPageWithLayoutProps<P = {}, IP = P>
  extends NextPageOriginal<P, IP> {
  getLayout?: LayoutComponent;
}

export type NextPageContextWithLayout = NextPageContext;
