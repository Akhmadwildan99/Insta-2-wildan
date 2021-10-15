import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    HomeIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}

                <div className="relative hidden lg:inline-grid  w-24 cursor-pointer">
                    <Image 
                    src="https://links.papareact.com/ocw" layout="fill"
                    objectFit="contain"/>
                </div>
                <div className="relative  w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image 
                    src="https://links.papareact.com/jjm" layout="fill"
                    objectFit="contain"/>
                </div>

                {/* Middle - Search Input */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="bg-gray-50 pl-10 w-full sm:text-sm border-gray focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>

                </div>




                {/* Right */}
                <div className="flex items-center justify-end">
                    <HomeIcon className="h-10 w-10 " />
                    <MenuIcon className="h-6 md:hidden cursor-pointer  " />
                </div>

            </div>


        </div>
    )
}

export default Header