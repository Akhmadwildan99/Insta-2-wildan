import {useEffect} from 'react';
import faker from 'faker';

function Stories() {
    useEffect(()=>{
        const sugestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(), id: i
        }));
        console.log(sugestions);
    },[])
    return (
        <div>
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
