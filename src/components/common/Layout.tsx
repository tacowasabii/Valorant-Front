import { svgPS, svgSearch } from "@styles/svg";
import Link from "next/link";
import { ChildrenType } from "types/base";

const Layout = ({ children }: ChildrenType) => {
  return (
    <div className="min-h-screen flex flex-col min-w-[1280px]">
      <div className="bg-blue-default min-h-[80px] flex justify-between items-center px-6">
        <div className="flex items-center text-white">
          <div className="mr-3">{svgPS}</div>
          <Link href="/" className="text-22">
            VALPS
          </Link>
          <div className="w-[1px] bg-white h-4 mx-3 opacity-40 "></div>
          <Link href="https://lol.ps/" className="opacity-40 hover:opacity-100">
            LOL.PS
          </Link>
          <div className="w-[1px] bg-white h-4 mx-3 opacity-40 "></div>
          <Link
            href="https://tftps.gg/"
            className="opacity-40 hover:opacity-100 mr-16"
          >
            TFTPS
          </Link>
          <div className="text-20 hover:bg-white py-1 px-2 text-center hover:text-blue-900 rounded-xl mr-10">
            메인
          </div>
          <div className="text-20 hover:bg-white py-1 px-2 text-center hover:text-blue-900 rounded-xl mr-10">
            순위표
          </div>
          <div className="text-20 hover:bg-white py-1 px-2 text-center hover:text-blue-900 rounded-xl">
            통계
          </div>
        </div>
        <div className="relative">
          <input
            placeholder="플레이어#KR1 전적검색"
            className="w-[300px] h-[40px] rounded-lg px-3"
          />
          <button className="absolute right-2 top-[10px]">{svgSearch}</button>
        </div>
      </div>
      <div className="">{children}</div>
      <div className="bg-slate-900 text-gray-500 flex flex-col items-center h-[240px]">
        <div className="flex mt-12">
          <Link href="/terms" className="mr-4 hover:text-blue-deep">
            이용 약관
          </Link>
          <Link href="/privacy" className="hover:text-blue-deep">
            개인정보처리방침
          </Link>
        </div>
        <div className="w-[900px] text-[8px] text-center mt-10">
          valps.gg is hosted by PS Analytics, Inc. valps.gg isn’t endorsed by
          Riot Games and doesn’t reflect the views or opinions of Riot Games or
          anyone officially involved in producing or managing League of Legends.
          League of Legends and Riot Games are trademarks or registered
          trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
        </div>
        <div className="text-12 mt-3">PS Analytics, Inc. © 2020</div>
      </div>
    </div>
  );
};

export default Layout;
