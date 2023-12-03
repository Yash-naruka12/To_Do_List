let input = document.querySelector("#title");
let description = document.querySelector("#description");
let container = document.querySelector(".container");
let form = document.querySelector("form");



let createAllElement = () => {
  data.forEach((value, index) => {
    let createDiv = document.createElement("div");
    createDiv.setAttribute("class", "task");

    let createInnerDiv = document.createElement("div");
    createDiv.append(createInnerDiv);

    let para = document.createElement("p");
    createInnerDiv.append(para);
    para.innerText = value.input;

    let span = document.createElement("span");
    createInnerDiv.append(span);
    span.innerText = value.description;

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn");
    btn.innerText = "-";
    btn.addEventListener("click", () => {
      removetask();
      data.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(data));
      createAllElement();
    });

    createDiv.append(btn);

    container.append(createDiv);
  });
};

let data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

createAllElement();


let removetask = () => {
  data.forEach(() => {
    let div = document.querySelector(".task");
    div.remove();
  });
};

form.addEventListener("submit", (events) => {
  events.preventDefault();
    removetask();

    data.push({
      input: input.value,
      description: description.value,
    });
    createAllElement();

    localStorage.setItem("data", JSON.stringify(data));
  
});
