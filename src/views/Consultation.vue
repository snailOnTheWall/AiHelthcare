<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Physician Consultation</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Upcoming Appointments -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <p class="text-gray-600">No upcoming appointments scheduled.</p>
          <button class="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Schedule New Appointment
          </button>
        </div>
      </div>
      
      <!-- Find Physicians -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-4">Find Physicians</h2>
          <div class="mb-4">
            <input
              type="text"
              placeholder="Search by specialty or location"
              class="w-full px-4 py-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
            >
          </div>
          <button class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>