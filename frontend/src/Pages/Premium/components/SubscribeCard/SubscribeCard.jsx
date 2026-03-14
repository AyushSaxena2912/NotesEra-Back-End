import { useState } from "react";
import { addSubscription } from "../../../../utils/premium";
import CustomInput from "../CustomInput/CustomInput";

import subscribeCard from "./SubscribeCard.module.css";

const SubscribeCard = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showInput, setShowInput] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
  };

  const handleSubmit = async () => {
    const valid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!valid.test(email)) {
      setIsValid(false);
      return;
    }
    await addSubscription(email);
    setShowInput(false);
  };

  return (
    <div
      className={`${subscribeCard.wrapper} container d-flex flex-column flex-lg-row align-items-center justify-content-between`}
    >
      <img src="/Assets2/Premiums/subscribe.png" alt="NotesEra asset" width={200} height={150} />
      <div className={subscribeCard.content}>
        <h1>Subscribe Now !</h1>
        <p>
          {showInput
            ? `"Subscribe for exclusive updates and premium content from NotesEra. Elevate your learning experience!"
`
            : `"Thank you for subscribing! Stay tuned for exciting updates and exclusive content. Welcome to our community!❤️"`}
        </p>
        {showInput && (
          <CustomInput
            value={email}
            isValid={isValid}
            invalidText="Please enter a valid email."
            placeholder="Your Email Address..."
            btnText="Join Now"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default SubscribeCard;
