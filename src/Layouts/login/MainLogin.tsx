import React, { useState, ChangeEvent, useCallback } from "react";
import { auth } from "../../Component/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Google from "./google.svg";
import {
  Circle,
  CircleCheck,
  Eye,
  EyeClosed,
  LockIcon,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Photo0 from "./photo0.png";
import Button from "../../Component/button";
import ProfileSetupModal from "../../Component/ProfileSetupModal";

const App: React.FC = () => {
  const [seePass, setSeePass] = useState(false);
  const [rememberME, setRememberME] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmailValue(event.target.value);
    },
    []
  );

  const handlePassChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassValue(event.target.value);
    },
    []
  );

  const handleSendVerification = async (user: any) => {
    try {
      await sendEmailVerification(user);
    } catch (err) {
      console.error("Email verification failed:", err);
      throw new Error("Failed to send verification email");
    }
  };

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailValue || !passValue) {
      setError("Please enter both email and password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passValue
        );
        await handleSendVerification(userCredential.user);
        setVerificationSent(true);
        setError(
          "Verification email sent. Please verify your email before continuing."
        );
      } else {
        await signInWithEmailAndPassword(auth, emailValue, passValue);
        navigate("/MVNH");
      }
    } catch (err: any) {
      let errorMessage = "Authentication failed";
      const { code } = err;
      if (code === "auth/invalid-credential") {
        errorMessage = "Invalid email or password";
      } else if (code === "auth/email-already-in-use") {
        errorMessage = "Email already exists";
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleContinueVerification = async () => {
    const user = auth.currentUser;
    if (user) {
      await user.reload();
      if (user.emailVerified) {
        setShowProfileSetup(true);
      } else {
        setError("Email not verified yet. Please check your inbox.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/MVNH");
    } catch (err: any) {
      setError("Google sign-in failed");
    }
  };

  const handleForgotPassword = async () => {
    if (!emailValue) {
      setError("Please enter your email address");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, emailValue);
      setError("Password reset email sent. Please check your inbox.");
    } catch (err: any) {
      setError("Failed to send password reset email");
    }
  };

  return (
    <div className="flex justify-center lg:bg-main-bg items-center min-h-screen lg:w-full w-[436px]">
      <div className="hidden lg:flex">
        <img src={Photo0} alt="Login Visual" />
      </div>
      <div className="items-center mx-5 my-0 select-none lg:h-[530px] w-[436px]">
        <div className="pb-9">
          <h1 className="text-3xl font-light py-4">
            {isSignUp ? "Join Us" : "Welcome Back"} :)
          </h1>
          <p className="text-xs">
            📚 MVHN – Your Favorite Learning Partner. Stay connected to the best
            notes and resources. Please enter your email and password to
            continue exploring our content.
          </p>
        </div>
        <form onSubmit={handleAuth}>
          <div className="border h-[48px] relative bg-inp-bg">
            <span
              className={`absolute text-gray-600 z-10 pointer-events-none ${
                emailValue
                  ? "text-xs top-0 right-0 left-10"
                  : "text-sm bottom-2 left-12"
              }`}
            >
              Email Address
            </span>
            <label className="relative flex items-center h-full px-3">
              <Mail className="color-grey-100 text-gray-300 stroke-2 w-9" />
              <input
                className="w-full h-full bg-gray-100 focus:outline-none"
                type="email"
                onChange={handleEmailChange}
                value={emailValue}
              />
              <Button variant={null} size="icon" className="mr-0">
                <ShieldCheck className="color-grey-200 text-green-600 stroke-1 w-9" />
              </Button>
            </label>
          </div>
          <div className="border h-[48px] relative bg-inp-bg mt-4">
            <span
              className={`absolute text-gray-600 z-10 pointer-events-none ${
                passValue
                  ? "text-xs top-0 right-0 left-10"
                  : "text-sm bottom-2 left-12"
              }`}
            >
              Password
            </span>
            <label className="relative flex items-center h-full px-3">
              <LockIcon className="color-grey-100 text-gray-300 stroke-2 w-9" />
              <input
                className="w-full h-full bg-gray-100 focus:outline-none"
                type={seePass ? "text" : "password"}
                onChange={handlePassChange}
                value={passValue}
              />
              <Button
                size="icon"
                variant="icon"
                className="color-grey-100 text-gray-300 w-11 mr-0 relative"
                onClick={() => setSeePass(!seePass)}
              >
                <Eye className={`absolute ${seePass ? "flex" : "hidden"}`} />
                <EyeClosed
                  className={`absolute ${seePass ? "hidden" : "flex"}`}
                />
              </Button>
            </label>
          </div>
          <div className="text-xs text-gray-600 flex py-4 items-center justify-between px-3">
            <div className="flex items-center">
              <Button
                size="icon"
                variant="ghost"
                className="relative color-grey-100 w-9"
                onClick={() => setRememberME(!rememberME)}
              >
                <CircleCheck
                  className={`absolute ${rememberME ? "hidden" : "flex"}`}
                />
                <Circle
                  className={`absolute ${rememberME ? "flex" : "hidden"}`}
                />
              </Button>
              <span>Remember me</span>
            </div>
            <a href="#" onClick={handleForgotPassword}>
              Forgot password?
            </a>
          </div>
          {error && (
            <div className="error-message text-red-600 text-xs px-3">
              {error}
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Button
              type="submit"
              variant="defult"
              size="defult"
              className="bg-orange-500 text-white"
              disabled={loading}
            >
              {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
            </Button>
            <Button
              type="button"
              variant="defult"
              size="defult"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
            >
              {isSignUp ? "Already have an account?" : "Create Account"}
            </Button>
          </div>
          <div className="text-xs text-gray-600 py-4 flex flex-col items-center space-y-2">
            <span>Or Continue with</span>
            <Button size="icon" variant="icon" onClick={handleGoogleSignIn}>
              <img src={Google} alt="Google Sign-In" />
            </Button>
          </div>
          {verificationSent && (
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-600">
                Please check your email for the verification link.
              </p>
              <Button
                type="button"
                variant="defult"
                size="defult"
                onClick={handleContinueVerification}
                className="mt-2 bg-green-500 text-white"
              >
                I've Verified My Email
              </Button>
            </div>
          )}
        </form>
      </div>
      {showProfileSetup && (
        <ProfileSetupModal onClose={() => navigate("/MVNH")} />
      )}
    </div>
  );
};

export default App;
