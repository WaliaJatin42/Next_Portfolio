import Image from 'next/image';
import Link from 'next/link';
import Socials from "../components/Socials";

const Header = () => {
  return <header
    className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]"
  >
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href={'/'} className='font-semibold'>
          <span className='font-bold text-2xl mr-0.5'>jatin</span> walia <span className='text-red-300 w-[10px] h-[10px] rounded-full'>.</span>
        </Link>

        <Socials />
      </div>
    </div>
  </header>
}

export default Header;
