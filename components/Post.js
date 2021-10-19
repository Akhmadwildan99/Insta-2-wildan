import {useState} from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline';
import {useSession} from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "../firebase";

function Post({ id, username, userImg, img, captions}) {
    const {data: session} = useSession();
    const [comment, setComment] = useState("");
    console.log(id);


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
                        <HeartIcon className="btn"/>
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
