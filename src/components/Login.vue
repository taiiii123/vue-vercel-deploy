<template>
    <div class="login-container">
        <h2>ログイン</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">ユーザー名:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="form-group">
                <label for="password">パスワード:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">ログイン</button>
            <p v-if="error" class="error">{{ error }}</p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            username: '',
            password: '',
            error: null
        }
    },
    methods: {
        login() {
            // 簡単な例としてハードコードされた認証情報をチェック
            // 実際のアプリケーションではAPIを呼び出す必要があります
            if (this.username === 'user' && this.password === 'pass') {
                // ログイン成功時、認証状態を保存
                localStorage.setItem('isAuthenticated', 'true')
                // ログイン後のページにリダイレクト
                this.$router.push('/welcome')
            } else {
                this.error = 'ユーザー名またはパスワードが間違っています'
            }
        }
    }
}
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.error {
    color: red;
    margin-top: 10px;
}
</style>
