<script setup>
import { ref } from 'vue'

const recentActivities = ref([
  { type: 'scan', title: 'MRI Results Available', date: '2024-03-15' },
  { type: 'appointment', title: 'Consultation with Dr. Smith', date: '2024-03-20' },
  { type: 'report', title: 'AI Analysis Complete', date: '2024-03-14' }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
    
    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
        <div class="space-y-4">
          <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Upload New Scan
          </button>
          <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Schedule Consultation
          </button>
          <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            View AI Reports
          </button>
        </div>
      </div>
      
      <!-- Recent Activities -->
      <div class="bg-white p-6 rounded-lg shadow-md md:col-span-2">
        <h2 class="text-xl font-semibold mb-4">Recent Activities</h2>
        <div class="space-y-4">
          <div v-for="activity in recentActivities" :key="activity.title" 
               class="flex items-center justify-between p-4 bg-gray-50 rounded">
            <div>
              <h3 class="font-medium">{{ activity.title }}</h3>
              <p class="text-sm text-gray-500">{{ activity.date }}</p>
            </div>
            <button class="text-indigo-600 hover:text-indigo-800">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>