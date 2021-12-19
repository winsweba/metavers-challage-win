import { useMoralis } from "react-moralis"

function ChangeUsername() {
    const {setUserData, isUserUpdating, userError, user} = useMoralis();
    
    const setUsername = () =>{
        const username = prompt(
            `Enter you new user name (current: ${user.getUsername()})`
        );

        if(!username) return;

        setUserData({
            username,
        })

    }
    return (
        <div className="text-sm absolute top-5 right-5">
          <button 
          disabled={isUserUpdating}
          onClick={setUsername}
          className="hover:text-pink-700">Change Your Username</button>  
        </div>
    )
}

export default ChangeUsername
