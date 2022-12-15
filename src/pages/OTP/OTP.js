import "./style.scss";
import { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// import { useDispatch } from "react-redux";
// import { clear as clearCart } from "../../features/cartSlice";
import { authenticator, hotp, totp } from 'otplib';
import AuthCode from 'react-auth-code-input';
import Mailgun from "mailgun.js";
import FormData from "form-data";

const OTP = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const secret = authenticator.generateSecret();
  // const otp = authenticator.generate(secret);
  const AuthInputRef = useRef(null);

  // const api_key = 'fa0c27a0516f3ee2468c5cabe8c0edd3-90ac0eb7-8102c1e8';
  const api_key = 'key-287ad7a94e6d7b0891ccc51ceff2804d'
  const domain = 'sandbox39e9a72ba07e440f9b710f856b6f23fd.mailgun.org';
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({ username: 'api', key: api_key });

  const [input, setInput] = useState("");
  const [secret, setSecret] = useState("");
  const [otp, setOTP] = useState("");
  const [otpSent, setOTPSent] = useState(false);
  const [otpVerified, setOTPVerified] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnChange = (input) => {
    setInput(input);
  };

  const sendOTP = () => {
    authenticator.options = { digits: 6, step: 180, window: 0 }

    const s = 'JBSWY3DPEHPK3PXP'
    const o = authenticator.generate(s);
    setSecret(s);
    setOTP(o);
    // console.log("secret: ", s);
    // console.log("otp: ", o);

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    const timestamp = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    mg.messages.create(domain, {
      from: 'Goodest Mall <mailgun@sandbox39e9a72ba07e440f9b710f856b6f23fd.mailgun.org>',
      to: ['wlskitw@gmail.com'],
      subject: `Your OTP for testing`,
      html: `
            You have requested an OTP for testing at ${timestamp}.
            <br />
            Below is your OTP:
            <h1>${o}</h1>
            <br />
            Please enter the OTP within 3 minutes.
            <br />
            Thank you for using Goodest Mall.
            `
    })
      .then(msg => {
        console.log(msg);
        setOTPSent(true);
      })
      .catch(err => console.log(err));

    console.log("OTP: ", o, " | Secret: ", s);
  };

  const verify = () => {
    try {
      const userInput = input;
      console.log("userInput: ", userInput, " | otp: ", otp, " | secret: ", secret);
      const isValid = authenticator.check(userInput, secret);
      console.log("isValid: ", isValid);
      console.log("timeUsed: ", authenticator.timeUsed());
      console.log("timeRemaining: ", authenticator.timeRemaining());
      setOTPVerified(isValid);
    }
    catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="otp">
      <div className="container">
        {/* {secret}
        <br />
        {otp} */}
        <h1>OTP Test</h1>
        <AuthCode allowedCharacters="numeric" onChange={handleOnChange}
          ref={AuthInputRef}
        />

        {otpSent && <h4>OTP sent!</h4>}
        {otpVerified != null ? otpVerified ? <h4>OTP verified!</h4> : <h4>OTP not verified!</h4> : <></>}

        {!otpSent &&
          <button
            onClick={() => {
              // genOTP();
              sendOTP();
            }}
          >
            Get OTP
          </button>
        }

        {otpSent &&
          <button
            onClick={() => {
              verify();
            }}
          >
            Verify
          </button>
        }

        <button
          onClick={() => {
            AuthInputRef.current?.clear();
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default OTP;
