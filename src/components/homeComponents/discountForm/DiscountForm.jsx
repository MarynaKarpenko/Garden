import React, { useState } from "react";
import s from "./DiscountForm.module.css";
import img_discount_form from "../../media/images/Discount.svg";
import CheckoutForm from "../../UI/checkoutForm/CheckoutForm";
import ModalWindow from "../discountForm/modalWindow/ModalWindow";

export default function DiscountForm() {
  const [showModal, setShowModal] = useState(false);
  const [buttonText, setButtonText] = useState("Get a discount");

  const handleDiscountSubmit = () => {
    setShowModal(true);
    setButtonText("Request Submitted");
  };

  return (
    <div className={s.form_wrapper}>
      <h2 className={s.form_text}>5% off on the first order</h2>
      <div className={s.inform}>
        <img
          src={img_discount_form}
          alt="Discount form"
          className={s.discount_img}
        />

        <CheckoutForm
          handleDiscountSubmit={handleDiscountSubmit}
          classInput={s.discount_input}
          classBtn={s.discount_btn}
          txtBtn={buttonText}
        />
      </div>
      <ModalWindow showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
