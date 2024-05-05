<script setup >
import { ref } from 'vue'

const color = ref({ r: 0, g: 0, b: 0 });
const hex=ref('#000000');


const handleGenerate = ()=>{ 
    for (let key in color.value) {
        color.value[key] = Math.floor(Math.random() * 255);
    }

    hex.value = `#${color.value.r.toString(16)}${color.value.g.toString(16)}${color.value.b.toString(16)}`;

    window.document.body.style.backgroundColor = hex.value;
}

</script>

<template>
    <div class="container">
        <div class="wrapper">
            <div class="header">
                <h2 class="text-center mb-3">Random Hex Color Gen</h2>
            </div>
            <div class="content">
                <div class="hex-color text-center" :style="{color:hex}">{{ hex }}</div>
                <div class="btn-group">
                    <button v-on:click.prevent="handleGenerate" >Generate Color</button>
                </div>
            </div>  
        </div>
    </div>
</template>

<style scoped>
.container{
    width: 800px;
    height:100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper{
        width :400px;
        /* height:250px; */
        margin: 0 auto;
        padding:2rem;

        border:1px solid #ccc;
        border-radius:5px;
        background-color: rgba(15, 15, 109, 0.884);
        color:white;

        .content{
            .hex-color{
                font-size:5rem;
                margin-bottom:.5rem;
                border-bottom:1px solid #ccc;
            }

            .btn-group{
                display: flex;
                justify-content: center;

                button{
                    padding:1rem;
                    margin-top:1rem;
                }
            }
        }
    }
}
</style>
