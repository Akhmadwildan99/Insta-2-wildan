import Post from "./Post";
import {useEffect, useState} from 'react';
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../firebase";

// const posts = [
//     {
//         id: '123',
//         username: 'Akhmad',
//         userImg: 'https://links.papareact.com/3ke',
//         img: 'https://links.papareact.com/3ke',
//         captions: 'THIS IS DOPE'
//     },
//     {
//         id: '124',
//         username: 'Akhmad',
//         userImg: 'https://links.papareact.com/3ke',
//         img: 'https://links.papareact.com/3ke',
//         captions: 'THIS IS DOPE'
//     },
// ]
function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => 
        onSnapshot(query(collection(db, "post"), orderBy("timeStamp", "desc")),( snapshot) => {
            setPosts(snapshot.docs);
        })
    , [db]);
   
    return (
        <div>
            {posts.map((post) => {
                return (
                    <Post 
                    key={post.id} 
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    captions={post.data().caption}
                    img={post.data().image}/>
                    
                )
            })}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    )
}

export default Posts
