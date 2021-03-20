export default class Product {
  constructor(category = "", name = "", desc = "", weight = "", volume = "") {
    this.category = category;
    this.name = name;
    this.desc = desc;
    this.weight = weight;
    this.volume = volume;
  }

  addToMenu = () => {
    const $tableBody = document.querySelector("#newProductTableBody");
    const $el = document.createElement("tr");

    $el.innerHTML = `
      <tr class="table__row">
        <td class="table__data">${this.category}</td>
        <td class="table__data">${this.name}</td>
        <td class="table__data">${this.desc}</td>
        <td class="table__data">${this.weight}</td>
        <td class="table__data">${this.volume}</td>
      </tr>
    `;

    $tableBody.appendChild($el);
  };
}
