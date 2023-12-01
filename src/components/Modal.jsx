import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal() {
  // State to store otplessUser data
  const [otplessUser, setOtplessUser] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript";
    document.body.appendChild(script);

    // Set the otplessUser state when it is received
    window.otpless = (user) => {
      setOtplessUser(user);
      showAlert(user);
    };

    const showAlert = (user) => {
      // Show toast notification after updating the state
      toast.success(JSON.stringify(user), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "transparent",
        className:'toast'
      });
    };

    return () => {
      console.log("Modal is unmounting");
      const scriptElement = document.getElementById("otplessIdScript");
      document.body.removeChild(scriptElement);
    };
  }, []);

  return (
    <>
      <div className="toDiv">
        <div id="otpless-login-page"></div>
        <div className="gap">
          <h1>{otplessUser ? `whatsapp Name: ${otplessUser.waName}` : ""}</h1>
          <h1>{otplessUser ? ` Whatsapp no: ${otplessUser.waNumber}` : ""}</h1>
          <h1>{otplessUser ? `Token: ${otplessUser.token} ` : ""}</h1>
          <h1>{otplessUser ? `TimeStamp: ${otplessUser.timestamp}` : ""}</h1>
          <h1>{otplessUser ? `Timezone: ${otplessUser.timezone}` : ""}</h1>
          <h1>{otplessUser ? `Name: ${otplessUser.mobile.name}` : ""}</h1>
          <h1>{otplessUser ? `Contact: ${otplessUser.mobile.number}` : ""}</h1>
          <h1>{otplessUser ? `Full Name: ${otplessUser.email.name}` : ""}</h1>
          <h1>{otplessUser ? `Email: ${otplessUser.email.email}` : ""}</h1>
        </div>
      </div>
      {/* ToastContainer to display notifications */}
      <ToastContainer />
    </>
  );
}
