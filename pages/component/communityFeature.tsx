import React, { useEffect, useState } from "react";

function CommunityFeature() {
  return (
    <div>
      <div className="relative bg-neutral-950 w-full h-[652px] px-4 pb-40 flex-col justify-start items-center gap-12 inline-flex">
        <div className="self-stretch h-[492px] flex-col justify-start items-center gap-12 flex">
          <div className="self-stretch h-[184px] flex-col justify-center items-center gap-8 flex">
            <div className="self-stretch h-[184px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch h-[120px] flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch text-center text-indigo-400 text-base font-bold font-['Pretendard'] leading-normal">
                  COMMUNITY
                </div>
                <div className="self-stretch text-center text-neutral-100 text-[32px] font-bold font-['Pretendard'] leading-[44px]">
                  이야기를 나누고,
                  <br />
                  의견을 공유해요!
                </div>
              </div>
              <div className="self-stretch text-center text-zinc-200 text-base font-normal font-['Pretendard'] leading-normal">
                응원하는 가수에 대한 생각을 혼자 간직하지 말고 함께
                나누어보세요. 다양한 의견을 주고 받을 수 있어요.
              </div>
            </div>
          </div>
          <div className="w-80 h-[260px] relative">
            <img
              className="w-[258.38px] h-[238.03px] left-[40.88px] top-[8.53px] absolute"
              src="/image/img-community_M.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityFeature;
