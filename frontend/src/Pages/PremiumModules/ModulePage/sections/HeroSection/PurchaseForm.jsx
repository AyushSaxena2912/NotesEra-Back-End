import { useCallback, useState } from "react";
import styles from "./PurchaseForm.module.css";

const PurchaseForm = ({ purchaseType, handlePayNow, closeModal }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAdd, setEmailAdd] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handlePayNow({ name: fullName, address, contactNumber, email: emailAdd });
    },
    [fullName, address, contactNumber, emailAdd, handlePayNow],
  );

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.overlay}`} onClick={() => closeModal()} />
      <div
        className={`${styles.container} d-flex flex-column gap-4 position-relative`}
      >
        <button
          className={`${styles.backBtn} position-absolute`}
          onClick={closeModal}
        >
          Back
        </button>
        <h1>{`${
          purchaseType === "soft" ? "E-Module" : "Hardcopy"
        } Order Form`}</h1>
        <div>
          <p>
            {purchaseType === "soft"
              ? "Provide contact and address for swift delivery of your Notes-Era hardcopy. Your details are safe with us. Thank you for choosing Notes-Era!"
              : "Enter your details to access your e-module instantly. Your information is safe with us. Thank you for choosing our e-learning materials!"}
          </p>
          <p>
            <strong>Place Your Order Now!</strong>
          </p>
        </div>
        <form
          className={`${styles.form} d-flex flex-column gap-4`}
          onSubmit={handleSubmit}
        >
          <label>
            Full Name
            <input
              type="text"
              placeholder="Your Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          {purchaseType === "hard" ? (
            <label>
              Delivery address
              <input
                type="text"
                placeholder="Your Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          ) : (
            ""
          )}
          <label>
            Contact Number
            <input
              type="tel"
              placeholder="Your 10 digit contact number"
              required
              minLength={10}
              maxLength={10}
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </label>
          <label>
            E-Mail
            <input
              type="email"
              placeholder="Your Email Address"
              value={emailAdd}
              onChange={(e) => setEmailAdd(e.target.value)}
              required
            />
          </label>
          <button type="submit" className={`${styles.submitBtn} btn mt-2`}>
            <span>
              <small>Pay Now !</small>
              <small>Pay Now !</small>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;
