<template>
    <Header/>
    <div class="container">
        <div class="price-card-container">
            <div class="price card-1">
                <button>Buy Now</button>
            </div>
            <div class="price card-2">
                <button>Buy Now</button>
            </div>
            <div class="price card-3">
                <button>Buy Now</button>
            </div>
            <div class="image-container">
                <img class="background image-1" src="../components/images/Gymimage1.jpg" alt="1">
                <img class="background image-2" src="../components/images/Gymimage2.jpg" alt="2">
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default{
    components:{
        Header,
    }
}

</script>
<style scoped>
    html{
        overflow-x:hidden ;
    }

    button{
        position: absolute;
        z-index: 2;
    }

    .price{
        width: 22rem;
        height: 38rem;
        background-color: var(--PastelGreen);
        border-radius: 25px;
        display: inline-block;
        position: relative;
        top: 10rem;
        left: 24rem;
    }
    .background{
        width: 49.1vw;
        height: 90vh;
        position: relative;
        z-index: -1;
        visibility: hidden;

    }
</style>