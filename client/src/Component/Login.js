import React from 'react'

export default function Login() {
    return (
        <div>
            <section class="login-dark">
    <form method="post">
        <h2 class="visually-hidden">Login Form</h2>
        <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
        <div class="mb-3"><input type="email" class="form-control" name="email" placeholder="Email" /></div>
        <div class="mb-3"><input type="password" class="form-control" name="password" placeholder="Password" /></div>
        <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Log In</button></div><a class="forgot" href="#">Forgot your email or password?</a>
    </form>
</section>
        </div>
    )
}
