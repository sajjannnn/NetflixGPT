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
  const gptSearch = useSelector((store:RootState) => store.gpt.gptSearch);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email || null, displayName: displayName || null, photoURL: photoURL || null }));
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
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };

  const gptSearchHandler = () => {
    dispatch(gptSearchToggle());
  };
  return (
    <div className="flex flex-col md:flex-row justify-between absolute w-full px-6  bg-gradient-to-b from-black z-100">
      <img className="h-24 sm:h-44 mx-auto md:mx-0" src={LOGO} alt="" />
      {user && (
        <div className="flex justify-between items-center ">
          {gptSearch && (
            <select className=" p-1 m-1 md:p-2 md:m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button className="bg-red-800 text-white sm:text-3xl p-1 sm:p-2 px-4 rounded-2xl m-4" onClick={gptSearchHandler}>
            {!gptSearch ? "GPT Search" : "Home"}
          </button>
          <div className="flex">
            <img className="sm:h-10" src={user?.photoURL || ""} alt="profileIcon" />
            <button className=" font-bold text-white z-7 text-xl" onClick={handleSignOut}>
              Sign out{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
