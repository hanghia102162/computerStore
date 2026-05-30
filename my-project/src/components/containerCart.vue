<template>
  <div class="max-w-7xl mx-auto p-5">
    <h2 class="text-3xl font-bold mb-6">Giỏ hàng</h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Danh sách sản phẩm -->
      <div class="lg:col-span-2 flex flex-col gap-4">
        <!-- Banner -->
        <div
          class="border border-green-500 bg-green-50 rounded-lg p-4 text-green-700"
        >
          <h2 class="font-medium">
            🎉 Bạn đã được giao hàng miễn phí, bắt đầu thanh toán ngay!
          </h2>
        </div>

        <!-- Item -->
        <div
          class="border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center"
        >
          <img
            src="https://via.placeholder.com/150"
            alt=""
            class="w-32 h-32 object-cover rounded-lg"
          />

          <div class="flex-1">
            <h3 class="text-xl font-semibold">ASUS ROG Strix G16</h3>

            <p class="text-gray-500 mt-2">Laptop Gaming Intel Core i7</p>

            <p class="text-red-500 font-bold text-xl mt-2">25.990.000₫</p>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <div class="flex items-center border rounded-lg overflow-hidden">
              <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200">-</button>

              <span class="px-5">1</span>

              <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200">+</button>
            </div>

            <button class="text-red-500 hover:text-red-700 font-medium">
              Xóa
            </button>
          </div>
        </div>

        <!-- Item -->
        <div
          class="border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center"
        >
          <img
            src="https://via.placeholder.com/150"
            alt=""
            class="w-32 h-32 object-cover rounded-lg"
          />

          <div class="flex-1">
            <h3 class="text-xl font-semibold">ASUS TUF Gaming F15</h3>

            <p class="text-gray-500 mt-2">Laptop Gaming RTX 4060</p>

            <p class="text-red-500 font-bold text-xl mt-2">21.990.000₫</p>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <div class="flex items-center border rounded-lg overflow-hidden">
              <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200">-</button>

              <span class="px-5">1</span>

              <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200">+</button>
            </div>

            <button class="text-red-500 hover:text-red-700 font-medium">
              Xóa
            </button>
          </div>
        </div>

        <!-- Xóa tất cả -->
        <div class="flex justify-end">
          <button
            class="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Xóa tất cả
          </button>
        </div>
      </div>

      <!-- Thanh toán -->
      <div class="border rounded-lg p-5 h-fit sticky top-5">
        <h2 class="text-2xl font-bold mb-5">Thông tin đơn hàng</h2>

        <div class="flex justify-between mb-3">
          <span>Tạm tính</span>
          <span class="font-semibold"> 47.980.000₫ </span>
        </div>

        <div class="flex justify-between mb-3">
          <span>Phí vận chuyển</span>
          <span class="text-green-500"> Miễn phí </span>
        </div>

        <hr class="my-4" />

        <div class="flex justify-between text-xl font-bold">
          <span>Tổng cộng</span>
          <span class="text-red-500"> 47.980.000₫ </span>
        </div>

        <button
          class="w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          @click="handlepay"
        >
          Thanh toán ngay
        </button>

        <button class="w-full mt-3 border py-3 rounded-lg hover:bg-gray-100">
          Tiếp tục mua sắm
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const handlepay = () => {
  router.push("/thanks");
};
</script>
