import {useState, useEffect} from 'react';
import faker from 'faker'
function Sugestions() {
    const [sugestions, setSugestions] = useState([]);
    

    useEffect(() => {
        const sugestions = [...Array(5)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSugestions(sugestions);
    }, [])
    return (
        <div className="mt-4 ml-10">
           <div className="flex justify-between text-sm mb-5">
               <h3 className="text-sm font-bold text-gray-400">Sugestions for you</h3>
               <button className="text-gray-600 font-semibold">See All</button>
            </div> 

            {
                sugestions.map(profile => {
                    return (
                        <div key={profile.id} className="flex items-center justify-between mt-3">
                            <img className="h-10 w-10 rounded-full border p-[2px]" src={profile.avatar} alt="" />

                            <div className="flex-1 ml-4">
                                <h2 className="font-semibold text-sm">{profile.username}</h2>
                                <h3 className="text-sm text-gray-400">Works at {profile.company.name}</h3>
                            </div>

                            <button className="text-blue-400 text-sm font-semibold">Follow</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sugestions
