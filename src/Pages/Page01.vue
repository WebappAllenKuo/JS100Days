<script setup>
/**
 * counter 最小值是 0
 */
import { ref } from 'vue'

const counter = ref(0)

const changeCounter = (value) => {
    counter.value += value

    counter.value = counter.value < 0 ? 0 : counter.value;
}

</script>

<template>
    <h2>Day01<small>Counter App</small></h2>
    <div class="container">
        <div class="wrapper">
            <div class="header text-center p-3">
                <h2>Counter App</h2>
            </div>
            <div class="content">
                <span class="counter">{{ counter }}</span>
                <div class="btn-group">
                    <button id="btnSubtract" v-on:click.prevent="changeCounter(-1)">Subtract</button>
                    <button id="btnReset" v-on:click.prevent="counter = 0">Reset</button>
                    <button id="btnAdd" v-on:click.prevent="changeCounter(1)">Add</button>
                </div>
                    

            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.wrapper{
    width:400px;
    /* height:350px; */
    margin:0 auto;
    padding:1.5rem;

    border:1px solid #ccc;
    border-radius:5px;
    background-color: rgba(15, 15, 109, 0.884);
    color:white;

    .content{
        display: flex;
        flex-direction: column;

        .counter{
            font-size: 4rem;
            text-align: center;
            margin-bottom: 2rem;
            border-bottom: 1px solid #ccc;
        }

        .btn-group{
            display: flex;
            justify-content: center;
            /* margin-top: 2rem; */

            button{
                width:9rem;
                font-size: 1.2rem;
                margin-right:1rem;
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 5px;
                background-color: #333;
                color: white;
                cursor: pointer;
            }

            #btnSubtract{
                background-color: #f00;
                color:white;
            }
            #btnReset{
                background-color: white;
                color:black;
            }
            #btnAdd{
                background-color: green;
                color:white;
            }
        }   
    }

}
</style>
