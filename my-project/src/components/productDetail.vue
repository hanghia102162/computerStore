<template>
  <div class="w-full min-h-screen flex flex-col gap-10 md:p-10 lg:p-20">
    <h2 class="md:block hidden">Linh kiện / appple / cart</h2>
    <div class="md:border p-5 grid md:grid-cols-2 rounded-[15px]">
      <div class="w-full flex justify-center items-center relative">
        <div class="w-[80%]">
          <img :src="productDetail[0].img" alt="" />
        </div>
        <img
          :src="productDetail[0].img"
          alt=""
          class="absolute left-0 bottom-0 w-[20%] border"
        />
      </div>
      <!-- =========================== -->
      <div class="flex flex-col justify-center item-center gap-3">
        <h2 class="font-bold text-3xl">{{ productDetail[0].name }}</h2>
        <h3 class="font-bold text-2xl">{{ productDetail[0].price }}</h3>
        <div class="flex flex-col gap-3">
          <p class="font-medium text-xl">Loại</p>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="(category, index) in productDetail[0].categorys"
              :key="index"
              class="border p-3 rounded-[15px] font-medium focus:bg-black focus:text-white"
            >
              {{ category }}
            </button>
          </div>
        </div>
        <div class="flex gap-3 items-center">
          <button
            class="border p-2 rounded-[15px] hover:bg-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
              />
            </svg>
          </button>
          <p>1</p>

          <button
            class="border p-2 rounded-[15px] hover:bg-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
              />
            </svg>
          </button>
        </div>
        <div class="flex gap-3">
          <button
            class="p-3 border rounded-[15px] bg-black text-white cursor-pointer"
          >
            Thêm vào giỏ hàng
          </button>
          <button class="p-2 border rounded-[15px] cursor-pointer">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
    <div class="flex gap-5 border-b p-5">
      <router-link
        to="/productDetails"
        class="font-medium"
        active-class="text-blue-500"
      >
        Thông tin chung
      </router-link>

      <router-link
        to="/productDetails/specification"
        class="font-medium"
        active-class="text-blue-500"
      >
        Chi tiết sản phẩm
      </router-link>
    </div>

    <div class="mt-5">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const productDetail = ref([
  {
    id: 1,
    img: "/img/vn-11134207-7ra0g-m8a91axaf1imf5-removebg-preview.png",
    name: "Card màn hình RTX 4060",
    price: "8.990.000 đ",
    categorys: [
      "Gaming",
      "VGA",
      "NVIDIA",
      "RTX 4000 Series",
      "GDDR6",
      "CPU",
      "Intel",
      "14th Gen",
      "Desktop",
      "Unlocked",
    ],
  },
  {
    id: 2,
    img: "/img/vn-11134207-7ra0g-m8a91axaf1imf5-removebg-preview.png",
    name: "CPU Intel Core i5-14600K",
    price: "7.590.000 đ",
    categorys: ["CPU", "Intel", "14th Gen", "Desktop", "Unlocked"],
  },
  {
    id: 3,
    img: "/img/vn-11134207-7ra0g-m8a91axaf1imf5-removebg-preview.png",
    name: "RAM Kingston Fury Beast 16GB",
    price: "1.290.000 đ",
    categorys: ["RAM", "DDR5", "Kingston", "Gaming", "Desktop"],
  },
  {
    id: 4,
    img: "/img/vn-11134207-7ra0g-m8a91axaf1imf5-removebg-preview.png",
    name: "SSD Samsung 980 Pro 1TB",
    price: "2.490.000 đ",
    categorys: ["SSD", "NVMe", "PCIe 4.0", "Samsung", "Storage"],
  },
  {
    id: 5,
    img: "/img/vn-11134207-7ra0g-m8a91axaf1imf5-removebg-preview.png",
    name: "Mainboard ASUS ROG B760",
    price: "4.290.000 đ",
    categorys: ["Mainboard", "ASUS", "ROG", "Intel", "Gaming"],
  },
  {
    id: 6,
    img: "/img/vn-11134207-7ra0g-m8a91axaf1imf5-removebg-preview.png",
    name: "Nguồn Corsair RM750e",
    price: "2.790.000 đ",
    categorys: ["PSU", "Corsair", "750W", "80 Plus Gold", "Modular"],
  },
  {
    id: 7,
    img: "/img/vn-11134207-7ra0g-m8a91axaf1imf5-removebg-preview.png",
    name: "Tản nhiệt DeepCool AK620",
    price: "1.490.000 đ",
    categorys: ["Cooling", "Air Cooler", "DeepCool", "CPU Cooler", "Gaming"],
  },
  {
    id: 8,
    name: "Màn hình ASUS TUF VG249Q3A",
    price: "3.990.000 đ",
    categorys: ["Monitor", "ASUS", "Full HD", "180Hz", "IPS"],
  },
  {
    id: 9,
    name: "Bàn phím cơ Akko 5075B Plus",
    price: "1.890.000 đ",
    categorys: ["Keyboard", "Mechanical", "Wireless", "Akko", "RGB"],
  },
  {
    id: 10,
    name: "Chuột Logitech G Pro X Superlight",
    price: "2.790.000 đ",
    categorys: ["Mouse", "Gaming", "Wireless", "Logitech", "Lightweight"],
  },
]);
</script>
