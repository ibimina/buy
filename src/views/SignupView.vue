<template>
    <main>
    <h1>Create an account</h1>
        <p>Sign up now to get started with an account</p>
        <form>
            <label>
                <span class="label">Username</span>
                <input type="text" name="username" class="input" required>
            </label>
            <label>
                <span class="label">Email</span>
                <input type="email" name="email"  class="input" required>
            </label>
            <label>
                <span class="label">Password</span>
                <input type="password" name="password"  class="input" required>
            </label>

            <input type="submit" value="Get started" class="submit">
        </form>
    </main> 
</template>
<style scoped></style>