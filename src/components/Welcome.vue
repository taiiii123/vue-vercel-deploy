<template>
    <div class="welcome-container">
        <h1>Hello World!</h1>
        <p>ログインに成功しました。</p>
        <button @click="logout">ログアウト</button>
    </div>
</template>

<script>
export default {
    name: 'WelcomeComponent',
    methods: {
        logout() {
            // ログアウト処理
            localStorage.removeItem('isAuthenticated')
            // ログインページにリダイレクト
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.welcome-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 15px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #d32f2f;
}
</style>
