<template>
  <div>
      <nav-bar/>

      <h1 class="compl">Completed Tasks</h1>
      
      <!-- <span>Add Todo:</span><input v-model="newTodo" type="text" placeholder="Type a todo"/><button @click="addTodo">Add</button> -->
      <ul v-if="todos !== false">
        <div v-for="todo in todos" :key="todo.id">
          <li class="donelist" v-if="todo.finished == true">
          <router-link class="items" :to="'/todo/' + todo.id">{{ todo.todo }}</router-link>
          <!-- <input type="button" value="done" @click="doneTodo(todo.id)"/> -->
          <!-- <p>{{todo.finished}}</p> -->
          </li>
        </div>
      </ul>
      <div v-else>
        <p>Loading...</p>
      </div>
  </div>
</template>

<script>
import { db } from "@/firebaseConfig";
import NavBar from "@/components/NavBar.vue";
export default {
    name: 'DoneView',
    components: { NavBar },
    data: function() {
      return {
        todos: false,
        newTodo: "",
        done: false
      }
    },
    firestore: {
      todos: db.collection('todos').orderBy('timecreated', 'desc')
    },
    methods: {
      addTodo: function() {
        let newTodo = {
          todo: this.newTodo,
          description: "",
          finished: false,
          timecreated: Date.now()
        };
        this.newTodo = "";
        db.collection("todos").add(newTodo);
      },
    //   doneTodo: function(id) {
    //     db.collection("todos").doc(id).update({
    //       finished: true
    //     });
    //   }

    }
}
</script>

<style>
.donelist{
    text-decoration: line-through;
    text-decoration-thickness: 0.2px;
    text-decoration-color: rgb(214, 210, 212);
}
.items{
    text-decoration: none;
    color: rgba(17, 238, 91, 0.877);
    font-size: 1.5em;
}
.items:hover{
    color: rgb(238, 186, 17);
}
.compl{
    margin-bottom: 50px;
}
</style>