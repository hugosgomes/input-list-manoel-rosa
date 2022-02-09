const txtPesquisaNome = document.getElementById("txtPesquisaNome");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownToggleItems = document.querySelectorAll(".dropdown-toggle-item");
const dropdownToggleButtons = document.querySelectorAll(
  ".dropdown-toggle-item-button button"
);
const table = document.querySelector(".table");

txtPesquisaNome.addEventListener("focusin", function () {
  dropdownToggle.classList.add("active");
});

txtPesquisaNome.addEventListener("keyup", filterItems);

txtPesquisaNome.addEventListener("focusout", function () {
  dropdownToggle.classList.remove("active");
});

dropdownToggleButtons.forEach(function (dropdownToggleButton) {
  dropdownToggleButton.addEventListener("focusin", function () {
    dropdownToggle.classList.add("active");
  });
});

dropdownToggleButtons.forEach(function (dropdownToggleButton) {
  dropdownToggleButton.addEventListener("click", function (event) {
    const name = event.target
      .closest(".dropdown-toggle-item")
      .querySelector("h1").textContent;
    const cpf = event.target
      .closest(".dropdown-toggle-item")
      .querySelector("h3").textContent;
    txtPesquisaNome.value = name;
    dropdownToggle.classList.remove("active");
    table.querySelector(".cpf-value").textContent = cpf.replace("CPF ", "");
    table.classList.add("active");
  });
});

function filterItems() {
  const inputValue = txtPesquisaNome.value;
  dropdownToggleItems.forEach((item) => {
    if (item.querySelector("h1").textContent.indexOf(inputValue) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });
}
