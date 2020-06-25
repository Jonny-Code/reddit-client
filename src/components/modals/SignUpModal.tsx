import React, { useState } from "react";
import { ReactComponent as CloseSvg } from "./svg/x.svg";
import { FetchRegister } from "../../util/Fetch";
import "./SignUpModal.css";

export const SignUpModal: React.FC<{
  openSignUpModal: string;
  setOpenSignUpModal: (e: any) => void;
}> = (props) => {
  const [user, setUser] = useState<object>({
    email: "",
    password: "",
    name: "",
  });
  const updateField = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const closeSignupModal = () => {
    props.setOpenSignUpModal("");
  };
  const signUp = () => {
    FetchRegister(user);
  };

  return (
    <div className={`signup-modal ${props.openSignUpModal}`}>
      <div className="signup-modal-content">
        <div className="signup-modal-col-1"></div>
        <div className="signup-modal-col-2">
          <span onClick={closeSignupModal} className="signup-modal-close">
            <CloseSvg />
          </span>
          <div className="signup-modal-container">
            <h4>
              By having a Reddit account, you can join, vote, and comment on all
              your favorite Reddit content.
            </h4>
            <input
              onChange={updateField}
              name="name"
              type="text"
              placeholder="Username"
            />
            <input
              onChange={updateField}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={updateField}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button onClick={signUp} className="pointer">
              SIGN UP
            </button>
            <small>
              Already a Redditor?{" "}
              <span className="text-blue pointer">LOG IN</span>
            </small>
            <small>
              By clicking next, you agree to our{" "}
              <span className="text-blue pointer">Terms</span> and that you have
              read our <span className="text-blue pointer">Privacy Policy</span>{" "}
              and <span className="text-blue pointer">Content Policy</span>.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
