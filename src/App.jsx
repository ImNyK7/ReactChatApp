import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();

  
  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      if (user) {
        fetchUserInfo(user.uid);  // Fetch user info only if user exists
      } else {
        fetchUserInfo(null);  // If no user, reset user state
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);


  if (isLoading) return <div className="loading">Please Wait...</div>

  return (
    <div className='container'>
      {
        currentUser ? (
          <>
            <List />
            {chatId && <Chat />}
            {chatId && <Detail />}
          </>
        ) : (<Login />)
      }
      <Notification/>
    </div>
  )
}

export default App