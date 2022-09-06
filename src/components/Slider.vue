<template>
  <div class="slider-wrapper">
    <div id="app">
      <!-- Slider navigator -->
      <ul class="navigator">
        <li class="lightgrey" @click="prevSlide">&laquo;</li>
        <li
          class="lightgrey"
          v-for="(slider, index) in maxSlides"
          :key="index"
          @click="changedSlide(index + 1)"
        >
          {{ index + 1 }}
        </li>
        <li class="lightgrey" @click="nextSlide">&raquo;</li>
      </ul>

      <!-- Slider container -->
      <div class="slider-container" :style="{ width: `${maxWidth}px` }">
        <ul class="slider" :style="sliderStyle">
          <li
            class="blue slide"
            :style="{ width: `${maxWidth}px` }"
            v-for="(slider, index) in maxSlides"
            :key="index"
          >
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
    const maxSlides = 5;
    const maxWidth = 700;

    const changedSlide = (slider) => {
      activeSlide.value = slider;
    };

    const prevSlide = () => {
      if (activeSlide.value > 1) activeSlide.value--;
    };

    const nextSlide = () => {
      if (activeSlide.value < maxSlides) activeSlide.value++;
    };

    const sliderStyle = computed(() => {
      const width = 0 - (activeSlide.value - 1) * maxWidth;
      return {
        transform: 'translateX(' + width + 'px)',
        width: `${maxWidth * maxSlides}px`
      };
    });

    return {
      maxWidth,
      maxSlides,
      activeSlide,
      sliderStyle,
      changedSlide,
      prevSlide,
      nextSlide
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slider-container {
  overflow: hidden;
  margin: 30px auto 0px;
}

.slider {
  overflow: hidden;
  transition: all 0.32s ease;
  display: flex;
  align-items: center;
}

.slide {
  height: 200px;
  font-size: 40px;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
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
