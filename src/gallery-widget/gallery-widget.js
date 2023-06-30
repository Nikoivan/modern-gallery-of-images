import Gallery from "../gallery/gallery";
import "./gallery-widget.css";

export default class GalleryWidget {
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
