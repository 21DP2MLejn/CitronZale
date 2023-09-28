<template>
    <div class="nav-bar">
        <div class="link-container">
            <router-link to="/prices" class="prices">Prices</router-link>
            <router-link to="/schedule" class="schedule">Schedule</router-link>
            <router-link to="/trainings" class="trainings">Trainings</router-link>
            <router-link to="/about-us" class="about-us">About Us</router-link>
            <router-link to="/clubs" class="clubs">Clubs</router-link>
        </div>
            <div class="image-container">
                <router-link to="/welcome"><a><img class="image-logo" src="../components/images/logo.png" alt="Logo"></a></router-link>
            </div>
            <div class="button-container">
                <router-link :to="{name: 'profile'}">
                    <button class="my-account">My Account</button>
                </router-link>

                <router-link :to="{name: 'signup'}">
                    <button class="join-now">Join Now!</button>
                </router-link>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>


    .nav-bar{
        background-color: var(--ShinyShamrock);
        height: 8vh;
        width: 100vw;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 2px solid var(--TeaGreen);

    }

    a{
        margin-left: 2rem;
        font-size: 18px;
        outline: none;
        text-decoration: none;
        color: var(--Black);
        transition: 0.35s;
    }

    a:hover{
        color: var(--White);
    }

    .link-container{
        position: relative;
        left: 5.5rem;
        top: 1.5rem;
    }
    button{
        position: absolute;
        width: 10rem;
        border-color:var(--TeaGreen) ;
        top: 1rem;
        margin-right: 1rem;
        font-family: var(--Font);
        font-weight: var(--font-light);
        background-color: var(--White);
        transition: all .5s ease;
        border: 3px solid var(--TeaGreen);
        text-align: center;
        line-height: 1;
        background-color : transparent;
        outline: none;
        border-radius: 4px;
        color: var(--Black);
    }

    button:hover{
        color: var(--White);
    }
    .my-account{
        right: 12rem ;
    }

    .join-now{
        right: 0rem;
    }

    .image-logo{
        position: relative;
        width: 4rem;
        height: 4rem;
        left: -3rem;
        top: -1.4rem;
    }

</style>