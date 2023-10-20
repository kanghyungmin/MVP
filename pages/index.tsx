import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  return (
    <header>
      {/* NavBar */}
      <nav>
        {/* <div className="w-[375px] h-[60px] bg-neutral-950 flex justify-start items-center"> */}

        <div className="w-full min-h-[60px] md:h-[80px] bg-neutral-950 flex justify-between items-center">
          <div className="ml-[15px] relative justify-start items-start flex">
            <img
              className="w-[155px] h-[26px] md:w-[171px] md:h-[28.6px]"
              src="/logo2.png"
            ></img>
            {/* // className="w-sm:155 h-sm:26" /> */}
          </div>
          <div className="relative gap-7 flex mr-[21px] bg-neutral-950">
            <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] relative">
              <img src="/IconIOS.svg" />
            </div>
            <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] relative">
              <img src="IconAndroid.svg" />
            </div>
          </div>
        </div>
      </nav>
      {/* Background Image */}
      <div className="w-full h-[600px] relative bg-neutral-950">
        <div className="w-full pb-[1px] left-0 top-[300px] absolute justify-center items-center inline-flex z-10">
          <img
            className="origin-top-left w-full z-10"
            src="/img-background-landing_M.png"
          />
        </div>
        <div className="grid grid-cols-1 w-full h-[272px] justify-center gap-10 z-20">
          <div className="h-[272px] flex-col justify-center justify-items-start gap-5 flex mt-[100px] ">
            <div className="text-center text-white text-5xl font-bold font-['DM Sans'] leading-[60px]">
              팬덤으로
              <br />할 수 있는
              <br />
              모든 경험!
            </div>
            <div className="text-center text-gray-200 text-base font-medium font-['Pretendard'] leading-normal z-10">
              응원하는 가수의 공연 티켓 예매부터, 투표
              <br />
              그리고 함께 이야기를 나눌 수 있는
              <br />
              커뮤니티까지 한 번에 누릴 수 있어요.
            </div>
          </div>
        </div>
        <div className="ml-[24px] mt-[-205px] z-30 relative">
          <div className="w-[22px] h-[22px] bg-gradient-to-br from-blue-200 to-violet-400 rounded-full shadow">
            <img className="origin-top-left w-full" src="/img-dot-purple.png" />
            <div className="ml-[295px] mt-[292px] w-[20px] h-[20px] bg-pink-300 rounded-full shadow"></div>

            {/* 위 부분 해결-//relative & absolute & static */}
            {/* <div className="w-[20.27px] h-[20.27px] absolute">
              <div className="w-4 h-4 top-0 absolute origin-top-left rotate-[18.62deg] bg-gradient-to-br from-amber-100 to-orange-400 rounded-full shadow" />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
