<template>
<main>
    <div class="login">
        <div class="header-container">\
            <h2>Log in / Sign up</h2>
        </div>
        <div class="input-container">
            <input type="text" placeholder="E-mail" class="input-email">
            <input type="password" placeholder="Password" class="input-password">
        </div>
        <div class="button-container">
            <router-link :to="{name: 'welcome'}">
                <button class="login-button">Log In</button>
            </router-link>
        </div>
        <div class="link-container">
            <router-link :to="{name: 'signup'}">
                <a>Dont have an account? Sign Up</a>
            </router-link>
        </div>
    </div>
    <div class="background">
        <div class="image-container">
            <img src="/public/Images/Login_background.jpg" alt="Login-Background">
        </div>
        <div class="polygon">
            <h1 class="main">CitronZale</h1>
            <h1 class="shadow">CitronZale</h1>
        </div>
    </div>
</main>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    h1{
        font-size: 110px;
        font-weight: var(--font-bold);
        transform: rotate(-89.5deg);
        position: absolute;
        top: 21rem;
        left: 43.8rem;
    }

    h2{
        font-weight: var(--font-bold);
        font-size: 32px;
        left: 7rem;
        position: absolute;
    }

    .shadow{
        opacity: 20%;
        top: 21rem;
        left: 43rem;
    }

    .image-container{
        right: 0;
        top: 0;
        position: absolute;
    }
    .login{
        height: 36rem;
        width: 30rem;
        background-color: var(--TeaGreen);
        position: absolute;
        top: 20%;
        right: 6%;
        border-radius: 25px;
        display: flex;
        z-index: 100000;
    }

    .polygon{
        background-color: var(--TeaGreen);
        height: 60rem;
        width: 65rem;
        transform: Skew(-10deg);
        position: absolute;
        left: -100px;
        top: 0px;
    }

    .login-button{
        position: absolute;
        top: 21.5rem;
        left: 11.5rem;
    }

    .input-container{
        position: absolute;
        top: 10rem;
        left: 4rem;
    }

    .link-container{
        position: absolute;
        top: 26rem;
        left: 9.3rem;
    }


</style>