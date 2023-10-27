import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./component/collapses"), {
  ssr: false,
});
console.log(DynamicComponent);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let location;

  if (typeof document !== "undefined") {
    return null;
  }
  return (
    <header>
      {/* NavBar */}
      <nav>
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
      {/* Hero Image-SM */}
      <div className="sm:hidden w-full h-screen bg-neutral-950 relative">
        <div className="grid grid-cols-1 w-full h-[272px]  bg-neutral-950 justify-center gap-10 z-20">
          <div className="h-[272px] flex-col justify-center justify-items-start gap-5 flex mt-[100px] ">
            <div className="text-center text-white text-5xl font-bold font-['DM Sans'] leading-[60px]">
              팬덤으로
              <br />할 수 있는
              <br />
              모든 경험!
            </div>
            <div className="text-center text-gray-200 text-base font-medium font-['Pretendard'] leading-normal z-20">
              응원하는 가수의 공연 티켓 예매부터, 투표
              <br />
              그리고 함께 이야기를 나눌 수 있는
              <br />
              커뮤니티까지 한 번에 누릴 수 있어요.
            </div>
          </div>
        </div>
        <div className="w-full pb-[1px] bg-neutral-950 relative justify-center items-center inline-flex z-10">
          <img
            className="origin-top-left w-full z-10"
            src="/img-background-landing_M.png"
          />
        </div>
        <div className="flex absolute mt-[-88.73px] w-full z-10 justify-end">
          <div className="relative mr-[176.89px] w-[20px] h-[20px]  origin-top-left rotate-[0deg] bg-gradient-to-br from-amber-100 to-orange-400 rounded-full shadow z-10" />
        </div>
        <div className="flex absolute w-full mt-[-193px] z-10 justify-end">
          <div className="w-[20px] mr-[14px] h-[20px] bg-pink-300 rounded-full shadow" />
        </div>
        <div className="flex absolute w-full mt-[-505px] z-10 justify-start">
          <div className="w-[22px] ml-[14px] h-[22px] bg-gradient-to-br from-blue-200 to-violet-400 rounded-full shadow" />
        </div>

        <div className="w-full h-[642px] bg-neutral-950 px-4 pb-40 flex-col justify-center items-center gap-8 inline-flex">
          <div className="self-stretch bg-neutral-950 text-center ">
            <span className="bg-neutral-950 text-indigo-400 text-[32px] font-bold font-['Pretendard'] leading-[44px]">
              UPDOOT
            </span>
            <span className="text-neutral-100 text-[32px] font-bold font-['Pretendard'] leading-[44px]">
              은 팬덤이
              <br />
              원하는 것을 더 많이
              <br />
              즐길 수 있게 만들어요!
            </span>
          </div>
          <div className="self-stretch h-[318px] flex-col justify-start items-start flex">
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-[170px] self-stretch origin-top-left rotate-90 border-4 border-neutral-100"></div>
              <div className="w-16 h-16 text-center text-neutral-100 text-xl font-bold font-['Pretendard'] leading-7">
                01
              </div>
              <div className="grow shrink basis-0 pt-1 pb-[30px] flex-col justify-start items-start gap-1 inline-flex">
                <div className="pr-[178px] py-3.5 justify-start items-center inline-flex">
                  <div className="text-neutral-100 text-2xl font-bold font-['Pretendard'] leading-loose">
                    Diversity
                  </div>
                </div>
                <div className="self-stretch text-zinc-200 text-base font-normal font-['Pretendard'] leading-normal">
                  내가 응원하는 가수를 향해 다양한 방식으로 커뮤니티 내에서
                  의견을 나누고 생각을 공유할 수 있어요.
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-16 h-16 text-center text-neutral-100 text-xl font-bold font-['Pretendard'] leading-7">
                02
              </div>
              <div className="w-[74px] self-stretch origin-top-left rotate-90 border border-neutral-100"></div>
              <div className="grow shrink basis-0 pt-1 pb-2.5 flex-col justify-start items-start inline-flex">
                <div className="pr-36 py-3.5 justify-start items-center inline-flex">
                  <div className="text-neutral-100 text-2xl font-bold font-['Pretendard'] leading-loose">
                    Uniqueness
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="w-16 h-16 text-center text-neutral-100 text-xl font-bold font-['Pretendard'] leading-7">
                03
              </div>
              <div className="w-[74px] self-stretch origin-top-left rotate-90 border border-neutral-100"></div>
              <div className="grow shrink basis-0 pt-1 pb-2.5 flex-col justify-start items-start inline-flex">
                <div className="pr-[129px] py-3.5 justify-start items-center inline-flex">
                  <div className="text-neutral-100 text-2xl font-bold font-['Pretendard'] leading-loose">
                    Achievement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DynamicComponent />
        <DynamicComponent />
        <DynamicComponent />
        <DynamicComponent />
      </div>

      {/* Hero Image-MD */}
      <div className="sm:block hidden w-full h-[880px] relative bg-neutral-950">
        <div className="w-screen pt-[5px] pb-[35px] top-[488px] absolute justify-center items-center inline-flex">
          <img
            className="w-full h-[352px] origin-top-left rotate-0"
            src="/img-background-landing_M.png"
          />
        </div>
        <div className="w-full h-[248px] px-12 top-[240px] absolute flex-col justify-center items-center gap-8 inline-flex">
          <div className="w-full h-40 flex-col justify-center items-center gap-4 flex">
            <div className="text-center text-white text-[64px] font-bold font-['DM Sans'] leading-[80px]">
              팬덤으로 할 수 있는
              <br />
              모든 경험!
            </div>
          </div>
          <div className="text-center text-gray-200 text-xl font-normal font-['Pretendard'] leading-7">
            응원하는 가수의 공연 티켓 예매부터, 투표 그리고 함께 이야기를 나눌
            수 있는
            <br />
            커뮤니티까지 한 번에 누릴 수 있어요.
          </div>
        </div>
        <div className="w-7 h-7 left-[44px] top-[185px] absolute bg-gradient-to-br from-blue-200 to-violet-400 rounded-full shadow" />
        <div className="w-[22px] h-[22px] right-[226px] top-[665px] absolute origin-top-left rotate-[18.62deg] bg-gradient-to-br from-amber-100 to-orange-400 rounded-full shadow" />
        <div className="w-[26px] h-[26px] right-[38px] top-[493px] absolute bg-pink-300 rounded-full shadow" />
      </div>
    </header>
  );
}
