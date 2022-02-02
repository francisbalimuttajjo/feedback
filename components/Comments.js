import React from "react";
import CommentReply from "./CommentReply";
import { Avatar, Divider } from "@mui/material";
import {useSession} from "next-auth/react";
import axios from 'axios'


const Comments = (props) => {
  const [reply, setReply] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const session =useSession()

  const handleReply=()=>{  
    if(!text.length){
      alert('please add reply')
      return;
    }
    setLoading(true)
        axios.post('/api/replies',{name:session.data.user.name,
          email:session.data.user.email,image:session.data.user.image,
          reply:text,comment:props.id}).then(res=>{
      
      if(res.data.status){
        setLoading(false)
        setText("")
        alert('reply saved')
        return
        
      }
    })
  }
  return (
    <div className="flex flex-col">
      <div className="flex  mb-2 ">
        <div className="flex m-2">
          <Avatar height={5} width={5} src={props.src} alt={props.alt} />
        </div>
        <div className="flex flex-col">
          <div className="flex  ">
            <div className="flex flex-col">
              <h6 className="font-semibold">{props.name}</h6>
              <p className="opacity-40 -mt-1  mb-1">{props.username}</p>
            </div>
            <div className="text-blue-700  right-12 absolute sm:mr-24 md:mr-80     ">
             {session.data &&  <button
                onClick={()=>setReply(true)}
                className="hover:font-bold hover:underline"
              >
                Reply
              </button>
             } 
            </div>
          </div>
          <div>
            <h6 className="opacity-50">{props.reply}</h6>
            <Divider sx={{ marginRight: "15px" }} />
            {props.replies.map((reply) => (
              <CommentReply
                key={reply._id}
                reply={reply.reply}
                name={reply.name}
                src={reply.image}
                username={reply.email}
                id={props.id}
                authorName={props.name.split(' ')[0]}
              />
            ))}
          </div>
        </div>
      </div>
      {reply && (
        <div>
          <textarea
            className="bg-gray-200 h-20 ml-12 mt-3 p-2 rounded-md  mb-2 resize-none  w-9/12"
            placeholder="enter reply"
            maxLength="250"
            value={text}
            onChange={(e)=>setText(e.target.value)}
          ></textarea>
          <div className="flex justify-center ml-10">
            <button
              className="bg-purple-600 hover:bg-blue-500 h-10 mb-2 mr-10 p-2 rounded-md text-white h-10"
              onClick={() => setReply(false)}
            >
              cancel
            </button>
            <button 
            onClick={handleReply}
            className="bg-blue-600 hover:bg-purple-500 h-10 mb-2 mr-10 p-2 rounded-md text-white h-10">
             {!loading && 'Post Reply'}
             {loading && 'Replying....'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



export default Comments;
