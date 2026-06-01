<template>
  <div class="mt-10 px-5 md:px-9 lg:px-20 flex flex-col gap-5">
    <div class="flex justify-between item-center">
      <h2 class="font-bold text-2xl">Sản phẩm</h2>
    </div>
    <ProductFilter />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-3 gap-4">
      <router-link
        to="/productDetails"
        class="flex flex-col justify-center p-3 bg-white shadow-md rounded-[15px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden"
        v-for="(item, index) in products"
        :key="index"
      >
        <!-- Image -->
        <div class="overflow-hidden rounded-xl">
          <img
            src="/img/Lenovo_1024x683.jpg"
            alt=""
            class="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <!-- Content -->
        <div class="mt-3 flex flex-col gap-3">
          <h2
            class="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition"
          >
            {{ item.title }}
          </h2>

          <div class="flex justify-between text-sm">
            <p class="text-gray-500">Giá gốc:</p>
            <p class="font-medium text-red-500">{{ item.Price }}</p>
          </div>

          <div class="flex justify-between text-sm">
            <p class="text-gray-500">Giảm giá:</p>
            <p class="font-medium text-green-500">{{ item.discount }}</p>
          </div>

          <div class="flex justify-between text-sm">
            <p class="text-gray-500">Hãng:</p>
            <p>{{ item.company }}</p>
          </div>

          <div class="flex justify-between text-sm">
            <p class="text-gray-500">Danh mục:</p>
            <p>{{ item.Category }}</p>
          </div>

          <!-- Button -->
          <button
            class="w-full bg-black text-white py-3 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            Xem qua
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductFilter from "../components/ProductFilter.vue";
const products = ref([
  {
    Image: "/img/Lenovo_1024x683.jpg",
    title: "Lenovo_1024x683",
    Price: "1.999.282 đ",
    discount: "không",
    company: "apple",
    Category: "linh kiện",
  },
  {
    Image: "/img/Lenovo_1024x683.jpg",
    title: "Lenovo_1024x683",
    Price: "1.999.282 đ",
    discount: "không",
    company: "apple",
    Category: "linh kiện",
  },
  {
    Image: "/img/Lenovo_1024x683.jpg",
    title: "Lenovo_1024x683",
    Price: "1.999.282 đ",
    discount: "không",
    company: "apple",
    Category: "linh kiện",
  },
]);
</script>
