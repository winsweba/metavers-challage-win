import Image from "next/image";
import { useMoralis } from "react-moralis"
import { Zoom } from "react-reveal";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import babImg from "../images/bg1.jpg"

function Header() {
    const {user} = useMoralis();
    return (
        <div className="sticky top-0 pl-5 zr-50 bg- shadow-sm
         text-yellow-500 border-b-2 border-yellow-400 bg-blue-900 ">
              
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        
            
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid" >

                

                <Image 
                layout="fill"
                className="rounded-full"
                objectFit="cover"
                  src="https://links.papareact.com/3pi" />
                  
                </div>
                
                <div className="col-span-4 text-left lg:text-center">

                <Zoom top cascade collapse>
                <div className="relative h-48 w-48
                    lg:mx-auto border-pink-500 border-8
                    rounded-full">
                       <Avatar logoutOnPress/>
                    </div>
                </Zoom>
                    


                    
                    <h1 className="text-3xl"
                    > Welcome to wins Metaverse</h1>


                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>


                    <ChangeUsername/>
                    
                    {/* change username comp */}
                </div>
            </div>
        </div>
    )
}

export default Header
