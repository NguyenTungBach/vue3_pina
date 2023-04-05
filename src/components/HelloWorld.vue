<template>
  <div>
    <button @click="testKeyword">Testtt</button>
  </div>

  <table class="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for='data in variable.users' v-bind:key="data.id">
      <td style="width: 100px">{{ data.id }}</td>
      <td style="width: 100px">{{ data.name }}</td>
      <td style="width: 100px">{{ data.email }}</td>
      <td style="width: 100px">{{ data.phone }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import {useIndexStore,hello2} from "@/store";
import {userList} from "@/store/loadUser";
import {getUserList} from "@/store/callAPIUser";
import {onMounted, reactive} from "vue";

const variable = reactive({
  users: [],
}); // reactive có thể gọi trực tiếp

const testKeyword = async () => {
  console.log(useIndexStore().keyword);
  console.log("counter " + useIndexStore().counter);
  console.log("useIndexStore checkCount " + useIndexStore().checkCount);
  useIndexStore().increment(); // Gọi đến action trong store
  console.log("useIndexStore checkCount After " + useIndexStore().checkCount);
  useIndexStore().counter++ // Thay đổi trực tiếp dữ liệu trong store
  console.log("useIndexStore checkCount After again counter " + useIndexStore().checkCount);
  console.log("hello2 " + hello2().keyword2);
}

onMounted(async () => {
  await getUserList();
  variable.users = userList().users;
  console.log(variable);
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
