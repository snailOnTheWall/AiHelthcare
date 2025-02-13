<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close'])

const isSignIn = ref(true)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const fullName = ref('')
const accountType = ref('standard')

const toggleMode = () => {
  isSignIn.value = !isSignIn.value
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
  fullName.value = ''
  accountType.value = 'standard'
}

const handleSubmit = () => {
  if (!isSignIn.value && password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  
  // TODO: Implement authentication logic
  console.log('Form submitted:', {
    email: email.value,
    password: password.value,
    ...(isSignIn.value ? {} : {
      fullName: fullName.value,
      accountType: accountType.value
    })
  })
}
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click="emit('close')">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="emit('close')">&times;</button>
      
      <h2>{{ isSignIn ? 'Sign In' : 'Create Account' }}</h2>
      
      <form @submit.prevent="handleSubmit" class="auth-form">
        <!-- Additional fields for account creation -->
        <template v-if="!isSignIn">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              v-model="fullName" 
              required
              placeholder="Enter your full name"
            >
          </div>
        </template>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required
            placeholder="Enter your email"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required
            placeholder="Enter your password"
            minlength="8"
          >
        </div>

        <!-- Confirm password field for account creation -->
        <template v-if="!isSignIn">
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="confirmPassword" 
              required
              placeholder="Confirm your password"
              minlength="8"
            >
          </div>

          <div class="form-group">
            <label>Account Type</label>
            <div class="account-types">
              <label class="account-type-option">
                <input 
                  type="radio" 
                  v-model="accountType" 
                  value="standard"
                  name="accountType"
                >
                <div class="account-type-content">
                  <h3>Standard</h3>
                  <p>Basic features and functionality</p>
                </div>
              </label>
              <label class="account-type-option">
                <input 
                  type="radio" 
                  v-model="accountType" 
                  value="premium"
                  name="accountType"
                >
                <div class="account-type-content">
                  <h3>Premium</h3>
                  <p>Advanced features and priority support</p>
                </div>
              </label>
            </div>
          </div>
        </template>
        
        <button type="submit" class="submit-button">
          {{ isSignIn ? 'Sign In' : 'Create Account' }}
        </button>
      </form>
      
      <p class="toggle-mode">
        {{ isSignIn ? "Don't have an account?" : "Already have an account?" }}
        <button class="toggle-button" @click="toggleMode">
          {{ isSignIn ? 'Create one' : 'Sign in' }}
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

h2 {
  margin-bottom: 1.5rem;
  color: #213547;
  text-align: center;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: #213547;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #646cff;
}

.account-types {
  display: grid;
  gap: 1rem;
  margin-top: 0.5rem;
}

.account-type-option {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.account-type-option:hover {
  border-color: #646cff;
}

.account-type-option input[type="radio"] {
  margin-top: 0.25rem;
}

.account-type-content {
  flex: 1;
}

.account-type-content h3 {
  margin: 0;
  font-size: 1rem;
  color: #213547;
}

.account-type-content p {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: #666;
}

.submit-button {
  background-color: #646cff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #535bf2;
}

.toggle-mode {
  margin-top: 1.5rem;
  text-align: center;
  color: #666;
}

.toggle-button {
  background: none;
  border: none;
  color: #646cff;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  margin-left: 0.5rem;
}

.toggle-button:hover {
  text-decoration: underline;
}

/* Style for radio buttons when selected */
.account-type-option input[type="radio"]:checked + .account-type-content {
  color: #646cff;
}

.account-type-option input[type="radio"]:checked + .account-type-content h3 {
  color: #646cff;
}

/* Add a subtle highlight for the selected account type */
.account-type-option input[type="radio"]:checked + .account-type-content {
  background-color: #f8f9ff;
}
</style>