<template>
  <div class="slider-wrapper">
    <div id="app">
      <ul class="navigator">
        <li class="lightgrey" @click="prevSlide">&laquo;</li>
        <li
          class="lightgrey"
          v-for="(slider, index) in slides"
          :key="index"
          @click="changedSlide(index + 1)"
        >
          {{ index + 1 }}
        </li>
        <li class="lightgrey" @click="nextSlide">&raquo;</li>
      </ul>
      <div class="slider-container">
        <ul class="slider" :style="sliderStyle">
          <li class="blue slide" v-for="(slider, index) in slides" :key="index">
            {{ index + 1 }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  name: 'SilderView',
  setup() {
    const activeSlide = ref(1);
    const slides = ref(5);

    const changedSlide = (slider) => {
      activeSlide.value = slider;
    };

    const prevSlide = () => {
      if (activeSlide.value > 1) activeSlide.value--;
    };

    const nextSlide = () => {
      if (activeSlide.value < slides.value) activeSlide.value++;
    };

    const sliderStyle = computed(() => {
      const width = 0 - (activeSlide.value - 1) * 700;
      return {
        transform: 'translateX(' + width + 'px)'
      };
    });

    return {
      slides,
      activeSlide,
      changedSlide,
      prevSlide,
      nextSlide,
      sliderStyle
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slider-container {
  overflow: hidden;
  width: 700px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slider {
  width: 3500px;
  height: 200px;
  overflow: hidden;
  transition: all 0.32s ease;
}

.slide {
  float: left;
  width: 700px;
  height: 200px;
  font-size: 40px;
  color: #eee;
  padding-top: 70px;
}

// Common color background
.green {
  background: #1abc9c;
}
.blue {
  background: #3498db;
}
.grey {
  background: #34495e;
}
.red {
  background: #e74c3c;
}
.lightgrey {
  background: #95a5a6;
}

// Top Nagivator button
.navigator {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigator li {
  color: #ecf0f1;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  line-height: 42px;
  cursor: pointer;
  box-shadow: 00 3px 17px rgba(0, 0, 0, 0.3);
  transition: all 0.32s ease;
  position: relative;
  margin: 0px 5px;
  &:hover {
    transform: translateY(-2px);
  }
}
</style>
