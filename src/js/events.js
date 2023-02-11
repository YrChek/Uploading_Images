export default class Events {
  constructor(photoBlock, obj) {
    this.photoBlock = photoBlock;
    this.obj = obj;
    this.fieldName = document.querySelector('.field-name');
    this.fieldUrl = document.querySelector('.field-url');
    this.button = document.querySelector('.btn');
    this.errorDiv = document.querySelector('.error');

    this.buttonClick = this.buttonClick.bind(this);
    this.cleaningError = this.cleaningError.bind(this);
    this.deletingPhoto = this.deletingPhoto.bind(this);

    this.button.addEventListener('click', this.buttonClick);
    this.fieldUrl.addEventListener('input', this.cleaningError);
    this.photoBlock.addEventListener('click', this.deletingPhoto);
  }

  buttonClick(e) {
    const url = this.fieldUrl.value;
    if (!url) return;
    e.preventDefault();
    const text = this.fieldName.value;
    // const url = this.fieldUrl.value;
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Photo';
    img.classList.add('img');
    this.fieldName.value = '';
    this.fieldUrl.value = '';
    img.onload = () => this.obj.addBlock(img, text);
    img.onerror = () => { this.errorDiv.style.visibility = 'visible'; };
  }

  cleaningError() {
    this.errorDiv.style.visibility = '';
  }

  deletingPhoto(e) {
    const block = e.target;
    if (block.classList) {
      if (block.classList.value === 'item-close') this.obj.removeBlock(block);
    }
  }
}
