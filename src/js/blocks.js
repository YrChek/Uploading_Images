export default class Blocks {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.blockToInsert = this.blockToInsert.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.removeBlock = this.removeBlock.bind(this);
  }

  blockToInsert(node, text) {
    const divPicture = document.createElement('div');
    divPicture.classList.add('item-picture');
    const figure = document.createElement('figure');
    const close = document.createElement('div');
    close.classList.add('item-close');
    close.textContent = 'X';
    figure.classList.add('figure');
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = text;
    figure.append(node);
    figure.append(figcaption);
    divPicture.append(figure);
    divPicture.append(close);
    return divPicture;
  }

  addBlock(node, text) {
    this.parentEl.append(this.blockToInsert(node, text));
  }

  removeBlock(element) {
    const el = element.closest('.item-picture');
    el.remove();
  }
}
