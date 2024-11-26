<template>
  <div style="padding-top: 25%" :class="{ fadeout: !isLoading }">
    <div class="typewriter">
      <h1><span>&lt;</span>Shubham Sharma<span>/&gt;</span></h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SplashScreen',
  props: ['isLoading'],
  computed: {
    deviceHeight() {
      return this.$vuetify.breakpoint.height
    },
    deviceWidth() {
      return this.$vuetify.breakpoint.width
    },
  },
}
</script>
<style>
.typewriter {
  display: flex;
}

.typewriter h1 {
  font-family: Agustina, 'Babylonica', cursive;
  font-size: 35px;
  padding: 10px;
  color: rgb(0, 0, 0);
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid rgb(0, 195, 255); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation:
    typing 1.5s steps(18, end),
    blink-caret 0.5s step-end;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 30%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(0, 195, 255);
  }
}

.fadeout {
  animation: fadeout 5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: none;
  }
}
</style>
