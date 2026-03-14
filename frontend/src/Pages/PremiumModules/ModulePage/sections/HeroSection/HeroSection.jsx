import { useState, useEffect, useCallback } from "react";
import { getRazorPay, loadRazorPay } from "../../../../../utils/razorpay";
import { createOrder, verifyPayment } from "../../../../../utils/modules";
import Carousel from "../../../../../components/Carousel/Carousel";
import HeroBackground from "../../../components/HeroBackground/HeroBackground";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import PreviewCard from "./PreviewCard";
import PurchaseForm from "./PurchaseForm";
import styles from "./HeroSection.module.css";
import Spinner from "../../../components/Spinner/Spinner";
import { IoCopy } from "react-icons/io5";

const formatNewLine = (text) => {
  const formattedText = text.replace(/\n/g, "<br />");
  return formattedText;
};

const HeroSection = ({ module, className }) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [purchaseType, setPurchaseType] = useState("soft");
  const [razorOpts, setRazorOpts] = useState(null);
  const [orderToken, setOrderToken] = useState(null);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    loadRazorPay();
  }, []);

  const copyText = useCallback((text) => {
    navigator.clipboard.writeText(text);
  }, []);

  const handlePaymentSuccess = useCallback(() => {
    setIsPaymentProcessing(false);
    setIsSuccessModalOpen(true);
  }, []);

  const closeLoadingModal = useCallback(() => {
    setIsPaymentProcessing(false);
  }, []);

  const closeSuccessModal = useCallback(() => {
    setIsSuccessModalOpen(false);
  }, []);

  const handlePayNow = useCallback(
    (user) => {
      setIsPaymentModalOpen(false);
      setIsPaymentProcessing(true);
      const rzp = getRazorPay({
        ...razorOpts,
        prefill: { contact: `+91${user.contactNumber}` },
        notes: { ...user, purchaseType, id: module.slug },
        theme: {
          color: "#22b286",
        },
        handler: async ({
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        }) => {
          verifyPayment(
            {
              ...user,
              token: orderToken,
              orderId: razorpay_order_id,
              paymentId: razorpay_payment_id,
              signature: razorpay_signature,
            },
            handlePaymentSuccess,
          );
        },
      });
      rzp.on("payment.failed", (response) => {
        console.log("Payment Failed:", response);
      });
      rzp.open();
    },
    [razorOpts, module.slug, purchaseType, orderToken, handlePaymentSuccess],
  );

  const closePaymentModal = useCallback(() => {
    setIsPaymentModalOpen(false);
  }, [setIsPaymentModalOpen]);

  const handlePurchase = useCallback(
    async (type) => {
      setPurchaseType(type);
      setIsPaymentModalOpen(true);

      const { token, order_id, amount, currency, key, name, description } =
        await createOrder(module.slug, type);
      setOrderToken(token);

      setRazorOpts({ order_id, amount, currency, key, name, description });
    },
    [module.slug],
  );

  return (
    <section className={`${styles.section} ${className}`}>
      <HeroBackground>
        <div
          className={`${styles.wrapper} container d-flex flex-column gap-5 overflow-hidden`}
        >
          <div
            className={`${styles.mainContainer} d-flex justify-content-between`}
          >
            <div className={`${styles.previewContainer}`}>
              <Carousel
                loop
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                centeredSlides={true}
                navigation
                keyboard={{ enabled: true, onlyInViewport: true }}
                slideClasses="mx-auto"
              >
                {module.previews.map(({ previewSrc }, index) => (
                  <PreviewCard
                    imgSrc={previewSrc}
                    imgAlt={`Preview ${index + 1}`}
                    key={index}
                  />
                ))}
              </Carousel>
            </div>
            <div className={`${styles.textContainer} d-flex flex-column gap-4`}>
              <h1>{`${module.name} Module`}</h1>
              <div
                className={`${styles.primaryBtnWrapper} d-flex align-items-center gap-5`}
              >
                <PrimaryButton handleClick={() => handlePurchase("soft")}>
                  <div className="d-flex flex-column align-items-center">
                    <p>{`e-Module - ${module.softCopyPrice}₹`}</p>
                    <p>
                      <strong>Buy Now !</strong>
                    </p>
                  </div>
                </PrimaryButton>
                {/*
                  <PrimaryButton handleClick={() => handlePurchase("hard")}>
                    <div className="d-flex flex-column align-items-center">
                      <p>{`Hard Copy Module - ${module.hardCopyPrice}₹`}</p>
                      <p>
                        <strong>Buy Now !</strong>
                      </p>
                    </div>
                  </PrimaryButton>
                */}
                <a
                  href={`https://drive.google.com/file/d/${module.fileId}/view?usp=drive_link`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn_premium"
                >
                  <span>
                    <small>Open Drive Link</small>
                    <small>Open Drive Link</small>
                  </span>
                </a>
              </div>
              <div>
                <h2>Description</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatNewLine(module.description),
                  }}
                ></p>
              </div>
              <div>
                <h2>{`Topics Include in ${module.name} Module:`}</h2>
                <div className="d-flex flex-column gap-4">
                  {module.topics.map(({ title, description }, index) => (
                    <div key={index}>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p>
                  <strong>Note :</strong> If you are placing an order for a
                  hardcopy module, it will be delivered to the address you
                  provided to us.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-4 mx-auto">
            <strong>Powered By</strong>
            <img
              src="/Assets2/Premium-Modules/razorpay.png"
              alt="RazorPay brand logo"
            />
          </div>
        </div>

        {isPaymentModalOpen ? (
          <PurchaseForm
            purchaseType={purchaseType}
            handlePayNow={handlePayNow}
            closeModal={closePaymentModal}
          />
        ) : (
          ""
        )}
        {isPaymentProcessing ? (
          <div className={`${styles.loadingModalWrapper}`}>
            <div className={`${styles.loadingModal}`}>
              <Spinner size={50} />
            </div>
            <div className={`${styles.overlay}`} onClick={closeLoadingModal} />
          </div>
        ) : (
          ""
        )}

        {isSuccessModalOpen ? (
          <div className="popup-container">
            <div
              className={`${styles.popupContent} popup-content d-flex flex-column justify-content-center`}
            >
              <span className="popup-close" onClick={closeSuccessModal}>
                &times;
              </span>
              <img
                src="/Assets2/Premium-Modules/display-asset.jpg"
                alt="Notes-Era MST bunddle"
              />
              <p className="text-center mt-2">Thank You for trusting us</p>
              <p className="text-center">
                Your purchase is added to your drive. View the below link with
                your registered email id.
              </p>
              <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
                <a
                  href={`https://drive.google.com/file/d/${module.fileId}/view?usp=drive_link`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn_premium"
                >
                  <span>
                    <small>Open Drive Link</small>
                    <small>Open Drive Link</small>
                  </span>
                </a>
                <button
                  className={styles.copyBtn}
                  onClick={() =>
                    copyText(
                      `https://drive.google.com/file/d/${module.fileId}/view?usp=drive_link`,
                    )
                  }
                >
                  <IoCopy size={35} />
                </button>
              </div>
            </div>
            <div className={`${styles.overlay}`} onClick={closeSuccessModal} />
          </div>
        ) : (
          ""
        )}
      </HeroBackground>
    </section>
  );
};

export default HeroSection;
