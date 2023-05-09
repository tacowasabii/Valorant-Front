import { ReactElement } from "react";
import { MainPage } from "@components/main";
import { Layout } from "@components/common";

export default function index() {
  return (
    <>
      <MainPage />
    </>
  );
}

index.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
