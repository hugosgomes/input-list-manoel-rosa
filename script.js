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
        if (
          item
            .querySelector("h1")
            .textContent.toLocaleLowerCase()
            .indexOf(inputValue.toLocaleLowerCase()) == -1
        ) {
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
    let cpf = event.target
      .closest(".dropdown-toggle-item")
      .querySelector("h3").textContent;
    const input = event.target.closest(".input-column").querySelector("input");
    input.value = name;
    dropdownToggle.classList.remove("active");
    cpf = cpf.replace("CPF ", "");
    table.insertAdjacentHTML(
      "beforeend",
      `<div class="table-row">
    <div class="table-column table-column-40">
      <div class="table-cell">
        <span class="name-value">${name}</span>
      </div>
    </div>
    <div class="table-column table-column-40">
      <div class="table-cell">
        <span class="cpf-value">${cpf}</span>
      </div>
    </div>
    <div class="table-column table-column-20">
      <div class="table-cell">
        <span>R$</span>
        <input type="text" class="value-benefit" name="" id="">
      </div>
    </div>
    <div class="table-column table-column-20">
      <div class="table-cell">
        <span>R$</span>
        <input type="text" class="value-benefit" name="" id="">
      </div>
    </div>
    <div class="table-column table-column-20">
      <div class="table-cell">
      </div>
    </div>
    <div class="table-column table-column-20">
      <div class="table-cell">
      </div>
    </div>
    <div class="table-column table-column-20">
      <div class="table-cell">
        <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/IO90DH/44/a7/fb/44a7fbeb854f4faaa39aac086a23d3a6/images/editar_pedido_1/u54.svg?token=d1e58f9c66bcc664c821a3da1017c679f3fcd987855e953bdc1566938d49b533&pageId=fcb19f6d-571a-4ab4-a49e-85b9a5bfef78" alt="">
        <p>Pré-pago</p>
      </div>
    </div>
    <div class="table-column table-column-10">
      <div class="table-cell">
        <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/IO90DH/44/a7/fb/44a7fbeb854f4faaa39aac086a23d3a6/images/editar_pedido_1/u174.svg?token=8095d84dea787d79406719946a44562caad67538e243bc8eca9fc89e716ee2ca&pageId=fcb19f6d-571a-4ab4-a49e-85b9a5bfef78" alt="">
      </div>
    </div>
  </div>`
    );
    table.classList.add("active");
    const deleteRowButtons = document.querySelectorAll(
      ".table-row .table-column:nth-child(8) img"
    );
    console.log(deleteRowButtons);
    deleteRowButtons.forEach(function (deleteRowButton) {
      deleteRowButton.addEventListener("click", function (event) {
        const tableRow = event.target.closest(".table-row");
        tableRow.remove();
        document.querySelectorAll(".table-row").length === 0 &&
          document.querySelector(".table").classList.remove("active");
      });
    });
  });
});
