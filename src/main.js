import { createApp } from "vue";
import App from "./App.vue";
import box from "./box.vue";
import buttonOne from "./buttonOne.vue";
import buttonTwo from "./buttonTwo.vue";
import buttonThree from "./buttonThree.vue";
createApp(App).mount("#app");
createApp(box).mount("#box");
createApp(buttonOne).mount("#buttonone");
createApp(buttonTwo).mount("#buttontwo");
createApp(buttonThree).mount("#buttonthree");

new Vue({
  el: "#app",
  //   render: (element) => element(App), //подключение модуля !gf
  components: { box, buttonOne, buttonTwo, buttonThree }, //сами модули
});

// new Vue({
//   el: "#app",
//   components: {
//     App,
//   },
//   render: (h) => h(App),
// });
