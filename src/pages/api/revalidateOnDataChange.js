import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function revalidateOnDataChange(reqt, res) {
  const subscription = supabase
    .from("kr_rank")
    .on("*", async (payload) => {
      try {
        await axios.post(
          "https://valorant-front-tacowasabii.vercel.app/api/revalidate?secret=21a049423c76c89ebf547887819046d02ab9ec6e58fc9e6e5fe5c7dc900a44014dce9f07ae0a33ba80fca5dab4941914c01b21212469661b6a077b9b065a536a"
        );
      } catch (error) {
        console.error("Error while revalidating:", error);
      }
    })
    .subscribe();

  // 서버리스 함수가 종료될 때 구독을 취소합니다.
  res.on("finish", () => {
    supabase.removeSubscription(subscription);
  });

  res.send({ message: "Revalidation triggered" });
}
