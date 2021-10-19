import {useState, useEffect} from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline';
import {useSession} from 'next-auth/react';
import { addDoc, setDoc , doc, collection, serverTimestamp, query, onSnapshot, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
// import Moment from 'react-moment';

function Post({ id, username, userImg, img, captions}) {
    const {data: session} = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);

    useEffect(
        () =>
          onSnapshot(collection(db, 'post', id, 'likes' ),
               snapshot => setLikes(snapshot.docs)
            ),
        [db, id]
    )

    const likePost = async () => {
        await setDoc(doc(db, 'post', id, 'likes', session.user.uid), {
            username: session.user.username
        })
    }

    const sendComment = async (e) => {
        e.preventDefault();

        const commenCurrent = comment;
        setComment("")

        await addDoc(collection(db, 'post', id, 'comments'), { 
            comment: commenCurrent,
            username: session.user.username,
            userImg: session.user.image,
            timeStamp: serverTimestamp()
        })   
    }

    useEffect(
        () =>
         onSnapshot(
             query(
                 collection(db, 'post', id, 'comments'), orderBy('timeStamp', 'desc')),
                  snapshot => setComments(snapshot.docs)
                  ),
            [db, id]
        );

    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5 " />
            </div>

            {/* Image */}
            <img src={img} className="object-cover w-full  " alt="" />

            {/* Button */}
            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        <HeartIcon onClick={likePost} className="btn"/>
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            )}

            {/* Caption */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}</span>
                {captions}
            </p>

            {/* Comments */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map((comment) =>(
                        <div key= {comment.id} className="flex items-center space-x-2 mb-3">
                            <img className="h-7 rounded-full" src={comment.data().userImg} alt="" />
                            <p className="text-sm flex-1">
                                <span className="font-bold">{comment.data().username}</span>
                                {" "}
                                {comment.data().comment}
                            </p>
                            {/* <Moment fromNow>
                                {comment.data().timeStamp?.toDate()}
                            </Moment> */}
                        </div>
                    ))}
                </div>
            )}

            {/* Input box */}
            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7"/>
                    <input type="text" 
                    placeholder="Add a comments ..." 
                    className="border-none flex-1 focus:ring-0 outline-none "
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    />
                    <button 
                    type="submit"
                    disabled={!comment.trim()}
                    className="font=semibold text-blue-400"
                    onClick={sendComment} 
                    >Post</button>
                </form>
            )}
            
        </div>
    )
}

export default Post
