<script>
import Swiper, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<template>
  <div ref="swiper" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="./image/image 2.png" alt="" /></div>
      <div class="swiper-slide"><img src="./image/image 3.png" alt="" /></div>
      <div class="swiper-slide"><img src="./image/image 4.png" alt="" /></div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<style scoped>
.swiper {
  position: relative;
  top: 2350px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
