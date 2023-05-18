import { svgRiot, svgSearch } from "@styles/svg";
import Image from "next/image";
import { NextPage } from "next";

const SsrPage: NextPage<playerProps> = ({ players }) => {
  return (
    <div className="bg-slate-900">
      <div className="xl:min-h-[430px] min-h-[500px] bg-valorant flex flex-col items-center bg-center bg-cover">
        <div className="text-[80px] font-bold text-white mt-16">VALPS</div>
        <div className="relative">
          <input
            placeholder="플레이어#KR1 전적검색"
            className="w-[600px] h-[50px] rounded-lg px-5 bg-opacity-80 bg-white border-2 border-blue-900"
          />
          <button className="absolute right-4 top-[16px]">{svgSearch}</button>
        </div>
        <button
          type="button"
          className="w-[160px] h-[40px] flex justify-center items-center text-white text-14 font-bold rounded-[6px] bg-blue-deep hover:opacity-80 mt-10"
        >
          <div>{svgRiot}</div>
          <span className="ml-2">Riot ID로 로그인</span>
        </button>
        <div className="text-white text-opacity-70 text-12 mt-6">
          Riot ID로 로그인하여 프로필 공개여부를 설정할 수 있습니다.
        </div>
      </div>
      <div className="flex flex-col items-center pt-32 pb-40">
        <div className="bg-slate-600 h-12 w-[656px] text-white flex justify-center items-center text-20">
          <div className="text-red-600 mr-2">KR</div> 지역 TOP 10
        </div>
        <div className="flex text-white h-12 bg-slate-700">
          <div className="w-24 flex justify-center items-center">순위</div>
          <div className="w-80 flex justify-center items-center">플레이어</div>
          <div className="w-32 flex justify-center items-center">레이팅</div>
          <div className="w-28 flex justify-center items-center">승률</div>
        </div>
        {players.map((player) => (
          <div key={player.id} className="flex text-gray-200 h-12 bg-slate-800">
            <div className="w-24 flex justify-center items-center">
              {player.rank}
            </div>
            <div className="w-80 flex justify-center items-center">
              {player.player}
            </div>
            <div className="w-32 flex justify-center items-center">
              <Image
                className="mr-1"
                src="/rank.png"
                alt="레디언트"
                width="24"
                height="24"
                loading="lazy"
              />
              {player.rating}
            </div>
            <div className="w-28 flex justify-center items-center text-blue-500">
              {player.win_rate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SsrPage;
