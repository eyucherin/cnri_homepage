import Link from "next/link";
import {memo} from "react";
import HamburgerMenu from "./Hamburger/HamburgerMenu";

function NavigationBar() {
  return (
    <div className="sticky z-50  inset-x-0 top-0">
      <nav className="px-[6vw] flex place-items-center justify-between min-w-[100%] bg-white border-b-2 h-[10vh] lg:h-[12vh]">
        <Link href="/" className="flex items-center my-4">
          <img
            alt="logoImg"
            src="/images/CNRI_logo_black_under.svg"
            className="md:h-[6.5vh] h-[4.5vh] cursor-pointer"
          />
        </Link>
        <ul className="hidden sm:flex ">
          <li className="mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <a target="_blank" rel="noopener noreferrer" href="https://cis.cnrikorea.com">
              PRODUCT
            </a>
          </li>

          <li className=" mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <Link href="/company">COMPANY</Link>
          </li>

          <li className=" mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <Link href="/randd">R&D</Link>
          </li>

          <li className=" mx-[0.3vw] px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <a target="_blank" rel="noopener noreferrer" href="https://front-end-developer.oopy.io">
              JOBS
            </a>
          </li>

          <li className=" mx-[0.3vw] px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <a target="_blank" rel="noopener noreferrer" href="https://brunch.co.kr/@cnrikorea">
              BLOG
            </a>
          </li>
        </ul>
        <div className="flex">
          <div>
            <button
              type="button"
              className="bg-white hover:bg-blue-500 hover:text-white border border-blue-500 font-medium text-[2.5vw] sm:text-[1.2vw] rounded-lg px-[2vw] md:px-[1.3vw] py-[0.8vh]  mr-[1.5vw] sm:mr-[0.8vw] md:my-[0] md:py-[1vh] ">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://lc.cnrikorea.com/">
                체험하기
              </a>
            </button>

            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white border border-blue-500 font-medium text-[2.5vw] sm:text-[1.2vw] rounded-lg px-[2vw] md:px-[1.3vw] py-[0.8vh]  mr-[1.5vw] md:my-[0] md:py-[1vh]">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://cis.cnrikorea.com/register">
                데모신청
              </a>
            </button>
          </div>
          <button type="button" className="sm:hidden">
            <HamburgerMenu />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default memo(NavigationBar);
