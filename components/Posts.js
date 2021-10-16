import Post from "./Post";

const posts = [
    {
        id: '123',
        username: 'Akhmad',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        captions: 'THIS IS DOPE'
    },
    {
        id: '123',
        username: 'Akhmad',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        captions: 'THIS IS DOPE'
    },
]
function Posts() {
    return (
        <div>
            {posts.map((post) => {
                return (
                    <Post 
                    key={post.id} 
                    username={post.username}
                    userImg={post.userImg}
                    captions={post.captions}
                    img={post.img}/>
                    
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
