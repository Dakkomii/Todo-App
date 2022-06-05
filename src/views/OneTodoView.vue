<template>
    <div>
    <nav-bar/>

    <div v-if="todo !== false && !deleting">
        <!-- <h1>Task</h1> -->
        <h1 :class="{ 'todotitle': todo.finished, 'todotitle2': !todo.finished }" title="Click to edit.">
            <editable-span :text="todo.todo" @edited="updateShort"/>
        </h1>
        <h3 class="notes">Notes:</h3>

        <!-- <div class=" d-flex align-items-center justify-content-center" style="bottom: 0; overflow-y: auto">
            <b-card class="noteDesc" style="max-width: 20rem;"  bg-variant="secondary"> -->
                <div class="descspace">
                <p class="desc"><editable-span :text="todo.description" @edited="updatedDescription"/></p>
                </div>
            <!-- </b-card>
        </div> -->
        <!-- <pre>{{todo}}</pre> -->
        <b-button class="but" variant="outline-warning" size="sm" @click="deleteTodo">Delete</b-button>
        <b-button class="but" variant="outline-warning" size="sm" @click="doneTodo(todo.id)">done</b-button>
    </div>
    <div v-else>
        Loading...
    </div>
    </div>
</template>

<script>
import { db } from '@/firebaseConfig'
import NavBar from '@/components/NavBar.vue'
import EditableSpan from '@/components/EditableSpan.vue'

export default {
    components: { NavBar, EditableSpan },
    props: ['id'],
    data: function() {
        return {
            todo: false,
            deleting: false
        }
    },
    firestore: function() {
        return {
            todo: db.collection('todos').doc(this.id)
        }
    },
    beforeUpdate: function() {
        // called whenever the data is being updated.
        // if data is being updated from "false" to "null" -- the document wasn't found.
        if (this.todo === null && !this.deleting) {
            this.$router.replace("/404")
        }else if (this.todo !== null && this.deleting) {
            this.$router.push("/todos")
        }
        
    },
    methods: {
        deleteTodo: function() {
            this.deleting = true
            this.$firestoreRefs.todo.delete().then(()=>{
                this.$router.push("/done")
            });
        },
        doneTodo: function(id) {
        db.collection("todos").doc(id).update({
          finished: true
        });
      },
      updateShort: function(newShort) {
            this.$firestoreRefs.todo.update({todo:newShort})
        },
        updatedDescription: function(newDescription) {
            this.$firestoreRefs.todo.update({description:newDescription})
        }
    }
}
</script>

<style>
.notes{
    color: rgba(236, 154, 243, 0.938);
    /* color: rgba(17, 238, 91, 0.877); */
    font-size: 1.6em;
    margin-bottom: 10px;
}
.desc{
    font-size: 1.4em;
    color: rgba(17, 238, 91, 0.877);
    /* white-space: pre-wrap; */
    /* overflow:scroll; */
    /* text-overflow: ellipsis; */
    word-wrap: break-word;
}
.todotitle{
    font-size: 4em;
    color: rgb(238, 186, 17);
    margin-bottom: 20px;
    word-wrap: break-word;
    padding: 10px;
    margin: 40px;
    text-decoration: line-through;
}
.todotitle2{
    font-size: 4em;
    color: rgb(238, 186, 17);
    margin-bottom: 20px;
    word-wrap: break-word;
    padding: 10px;
    margin: 40px;
}
.but{
    margin: 30px;
}
.descspace{
    border: solid rgba(77, 57, 85, 0.767);
    margin: 30px 80px;
    padding: 30px;
    background-color: rgba(39, 63, 107, 0.596);
}
</style>