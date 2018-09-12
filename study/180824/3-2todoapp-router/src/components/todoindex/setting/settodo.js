var setTodoItems = function () {
  delete localStorage["loglevel:webpack-dev-server"];
  var len = localStorage.length;
  if (this.todoItems) {
    for (var i = 0; i < len; i++) {
      var value = localStorage[localStorage.key(i)];
      value = JSON.parse(value)
      this.todoItems.push({
        k: localStorage.key(i),
        val: value
      });
    }
  } else {
    alert('this.todoItems가 없습니다')
  }
}

var addTodo = function (val) {
  if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
  var dateNow = Date.now().toString();
  this.todoItems.push({
    k: dateNow,
    val: val
  });
  val = JSON.stringify(val);
  localStorage.setItem(dateNow, val);
}

var removeTodo = function (item) {
  
  var keyVal = item.k;
  var todoItems = this.todoItems;
  todoItems.forEach(function (item, index) {
    if (keyVal === item.k) {
      todoItems.splice(index, 1);
    }
  });
  localStorage.removeItem(keyVal);
  
  if(this.todoCount==="All"){
    this.listDetailTodo="All";
  }
  this.listDetailTodo = parseInt(this.todoCount)
  
}

var clearAll = function () {
  this.todoItems = [];
  localStorage.clear();
  this.viewtodoItems = [];
}

export {
  setTodoItems,
  addTodo,
  removeTodo,
  clearAll
}
