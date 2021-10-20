import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    HomeIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline';
import {useSession, signIn, signOut} from 'next-auth/react';
import {useRouter} from 'next/router';
import {useRecoilState} from 'recoil';
import {modalState} from '../atoms/modalAtoms';
import {Menu} from '@headlessui/react';

function Header() {
    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}

                <div className="relative hidden lg:inline-grid  w-24 cursor-pointer">
                    <Image 
                    onClick={()=> router.push('/')}
                    src="https://links.papareact.com/ocw" layout="fill"
                    objectFit="contain"/>
                </div>
                <div className="relative  w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image 
                    onClick={()=> router.push('/')}
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




                

                <div className="flex items-center justify-end">
                    <HomeIcon onClick={()=> router.push('/')} className=" navBtn " />
                    <Menu as="div" className="h-10 md:hhidden">
                        <Menu.Button className="">
                             <MenuIcon className="h-12 w-12 md:hidden cursor-pointer  " />
                        </Menu.Button>
                        {session && (
                            <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item className="h-10 w-full my-2 btnModal ">
                                    <PlusCircleIcon onClick={() => setOpen(true)} className="btnModal" />
                                </Menu.Item>
                                <Menu.Item className="h-10 w-full my-2 btnModal">
                                    <UserGroupIcon className="btnModal" />
                                </Menu.Item>
                                <Menu.Item className="relative h-10 w-full my-2 btnModal">
                                    <PaperAirplaneIcon className=" btnModal rotate-45" /> 
                                </Menu.Item>
                                <Menu.Item className="h-10 w-full my-2 btnModal">
                                    <HeartIcon className="btnModal" />
                                </Menu.Item>
                            </Menu.Items>
                        )}
                    </Menu>
                   

                    {session ? (
                    <>
                    <div className="relative navBtn">
                    <PaperAirplaneIcon className="navBtn rotate-45" />
                    <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                    </div>

                    <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <img 
                    onClick={signOut}
                    src={session.user.image}
                    alt="profile picture"
                    className="h-10 rounded-full cursor-pointer" />
                    </>
                ) : (
                    <button onClick={signIn}>Sign in</button>
                )}
                    
                </div>

            </div>


        </div>
    )
}

export default Header
