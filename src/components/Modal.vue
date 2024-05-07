<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps({
    modelVisible: Boolean
})

const openModal=()=>{ 
    modelVisible.value = true;
}
const closeModal = () => {
    console.info("close modal");

    modelVisible.value = false;
}
</script>

<template>
    <div>
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
    </div>
</template>

<style scoped>
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
</style>
