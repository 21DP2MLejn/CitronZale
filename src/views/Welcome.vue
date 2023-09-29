<template>
<main>
    <Header/>
    <div class="container"></div>

        <div class="button-container">
            <button></button>
        </div>

</main>
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
    overflow-x:hidden;
 }
    .Box{
        width: 16vw;
        height: 16vh;
        background-color: black;
    }

    .container{
        width: 100vw;
        height: 110vh;
        background-color: var(--TeaGreen);
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        margin: 0;
        z-index: -1;
    }

    .splide__slide img {
        width: 100%;
        height: auto;
    }

</style>