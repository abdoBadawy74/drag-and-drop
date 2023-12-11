// call main elements

let btn = document.getElementById("btn");

let input = document.getElementById("inp");

let boxes = document.querySelectorAll(".box");

// drag is the element that hold item in drag process

let drag = null;

btn.onclick = function () {
  // make sure that input has value to add
  if (input.value != "") {
    boxes[0].innerHTML += `
        <p class="item" draggable="true">${input.value}</p>
        `;
    input.value = "";
    // make input empty after click on btn
  }
  dragItme();
};

function dragItme() {
  let items = document.querySelectorAll(".item");
  //   loop in items to drag and drop

  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });
    
    // loop in boxes to chech if have items or not

    boxes.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "#090";
        this.style.color = "#fff";
      });

      box.addEventListener("dragleave", function () {
        this.style.backgroundColor = "#fff";
        this.style.color = "#000";
      });

      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.backgroundColor = "#fff";
        this.style.color = "#000";
      });
    });
  });
}
