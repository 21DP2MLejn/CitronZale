<template>
<main>
    <div class="login">
        <div class="header-container">
            <h2>Log in / Sign up</h2>
        </div>
        <div class="input-container">
            <input type="text" placeholder="User Name">
            <input type="text" placeholder="E-mail">
            <input type="password" placeholder="Password">
        </div>
        <div class="link-container">
            <router-link :to="{name: 'login'}">
                <a>Already have an account? Log In</a>
            </router-link>
        </div>
        <div class="button-container">         
            <router-link :to="{name: 'welcome'}">
                <button>Sign Up</button>
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
            <div class="start-your-journey-container">
                <h1 class="join-now">Start Your Journey NOW!</h1>
                <h1 class="join-now-2">Start Your Journey NOW!</h1>
                <div class="block-container">
                    <div class="block left"></div>
                    <div class="block middle"></div>
                    <div class="block right"></div>
                </div>
            </div>    
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
        position: absolute;

    }

    h2{
        font-weight: var(--font-bold);
        font-size: 32px;
        left: 7rem;
        position: absolute;
    }

    .join-now{
        font-size: 64px;
        width: 500px;
        left: 8rem;
        top: 10rem;
    }
    .join-now-2{
        font-size: 64px;
        width: 500px;
        left: 7.6rem;
        top: 10rem;
        opacity: 20%;
    }
    .main{
        top: 21rem;
        left: 43.8rem;
        transform: rotate(-89.5deg);
    }
    .shadow{
        opacity: 20%;
        top: 21rem;
        left: 43rem;
        transform: rotate(-89.5deg);
    }

    .input-container{
        position: absolute;
        top: 10rem;
        left: 4rem;
    }
    .button-container{
        position: absolute;
        top: 24.5rem;
        left: 11.5rem;
    }

    .link-container{
        position: absolute;
        top: 29rem;
        left: 9.3rem;
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
        border: 2px solid var(--ShinyShamrock);
    }

    .polygon{
        background-color: var(--TeaGreen);
        height: 60rem;
        width: 65rem;
        transform: Skew(-10deg);
        position: absolute;
        left: -100px;
        top: 0px;
        border: 2px solid var(--ShinyShamrock);
       }

       .block{
        width: 5rem;
        height: 11rem;
        position: absolute;
        top: 30rem;
        left: 15rem;
        background-color: var(--White);
        display: inline-block;
        margin: 10px;
        transform: Skew(-10deg);
        transition: 0.1s;
    }

    .middle{
        left: 22rem;
    }

    .right{
        left: 29rem;
    }

    .block:hover{
        transform: scale(1.15) skew(-10deg);
    }


</style>