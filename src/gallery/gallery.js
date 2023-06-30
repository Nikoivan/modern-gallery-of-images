import "./gallery.css";

export default class Gallery {
  constructor() {
    this.element = document.querySelector(".gallery");
    this.imageList = this.element.querySelector(".image-list");
    this.images = [];

    this.delete = this.delete.bind(this);
  }

  add(file) {
    const id = performance.now();

    const imageContainer = document.createElement("li");
    imageContainer.classList.add("item-image");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "X";
    closeBtn.addEventListener("click", this.delete);

    const imageTitle = document.createElement("h4");
    imageTitle.classList.add("image-title");
    imageTitle.textContent = file.name;

    imageContainer.append(closeBtn);
    imageContainer.append(imageTitle);

    this.imageList.append(imageContainer);
    this.images.push({ id, element: imageContainer });
    this.createImage(id, file);
  }

  createImage(id, file) {
    const image = document.createElement("img");
    image.classList.add("image");
    const url = URL.createObjectURL(file);
    image.src = url;

    const container = this.images.find((el) => el.id === id);
    container.element.append(image);
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  delete(e) {
    const target = e.target.closest(".item-image");
    target.remove();

    this.images = this.images.filter((el) => el.element !== target);
  }
}
