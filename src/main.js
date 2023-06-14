import { createApp } from "vue";
import App from "./App.vue";
import box from "./box.vue";
import buttonOne from "./buttonOne.vue";
createApp(App).mount("#app");
createApp(box).mount("#box");
createApp(buttonOne).mount("#buttonone");

new Vue({
  el: "#app",
  //   render: (element) => element(App), 
  components: { box, buttonOne,  }, //сами модули
});

// new Vue({
//   el: "#app",
//   components: {
//     App,
//   },
//   render: (h) => h(App),
// });
