<template>
  <div class="todolist">
    <nav-bar/>

    <!-- <b-container>
      <b-row><p class="name">Welcome, {{user.displayName}}.</p>></b-row>
    </b-container> -->
      <h1>Here are your tasks:</h1>
      <div class="addtask">
        
        <b-container class="addspace" >
          <b-row class="justify-content-md-center" >
            <!-- <b-col md="auto"><span> <h5>Add Task: </h5></span></b-col> -->
            <b-col cols="6"><b-form-input size="sm" v-model="newTodo" type="text" @keyup.enter="addTodo"/></b-col>
            <b-col md="auto"><b-button variant="outline-warning" size="sm" @click="addTodo" @keyup.enter="addTodo">Add</b-button></b-col>
          </b-row>
        </b-container>
      </div>

      <div class="todospace" md="auto" size="sm" v-if="todos !== false">
        <div v-for="todo in todos" :key="todo.id">
          <div v-if="todo.finished == false">
            <!-- <b-container> -->
            <b-row class="justify-content-md-center">
              <b-col cols="10"><p class="task2"><router-link class="task" :to="'/todo/' + todo.id">{{ todo.todo }} </router-link></p></b-col>
              <b-col><b-form-checkbox  size-="lg" @change="doneTodo(todo.id)" title="Click to complete task."></b-form-checkbox></b-col>
              <!-- <p>{{todo.finished}}</p> -->
            </b-row>
            <!-- </b-container> -->
          </div>
        </div>
      </div>

      <div v-else>
        <p>Loading...</p>
      </div>

  </div>
</template>

<script>
import { db } from "@/firebaseConfig";
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
    name: 'TodosView',
    data: function() {
      return {
        todos: false,
        newTodo: "",
        done: false,
        user: null
      }
    },
    // beforeCreate: function() {
    // auth.onAuthStateChanged(user => {
    //    console.log("user state:", user);
    //   // uncomment above to check out which user properties are available.
    //   if (user) {        
    //     this.user = user;
    //   } else {
    //     this.user = null;
    //   }
    // });
    // },
    firestore: {
      todos: db.collection('todos').orderBy('timecreated', 'desc')
    },
    methods: {
      addTodo: function() {
        let newTodo = {
          todo: this.newTodo,
          description: "Click to edit",
          finished: false,
          timecreated: Date.now()
        };
        this.newTodo = "";
        db.collection("todos").add(newTodo);
      },
      doneTodo: function(id) {
        db.collection("todos").doc(id).update({
          finished: true
        });
      }

    }
}
</script>

<style>
.todolist{
  text-align: center;
  /* outline: solid red;  */
}
.tododiv{
  /* border: solid black; */
  border-radius: 10px;
}
li {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inherit;
}

.addtask{
  margin-left: auto;
  margin-right: auto; 
  /* border: solid red; */
  /* padding: 20px; */
}
.addspace{
  padding-top: 20px;
  /* border: solid red; */
  /* padding: 20px; */
}

.name{
  font-size: 30px;
  margin: 30px;
  color:  white;
}
.todospace{
  margin: 20px;
  /* border: solid red; */
  background-color: rgb(52,79,161);
  border-radius: 15px;
  padding: 30px;
  margin-left: 90px;
  margin-right: 90px;
  margin-top: 30px;
  /* display: inline-block; */
  
}
.task{
  font-size: 20px;
  margin: 10px;
  text-decoration: none;
  color: rgba(17, 238, 91, 0.877);
  /* max-width: 20px; */
}
.task:hover{
  color: rgb(238, 186, 17);
}
.task2{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
h1{
  color: rgb(238, 186, 17);
  /* border: solid red; */
}
</style>