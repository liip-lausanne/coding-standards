<template>
  <div class="versus" :class="{ 'versus--correct': correct }">
    <div class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :fill="correct ? '#3f5e26' : '#c02e00'"
        width="16"
        height="16"
      >
        <path
          v-if="correct"
          d="M4,13.5a.7.7,0,0,0-.5.2L1.21,16a.67.67,0,0,0-.21.5.72.72,0,0,0,.2.5L7,22.79a.71.71,0,0,0,.5.21.67.67,0,0,0,.5-.21L22.79,8A.71.71,0,0,0,23,7.5a.67.67,0,0,0-.21-.5L20.5,4.71A.67.67,0,0,0,20,4.5a.7.7,0,0,0-.5.2L7.85,16.35a.47.47,0,0,1-.35.15.49.49,0,0,1-.36-.15L4.5,13.7a.7.7,0,0,0-.5-.2"
        />
        <path
          v-else
          d="M5,1.41a.51.51,0,0,0-.35.15L1.56,4.65a.5.5,0,0,0,0,.7l6.29,6.3a.48.48,0,0,1,0,.7l-6.29,6.3a.5.5,0,0,0,0,.7l3.09,3.09a.48.48,0,0,0,.7,0l6.3-6.29a.48.48,0,0,1,.7,0l6.3,6.29a.5.5,0,0,0,.35.14.48.48,0,0,0,.35-.14l3.09-3.09a.48.48,0,0,0,0-.7l-6.29-6.3a.48.48,0,0,1,0-.7l6.29-6.3a.48.48,0,0,0,0-.7L19.35,1.56a.48.48,0,0,0-.7,0l-6.3,6.29a.48.48,0,0,1-.7,0L5.35,1.56A.51.51,0,0,0,5,1.41Z"
        />
      </svg>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    correct: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.versus {
  display: flex;
  align-items: start;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.icon {
  flex-shrink: 0;
  margin-right: 1rem;
  padding: 0.5rem;

  border-radius: 50%;
  background-color: #ffdcd1;
}

.versus--correct .icon {
  background-color: #e4efdc;
}

.icon svg {
  display: block;
}

.content {
  margin-top: 0.2rem;
  line-height: 1.7;
}
</style>
