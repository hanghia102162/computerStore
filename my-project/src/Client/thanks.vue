<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100 p-5">
    <div
      class="bg-white shadow-lg rounded-xl p-10 max-w-2xl w-full text-center"
    >
      <!-- Icon -->
      <div
        class="w-24 h-24 mx-auto rounded-full bg-green-100 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 class="text-4xl font-bold mt-6 text-green-600">
        Thanh toán thành công!
      </h1>

      <p class="text-gray-500 mt-3">Cảm ơn bạn đã mua sắm tại ASUS Vietnam.</p>

      <div class="border rounded-lg p-5 mt-8 text-left">
        <div class="flex justify-between mb-3">
          <span>Mã đơn hàng:</span>
          <span class="font-semibold"> #ORD-20260530001 </span>
        </div>

        <div class="flex justify-between mb-3">
          <span>Ngày đặt:</span>
          <span>{{ currentDate }}</span>
        </div>

        <div class="flex justify-between mb-3">
          <span>Phương thức thanh toán:</span>
          <span>Thanh toán Online</span>
        </div>

        <div class="flex justify-between">
          <span>Tổng thanh toán:</span>
          <span class="font-bold text-red-500">
            {{ formatCurrency(totalPrice) }}
          </span>
        </div>
      </div>

      <div class="mt-8 flex flex-col md:flex-row gap-3">
        <button
          @click="goHome"
          class="flex-1 bg-black text-white py-3 rounded-lg"
        >
          Tiếp tục mua sắm
        </button>

        <button @click="goOrders" class="flex-1 border py-3 rounded-lg">
          Xem đơn hàng
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const totalPrice = 47980000;

const currentDate = computed(() => {
  return new Date().toLocaleString("vi-VN");
});

const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

const goHome = () => {
  router.push("/");
};

const goOrders = () => {
  router.push("/orders");
};
</script>
