export const changePopapWindow = () => {
  const darkEffectsOfCardServices = document.querySelectorAll(".dark__effect");

  const imgCardSecvices = document.querySelectorAll(
    ".wrapper__card__services .img__card__services",
  );

  const descriptionCardSecvices = document.querySelectorAll(
    ".wrapper__card__services .description__card__services",
  );
  const descriptionPopapWindow = document.querySelector(
    ".wrapper__popap__window .popap__window .title__popap__window",
  );

  const imgPopapWindow = document.querySelector(
    ".wrapper__popap__window .popap__window .img__popap__window",
  );

  function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  darkEffectsOfCardServices.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("diagnostic")) {
        descriptionPopapWindow.innerText = capitalize(
          descriptionCardSecvices[0].innerText,
        );
        // imgPopapWindow.src = "./images/services/0.jpg";
        imgPopapWindow.src = imgCardSecvices[0].src;
      }
      if (item.classList.contains("tireswheels")) {
        // console.log("Есть Диагностика");

        descriptionPopapWindow.innerText = capitalize(
          descriptionCardSecvices[1].innerText,
        );
        imgPopapWindow.src = imgCardSecvices[1].src;
      }
      if (item.classList.contains("engines")) {
        descriptionPopapWindow.innerText = capitalize(
          descriptionCardSecvices[2].innerText,
        );
        imgPopapWindow.src = imgCardSecvices[2].src;
      }
    });
  });
};
