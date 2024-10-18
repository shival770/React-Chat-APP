import ConversationProfile from "./ConversationProfile";
import useGetConversation from "../hooks/useGetConversation.js";
import { emojiGenerator } from "../utills/emojiGenerator.js";
const Conversations = () => {
    const {loading , conversations} = useGetConversation();
    console.log(conversations)

    return (
        <div className="flex flex-col py-2 overflow-hidden">
        {
            conversations.map((conversation , idx)=>(
                <ConversationProfile
                 key={conversation._id}
                 conversation={conversation}
                 emoji={emojiGenerator()}
                 lastIdx={idx === conversation.length - 1}
                 /> 
            ))
        }
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
            
        </div>
    )
}
export default Conversations