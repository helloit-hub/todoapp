// Action Buttons
const addNewTodo = document.querySelector("#addnewtodobtn");
const deltodobtn = document.querySelector("#deltodobtn");
const edittodobtn = document.querySelector("#edittodobtn");
const resetApp = document.querySelector("#reset");
// Form
const addTodoForm = document.querySelector("#addtodoform");
const todotitle = document.querySelector("#todotitle");
const description = document.querySelector("#description");
const submitbtn = document.querySelector("#addTodo");

// Main View
const todo = document.querySelector("#todo");
const todoChild = document.querySelector("#todochild");
const date = document.querySelector("#date");

const data = [];
class Todo {
  constructor(date, title, des) {
    this.date = date;
    this.title = title;
    this.des = des;
    this._defaultView();
    this._addTodoItems();
    this._updateTimeZone();
    this._resetApp();
    this._openAddtodoForm();
  }

  _addTodoItems() {
    submitbtn.addEventListener("click", (e) => {
      e.preventDefault();
      const tododata = new Todo(Date(), todotitle.value, description.value);
      data.push(tododata);
      todotitle.value = "";
      description.value = "";
      localStorage.setItem("todos", JSON.stringify(data));
      this._renderView();
    });
  }

  _updateTimeZone() {
    function timeout() {
      setTimeout(dateUpdate, 1000);
    }
    function dateUpdate() {
      date.textContent = new Date();
      timeout();
    }
    dateUpdate();
  }

  _renderView() {
    const items = JSON.parse(localStorage.getItem("todos"));
    todo.insertAdjacentHTML(
      "afterend",
      `<h1>${items[items.length - 1].title}</h1>
    <p>Date : ${items[items.length - 1].date}</p>
    <p>${items[items.length - 1].des}</p>`
    );
  }

  _defaultView() {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items !== null) {
      items.forEach((el) => {
        todo.insertAdjacentHTML(
          "afterend",
          `<h1>${el.title}</h1>
            <p>Date : ${el.date}</p>
            <p>${el.des}</p>`
        );
      });
    } else {
      todo.insertAdjacentHTML(
        "afterbegin",
        `<h3>You Have Currently 0 Todos , Create One !</h3>`
      );
    }
  }
  _resetApp() {
    resetApp.addEventListener("click", () => {
      localStorage.clear();
      alert("Successfully Reset");
      location.reload();
    });
  }

  _openAddtodoForm() {
    addNewTodo.addEventListener("click", () => {
      addTodoForm.classList.toggle("hidden");
    });
  }
}

new Todo();
