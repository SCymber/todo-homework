import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      todos:
      [
        { task: 'Washing up', priority: 'high' },
        { task: 'Laundry', priority: 'low' },
        { task: 'Walk the dog', priority: 'low' },
        { task: 'Homework', priority: 'low' }
      ],
      newTodo: "",
      priority: "high"
    },
    methods: {
      saveNewToDo: function() {
        if (this.newTodo !== "") {
          this.todos.push({
            task: this.newTodo,
            priority: this.priority
          });
          this.newTodo = "";
          this.priority = "high";
        }
      }
    }
  })
})
