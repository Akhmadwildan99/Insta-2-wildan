import {getProviders, signIn as SignintoProviders} from 'next-auth/react'

function signIn({providers}) {
    return (
       <>
       {
           Object.values(providers).map((provider) => (
                   <div key={provider.name}>
                       <button onClick={() => SignintoProviders(provider.id)}>
                           Sign in with {provider.name}
                       </button>
                  </div>  
           ))
       }
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
