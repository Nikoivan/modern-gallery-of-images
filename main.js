/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/gallery/gallery.js

class Gallery {
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
    this.images.push({
      id,
      element: imageContainer
    });
    this.createImage(id, file);
  }
  createImage(id, file) {
    const image = document.createElement("img");
    image.classList.add("image");
    const url = URL.createObjectURL(file);
    image.src = url;
    const container = this.images.find(el => el.id === id);
    container.element.append(image);
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }
  delete(e) {
    const target = e.target.closest(".item-image");
    target.remove();
    this.images = this.images.filter(el => el.element !== target);
  }
}
;// CONCATENATED MODULE: ./src/gallery-widget/gallery-widget.js


class GalleryWidget {
  constructor() {
    this.element = document.querySelector(".gallery-widget");
    this.form = this.element.querySelector(".loader");
    this.loadPanel = this.element.querySelector(".load-panel");
    this.fileInput = this.element.querySelector(".file-input");
    this.panelList = this.element.querySelector(".panel-list");
    this.gallery = new Gallery();
    this.onClick = this.onClick.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.loadPanel.addEventListener("click", this.onClick);
    this.fileInput.addEventListener("change", this.addImage);
    this.loadPanel.addEventListener("dragover", this.onDragOver);
    this.loadPanel.addEventListener("drop", this.onDrop);
  }
  onClick() {
    this.fileInput.dispatchEvent(new MouseEvent("click"));
  }
  onDragOver(e) {
    e.preventDefault();
  }
  onDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file) return;
    this.gallery.add(file);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const gallery = new GalleryWidget();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;