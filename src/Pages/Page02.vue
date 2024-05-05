<script setup>
import { ref } from 'vue'

const counter = ref(0)

const handleGenerate = () => {
    counter.value = Math.floor(Math.random() * 100)
}
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <h2 class="text-center">Random Number Generator</h2>
            <div class="counterWrapper text-center">
                <span>{{ counter }}</span>
            </div>
            <div class="btn-group">
                <button v-on:click.prevent="handleGenerate">Generate</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    width : 800px;
    box-sizing: border-box;
    
    height: 100vh;
    margin:0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .wrapper{
        width:400px;
        
        margin:0 auto;

        border:1px solid #ccc;
        border-radius:5px;
        background-color: rgba(15, 15, 109, 0.884);
        color:white;

        display:flex;
        flex-direction: column;
        justify-content: center;

        h2{
            margin:1.5rem;
        }

        .counterWrapper{
            margin:1rem;
            font-size: 4rem;
            border-bottom: 1px solid #ccc;
        }

        .btn-group{
            display:flex;
            justify-content: center;
            margin: .5rem auto 2.5rem auto;

            font-size:1.4rem;
        }
    }
}
</style>
