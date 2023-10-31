import React, { useEffect, useState } from "react";

function TicketingFeature() {
  return (
    <div>
      <div className="w-full h-[652px] bg-neutral-950 px-4 pb-40 flex-col justify-start items-center gap-12 inline-flex">
        <div className="self-stretch h-[492px] flex-col justify-start items-center gap-12 flex">
          <div className="self-stretch h-[184px] flex-col justify-center items-center gap-8 flex">
            <div className="self-stretch h-[184px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch h-[120px] flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch text-center text-indigo-400 text-base font-bold font-['Pretendard'] leading-normal">
                  TICKETING
                </div>
                <div className="self-stretch text-center text-neutral-100 text-[32px] font-bold font-['Pretendard'] leading-[44px]">
                  티켓팅에
                  <br />
                  참여하세요
                </div>
              </div>
              <div className="self-stretch text-center text-zinc-200 text-base font-normal font-['Pretendard'] leading-normal">
                내가 좋아하는 가수가 팬과 만나 소통을 하는 공연과 팬미팅에 갈 수
                있는 기회를 놓치지 마세요.
              </div>
            </div>
          </div>
          <div className="w-80 h-[260px] relative">
            <img
              className="w-[258.38px] h-[238.03px] left-[40.88px] top-[8.53px] absolute"
              src="/image/img-ticketing_M.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketingFeature;
