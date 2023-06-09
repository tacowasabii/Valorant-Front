import { ReactElement } from "react";
import { Layout } from "@components/common";
import { GetStaticProps } from "next";
import supabase from "@utils/supabase";
import { SsgPage } from "@components/main";
import { NextPageWithLayoutProps } from "types/base";

export const getStaticProps: GetStaticProps<playerProps> = async () => {
  const { data: kr_rank, error } = await supabase.from("kr_rank").select("*");

  if (error) {
    console.error("Data fetch error:", error);
    return { props: { players: [] } };
  }

  const players: playerRank[] = kr_rank as playerRank[];

  return { props: { players } };
};

const Ssg: NextPageWithLayoutProps<playerProps> & {
  getLayout?: (page: ReactElement) => ReactElement;
} = ({ players }: playerProps) => {
  return <SsgPage players={players} />;
};

Ssg.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Ssg;
