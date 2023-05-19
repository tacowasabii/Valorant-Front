import { ReactElement, useEffect } from "react";
import { Layout } from "@components/common";
import { GetStaticProps } from "next";
import supabase from "@utils/supabase";
import { IsrPage } from "@components/main";
import { NextPageWithLayoutProps } from "types/base";
import axios from "axios";

export const getStaticProps: GetStaticProps<playerProps> = async () => {
  const { data: kr_rank, error } = await supabase.from("kr_rank").select("*");

  if (error) {
    console.error("Data fetch error:", error);
    return { props: { players: [] } };
  }

  const players: playerRank[] = kr_rank as playerRank[];

  return {
    props: { players },
  };
};

const Isr: NextPageWithLayoutProps<playerProps> & {
  getLayout?: (page: ReactElement) => ReactElement;
} = ({ players }: playerProps) => {
  useEffect(() => {
    const revalidateData = async () => {
      const secret = process.env.NEXT_PUBLIC_SECRET_REVALIDATE_TOKEN;

      try {
        await axios.post("/api/revalidate", { secret });
      } catch (error) {
        console.error("Revalidation error:", error);
      }
    };

    revalidateData();
  }, []);

  return <IsrPage players={players} />;
};

Isr.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Isr;
