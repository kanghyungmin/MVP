"use client";
import React, { useEffect, useState } from "react";
import { Collapse, initTE } from "tw-elements";

function Arcodian() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import("tw-elements");
      initTE({ Collapse });
    };
    init();
  }, []);

  return (
    <div>
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
        <div className="bg-neutral-950 min-w-[343px]" id="accordionExample">
          <div className="bg-neutral-950">
            <h2
              className="mb-0 bg-neutral-950 text-2xl font-bold font-['Pretendard'] leading-loose"
              id="headingOne"
            >
              <button
                className="group bg-neutral-950  relative flex text-neutral-50 w-full items-center rounded-t-[15px] border-0 px-7 py-4 text-left text-base text-white-800 transition"
                type="button"
                data-te-collapse-init
                data-te-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                01. Diversity
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="!visible"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="headingOne"
              data-te-parent="#accordionExample"
            >
              <div className="min-w-[279px] text-zinc-200 text-base px-9 font-normal font-['Pretendard'] leading-normal">
                내가 응원하는 가수를 향해 다양한 방식으로 커뮤니티 내에서 의견을
                나누고 생각을 공유할 수 있어요.
              </div>
            </div>
          </div>
          <div className="bg-neutral-950 min-w-[343px]">
            <h2
              className="mb-0 bg-neutral-950 text-2xl font-bold font-['Pretendard'] leading-loose"
              id="headingTwo"
            >
              <button
                className="group bg-neutral-950  relative flex text-neutral-50 w-full items-center rounded-t-[15px] border-0 px-7 py-4 text-left text-base text-white-800 transition"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                02. Uniqueness
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingTwo"
              data-te-parent="#accordionExample"
            >
              <div className="min-w-[279px] text-zinc-200 text-base px-9 font-normal font-['Pretendard'] leading-normal">
                공연에 대한 단독 티켓팅, 단 하나뿐인 NFT, 그리고 투표 등
                크리에이티브 오너십을 가질 수 있는 새로운 방안을 제시해요.
              </div>
            </div>
          </div>
          <div className="bg-neutral-950">
            <h2
              className="mb-0 bg-neutral-950 text-2xl font-bold font-['Pretendard'] leading-loose"
              id="headingThree"
            >
              <button
                className="group bg-neutral-950  relative flex text-neutral-50 w-full items-center rounded-t-[15px] border-0 px-7 py-4 text-left text-base text-white-800 transition"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                03. Achievement
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingThree"
              data-te-parent="#accordionExample"
            >
              <div className="min-w-[279px] text-zinc-200 text-base px-9 font-normal font-['Pretendard'] leading-normal">
                수동적으로 소비하는 팬 문화가 아닌, 스스로 만들어 가는 새로운 팬
                문화 확산에 참여할 수 있어요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arcodian;
