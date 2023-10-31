import React, { useEffect, useState } from "react";

function VotingFeature() {
  return (
    <div className="relative w-full bg-neutral-950 h-[760px] px-4 pb-40 flex-col justify-start items-center gap-12 inline-flex">
      <div className="self-stretch h-[184px] flex-col justify-start items-center gap-12 flex">
        <div className="self-stretch h-[184px] flex-col justify-center items-center gap-8 flex">
          <div className="self-stretch h-[184px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-[120px] flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch text-center text-indigo-400 text-base font-bold font-['Pretendard'] leading-normal">
                VOTING
              </div>
              <div className="self-stretch text-center text-neutral-100 text-[32px] font-bold font-['Pretendard'] leading-[44px]">
                UPDOOT가 제공하는 <br />
                특별한 투표들!
              </div>
            </div>
            <div className="self-stretch text-center text-zinc-200 text-base font-normal font-['Pretendard'] leading-normal">
              팬과 가수 모두에게 특별한 콘텐츠와 경험을 주기위해 흥미로운 결과를
              볼 수 있는 투표 컨텐츠를 제공해요.
              <div className="relative flex pt-[48px] justify-center">
                <img src="/image/img-voting_M.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotingFeature;
