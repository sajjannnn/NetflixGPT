import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utilis/contants";
import { type RootState } from "../utilis/appStore";
import { gptSearchToggle } from "../utilis/gptSlice";
import { changeLanguage } from "../utilis/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store.gpt.gptSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unsubscribe;
  }, []);
  const user = useSelector((store: RootState) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const gptSearchHandler = () => {
    dispatch(gptSearchToggle());
  };
  return (
    <div className="flex justify-between absolute w-full px-6  bg-gradient-to-b from-black z-100">
      <img className="h-44" src={LOGO} alt="" />
      {user && (
        <div className="flex items-center">
          {gptSearch && (
            <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button className="bg-red-800 text-white text-3xl p-2 px-4 rounded-2xl m-4" onClick={gptSearchHandler}>
            {!gptSearch ? "GPT Search" : "Home"}
          </button>

          <img className="h-10" src={user.photoURL} alt="profileIcon" />
          <button className=" font-bold text-white z-7 text-xl" onClick={handleSignOut}>
            Sign out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
