import {auth} from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
  
}).catch((_error) => {
  // An error happened.
  navigate("/error")
});
  }
  return (
    <div className="flex justify-between absolute w-full px-6 py-2 bg-gradient-to-b from-black z-10">
      <img className="h-44" src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="" />
     {user && <div className="flex items-center">
        <img className="h-10" src= {user.photoURL} alt="profileIcon" />
        <button className=" font-bold text-white z-7 text-xl" onClick={handleSignOut}>Sign out </button>
      </div>}
    </div>
  );
};

export default Header;
