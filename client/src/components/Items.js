import Component from "../core/Component.js";

export default class Items extends Component {
  template() {
    const { filteredItems } = this.props;

    const listItems = filteredItems
      .map(({ contents, active, seq }) => {
        return `
          <li data-seq="${seq}">
            <span>${contents}</span>
            <button class="toggleBtn" style="color:${active ? "#09f" : "#F09"}">
              ${active ? "활성" : "비활성"}
            </button>
            <button class="deleteBtn">삭제</button>
            <a href="/test" data-link>test link</a>
          </li>
        `;
      })
      .join("");

    return `<ul>${listItems}</ul>`;
  }

  setEvent() {
    const { deleteItem, toggleItem } = this.props;

    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const li = target.closest("li[data-seq]");
      if (!li) return;
      const seq = Number(li.dataset.seq);
      deleteItem(seq);
    });

    this.addEvent("click", ".toggleBtn", ({ target }) => {
      const li = target.closest("li[data-seq]");
      if (!li) return;
      const seq = Number(li.dataset.seq);
      toggleItem(seq);
    });
  }
}
