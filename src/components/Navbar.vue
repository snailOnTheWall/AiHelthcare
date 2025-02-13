<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AuthModal from './AuthModal.vue'

const isAuthModalOpen = ref(false)

const openAuthModal = () => {
  isAuthModalOpen.value = true
}

const closeAuthModal = () => {
  isAuthModalOpen.value = false
}
</script>

<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <RouterLink to="/" class="flex items-center">
            <span class="text-2xl font-bold text-indigo-600">HealthCare</span>
          </RouterLink>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <RouterLink
              to="/about"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </RouterLink>
            <RouterLink
              to="/services"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Services
            </RouterLink>
            <RouterLink
              to="/emergency"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-red-600 hover:text-red-700"
            >
              Emergency
            </RouterLink>
          </div>
        </div>
        <div class="flex items-center">
          <button
            @click="openAuthModal"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </nav>

  <AuthModal 
    :is-open="isAuthModalOpen"
    @close="closeAuthModal"
  />
</template>