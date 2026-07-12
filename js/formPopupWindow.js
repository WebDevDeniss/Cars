const formPopupWindow = () => {
  const wrapperFormPopupWindow = document.querySelector(
    ".wrapper__contacts__popap__window",
  );

  const btnCloseFormPopupWindow = document.querySelector(
    ".wrapper__contacts__popap__window .icon__close__popap__window",
  );

  const btnSendForm = document.querySelector(
    ".section__contact__us .form__contact .btn__send",
  );

  const inputName = document.querySelector(".form__contact .input__name");
  const inputLastName = document.querySelector(".form__contact .last__name");
  const inputEmail = document.querySelector(".form__contact .input__email");
  const inputPhone = document.querySelector(".form__contact .input__phone");

  const inputsForm = document.querySelectorAll(".form__contact .input");

  btnSendForm.addEventListener("click", () => {
    if (
      !inputName.value == "" &&
      !inputLastName.value == "" &&
      !inputEmail.value == "" &&
      !inputPhone.value == ""
    ) {
      //   console.log("Все поля заполнены");
      wrapperFormPopupWindow.classList.add("active");
    }
  });

  btnCloseFormPopupWindow.addEventListener("click", () => {
    wrapperFormPopupWindow.classList.remove("active");

    inputsForm.forEach((element) => {
      element.value = "";
    });
  });
};

export default formPopupWindow;
