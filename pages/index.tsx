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
          <div className="relative gap-7 flex mr-[21px]">
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
      <div className="w-[375px] h-[300px] pb-[10.33px] justify-center items-center inline-flex">
        <img
          className="w-[375px] h-[541.67px] origin-top-left rotate-180"
          src="https://via.placeholder.com/375x542"
        />
      </div>
    </header>
  );
  // return (
  //   <div className="grid grid-cols-12">
  //     <div className="w-[1920px] h-[82px] px-20 py-[22px] bg-neutral-950 justify-between items-center inline-flex">
  //       <div className="h-[38px] justify-between items-center flex">
  //         <div className="w-56 h-[38px] justify-center items-center flex">
  //           <div className="w-56 h-[38px] relative flex-col justify-start items-start flex">
  //             <img src="/logo2.png" />
  //           </div>
  //         </div>
  //         <div className="justify-start items-start gap-8 flex">
  //           <div className="w-9 h-9 pl-[3.75px] pr-[5.15px] pt-[1.28px] pb-[1.46px] justify-center items-center flex"></div>
  //           <img src="/IconIOS.svg" />
  //           <div className="w-9 h-9 px-[3px] py-[1.50px] justify-center items-center flex"></div>
  //           <img src="IconAndroid.svg" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
// <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
//   hello world!
// </button>
