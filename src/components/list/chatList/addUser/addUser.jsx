import { collection, getDocs, query, serverTimestamp, setDoc, where, doc, updateDoc, arrayUnion } from "firebase/firestore";
import "./addUser.css";
import { db } from "../../../../lib/firebase";
import { useState } from "react";
import { useUserStore } from '/src/lib/userStore';

const AddUser = () => {
    const [user, setUser] = useState(null);

    const {currentUser} = useUserStore()

    const handleSearch = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;  // Get username from form input

        try {
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];  // Access the first document
                setUser(doc.data());
            } else {
                setUser(null);  // Handle case when no user is found
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleAdd = async ()=>{

        const chatRef = collection(db,"chats")
        const userChatsRef = collection(db,"userchats")

        try{
            const newChatRef = doc(chatRef)

            await setDoc(newChatRef,{
                createdAt: serverTimestamp(),
                messages: []
            });

            await updateDoc(doc(userChatsRef, user.id), {
                chats:arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                }),
            });

            await updateDoc(doc(userChatsRef, currentUser.id), {
                chats:arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: user.id,
                    updatedAt: Date.now(),
                }),
            });

        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="addUser">
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="username" name="username" />
                <button>Search</button>
            </form>
            <div className="user">
                {user ? (
                    <div className="detail">
                        <img src={user.avatar || "./avatar.png"} alt="" />
                        <span>{user.username || "Unknown User"}</span>
                    </div>
                ) : (
                    <p>No user found</p>
                )}
                <button onClick={handleAdd}>Add User</button>
            </div>
        </div>
    );
};

export default AddUser;
