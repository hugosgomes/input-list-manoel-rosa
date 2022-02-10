const txtPesquisaNome = document.getElementById("txtPesquisaNome");
const inputsDropdown = document.querySelectorAll(".input-dropdown");
const dropdownToggleButtons = document.querySelectorAll(
  ".dropdown-toggle-item-button button"
);
const table = document.querySelector(".table");

inputsDropdown.forEach(function (input) {
  const dropdownToggle = input
    .closest(".input-column")
    .querySelector(".dropdown-toggle");
  const dropdownToggleItems = dropdownToggle.querySelectorAll(
    ".dropdown-toggle-item"
  );
  input.addEventListener("focusin", function () {
    dropdownToggle.classList.add("active");
  });
  input.addEventListener("keyup", function (event) {
    const inputValue = event.target.value;
    dropdownToggleItems.forEach((item) => {
      if (event.target.id === "txtPesquisaNome") {
        if (item.querySelector("h1").textContent.indexOf(inputValue) == -1) {
          item.style.display = "none";
        } else {
          item.style.display = "flex";
        }
      } else if (event.target.id === "txtPesquisaCpf") {
        if (item.querySelector("h3").textContent.indexOf(inputValue) == -1) {
          item.style.display = "none";
        } else {
          item.style.display = "flex";
        }
      }
    });
  });
  input.addEventListener("focusout", function () {
    console.log(dropdownToggle);
    dropdownToggle.classList.remove("active");
  });
});

dropdownToggleButtons.forEach(function (dropdownToggleButton) {
  dropdownToggleButton.addEventListener("focusin", function (event) {
    const dropdownToggle = event.target.closest(".dropdown-toggle");
    dropdownToggle.classList.add("active");
  });
});

dropdownToggleButtons.forEach(function (dropdownToggleButton) {
  dropdownToggleButton.addEventListener("click", function (event) {
    const name = event.target
      .closest(".dropdown-toggle-item")
      .querySelector("h1").textContent;
    const dropdownToggle = event.target.closest(".dropdown-toggle");
    const cpf = event.target
      .closest(".dropdown-toggle-item")
      .querySelector("h3").textContent;
    const input = event.target.closest(".input-column").querySelector("input");
    input.value = name;
    dropdownToggle.classList.remove("active");
    table.querySelector(".cpf-value").textContent = cpf.replace("CPF ", "");
    table.classList.add("active");
  });
});
