import {getProviders, signIn as SignintoProviders} from 'next-auth/react';
import Header from '../../components/Header'

function signIn({providers}) {
    return (
       <>
       <Header />
       <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-16 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw"/>
        <p className="font-sm italic">This Instagram I build to my portofolio career</p>
        <div className="mt-40">
            {
                Object.values(providers).map((provider) => (
                        <div className="" key={provider.name}>
                            <button className=" p-3 bg-blue-500 text-white  rounded-lg " onClick={() => SignintoProviders(provider.id, {callbackUrl: '/'})}>
                                SignIn with {provider.name}
                            </button>
                        </div>  
                ))
            }

        </div>

       </div>
       </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}

export default signIn
