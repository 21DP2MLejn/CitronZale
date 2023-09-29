<template>
<main>
<div class="container">
    <div class="forgot-password-container">
        <div class="text-container">
            <h1>Forgot your password?</h1>
            <p>Enter the email linked with your account and we will send you a password reset to the provided email</p>
        </div>
        <div class="input-box-container">
            <input type="text" class="email-input" placeholder="example@mail.com">
        </div>
        <div class="button-container">
            <button class="subimt-request" type="submit">Submit Request</button>
            <router-link :to="{name: 'login'}">
                <button class="return">Return</button>
            </router-link>
        </div>
    </div>
</div>
</main>
</template>

<script>
</script>

<style scoped>

    button{
        position: relative;
        width: 11rem;
        height: 3rem;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 14rem;
    }
    .forgot-password-container{
        width: 56vw;
        height: 40vh;
        background-color: var(--TeaGreen);
        border: 2px solid var(--ShinyShamrock);
        border-radius: 25px;
    }

    .button-container{
        width: 56vw;
        height: 40vh;
    }
    .return{
        right: -42rem;
        bottom: -6.5rem;
    }

    .subimt-request{
        top: 1rem;
        left: 5.5rem;
    }
</style>