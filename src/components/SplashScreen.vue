<template>
    <div style="padding-top: 20%;">
        <div class="typewriter">
            <h1><span>&lt;</span>Shubham Sharma<span>/&gt;</span></h1>
        </div>
    </div>
    
</template>
<script>
    export default {
        name: "SplashScreen",
        computed: {
            deviceHeight(){
                return this.$vuetify.breakpoint.height;
            },
            deviceWidth(){
                return this.$vuetify.breakpoint.width;
            },
        },
    }
</script>
<style>
    .typewriter {
        display: flex;
    }
    
    .typewriter h1 {
        height: 50%;
        font-family: Agustina, 'Babylonica', cursive;
        font-size: 35px;
        color: rgb(0, 0, 0);
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid rgb(0, 195, 255); /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            typing 3.5s steps(23, end),
            blink-caret .5s step-end;
    }

        /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 23% }
    }

        /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: rgb(0, 195, 255) }
    }
</style>