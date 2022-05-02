
"use strict";

const DomElement = function (selector, height, width, background, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.background = background;
    this.fontSize = fontSize;
};

DomElement.prototype.Create = function () {
    let newElemnt;
    if (this.selector[0] === ".") {
        newElemnt = document.createElement("div");
        newElemnt.classList.add(this.selector);
        newElemnt.innerHTML = "<h1>Hello!</h1>";
        newElemnt.style.cssText =
            "height: " + this.height +
            "; \
                width: " +
            this.width +
            "; \
                background: " +
            this.background +
            "; \
                font-size: " +
            this.fontSize;
    } else if (this.selector[0] === "#") {
        newElemnt = document.createElement("p");
        let idStr = newElemnt.id;
        newElemnt.id = this.selector;
        newElemnt.innerHTML = "<h1>Hello!</h1>";
        newElemnt.style.cssText =
            "height: " +
            this.height +
            "; \
                  width: " +
            this.width +
            "; \
                  background: " +
            this.background +
            "; \
                  font-size: " +
            this.fontSize;
    } else console.log("Укажите селектор");
    document.body.append(newElemnt);
};

let domElement = new DomElement(".best", "100px", "150px", "red", "20px");
domElement.Create();
console.log(domElement);