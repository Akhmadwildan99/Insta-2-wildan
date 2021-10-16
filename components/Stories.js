import {useEffect, useState} from 'react';
import faker from 'faker';
import Story from './Story'

function Stories() {
    const [sugestions, setSugestions] = useState([]);

    useEffect(()=>{
        const sugestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(), id: i
        }));
        setSugestions(sugestions);
    },[])
    return (
        <div className="flex space-x-2 p-6 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black
         ">
            {sugestions.map(profile => {
                return (
                    <Story 
                    key={profile.id}
                    username={profile.username}
                    img={profile.avatar}
                     />
                )
            })}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            
        </div>
    )
}

export default Stories
