<script setup>
import { ref } from 'vue';

const modelVisible = ref(false);

const openModal=()=>{ 
    modelVisible.value = true;
}
const closeModal = () => {
    console.info("close modal");

    modelVisible.value = false;
}
</script>

<template>
    <div class="container">
        <h1><span>Let's</span> Create a Modal</h1>
        <div>Click Button Below</div>
        <div class="btn-group">
            <button v-on:click.prevent="openModal">TEST POPUP</button>
        </div>
    </div>
    <div class="mymodal" v-show="modelVisible">
        <div class="content">
            <div class="header">
                <h1>Hello World</h1>
            </div>
            <div>
                <img id=close src="../assets/cross.jpg" @click.prevent="closeModal" />
            </div>
            <div class="modal-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                 eos! Eos recusandae nemo illo ea atque quis cupiditate similique inventore, odio est quidem maxime labore,
                  
            </div>
        </div>
    </div>
</template>

<style >
body{
    background-color: rgba(39, 39, 134, 0.575);
}
.container{
    width:800px;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    color:white;

    h1>span{
        font-weight: 700;
        font-size:1.2em;
    }

    .btn-group{
        margin-top: 2rem;
        button{
            padding: 10px 20px;
            background-color: #f1f1f1;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    }
}

.mymodal{
    /* display: none; */
    
    position:absolute;
    top:0;
    left:0;

    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
    
    z-index: 1;
    ;
    
    .content{
        position: relative;
        top: 50%;
        left :50%;
        transform: translate(-50%, -50%);

        width:400px;
        /* height:200px; */

        border-radius: 5px;
        border: 1px solid #f1f1f1;
        background-color: white;

        padding:2rem;

        #close{
            position:absolute;
            top:1rem;
            right:1rem;
            width:3rem;

            cursor: pointer;
        }
    }
}
.hide{
    display: none;
}
   
</style>
