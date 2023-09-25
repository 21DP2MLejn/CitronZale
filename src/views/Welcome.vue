<template>
<main>
    <div class="container">
        
    </div>
    <div class="button-container">
        <router-link :to="{name: 'login'}">
                <button>Log In</button>
            </router-link>
            <router-link :to="{name: 'signup'}">
                <button>Sign Up</button>
            </router-link>
            
    </div>

</main>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .Box{
        width: 16vw;
        height: 16vh;
        background-color: black;
    }

</style>