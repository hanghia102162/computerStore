<template>
  <div class="sticky top-0 z-50">
    <div class="hidden md:flex w-full bg-black">
      <div
        class="w-full py-6 bg-black flex justify-between items-center px-10 lg:px-20"
      >
        <div class="flex gap-10 justify-center items-center">
          <a href="/" class="text-white text-4xl font-medium">LOGO</a>
          <div class="relative group inline-block">
            <h2 class="text-gray-300 font-medium hover:text-white">Danh mục</h2>
            <!-- =========model================ -->
            <div
              class="absolute hidden group-hover:flex left-0 w-[10px] h-[10px] z-100 bg-gray-900 rotate-45"
            ></div>
            <!-- mui ten  -->
            <div
              class="absolute right-0 top-full mt-1 hidden group-hover:flex shadow-lg rounded-md overflow-hidden z-50"
            >
              <div
                class="text-center bg-gray-900 text-white font-medium w-[150px] flex flex-col"
              >
                <router-link
                  class="p-2 hover:bg-gray-100 hover:text-black"
                  to="/product"
                >
                  Điện thoại
                </router-link>

                <router-link
                  class="p-2 hover:bg-gray-100 hover:text-black"
                  to="/product"
                >
                  Máy Tính
                </router-link>

                <router-link
                  class="p-2 hover:bg-gray-100 hover:text-black"
                  to="/product"
                >
                  Linh kiện
                </router-link>

                <router-link
                  class="p-2 hover:bg-gray-100 hover:text-black"
                  to="/product"
                >
                  Chơi game
                </router-link>
                <router-link
                  class="p-2 hover:bg-gray-100 hover:text-black"
                  to="/product"
                >
                  Học Tập
                </router-link>
                <router-link
                  class="p-2 hover:bg-gray-100 hover:text-black"
                  to="/product"
                >
                  Làm việc
                </router-link>
              </div>
            </div>
          </div>
          <div class="w-auto flex relative">
            <input
              type="text"
              class="border w-[250px] h-[35px] px-10 text-white rounded-[15px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 absolute text-white top-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <!-- ========== -->
        <div class="flex justify-center items-center gap-4 lg:gap-10">
          <router-link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-7 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
          <router-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-7 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
          <div class="relative group inline-block">
            <!-- Button -->
            <button
              class="flex bg-white cursor-pointer font-medium justify-center items-center rounded-[15px] p-2 lg:p-3 hover:bg-yellow-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span class="ml-2 md:hidden lg:flex">Tài Khoản</span>
            </button>

            <!-- Dropdown -->
            <div
              class="absolute right-0 top-full mt-2 w-[200px] hidden group-hover:flex flex-col bg-white shadow-lg rounded-md overflow-hidden z-50"
            >
              <router-link class="p-2 hover:bg-gray-100" to="">
                Thông tin tài khoản
              </router-link>

              <router-link class="p-2 hover:bg-gray-100" to="">
                Lịch sử hóa đơn
              </router-link>

              <router-link class="p-2 hover:bg-gray-100" to="">
                Giỏ hàng của tôi
              </router-link>

              <button class="p-2 text-red-500 hover:bg-gray-100 text-left">
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ======================mobile======================= -->
    <div class="block md:hidden relative">
      <div class="w-full bg-black flex justify-between items-center px-5">
        <h2 class="text-white font-medium text-2xl">ASUS</h2>
        <button @click="handelModel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-7 text-white"
            v-if="!openmodel"
          >
            <path
              fill-rule="evenodd"
              d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-7 text-white"
            v-if="openmodel"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <transition name="slide" class="absolute">
        <div
          v-if="openmodel"
          class="w-full bg-gray-900 flex justify-center items-center flex-col gap-3"
        >
          <route-link to="" class="text-white font-medium">Danh mục</route-link>
          <router-link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-7 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
          <router-link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-7 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
          <button
            class="flex bg-white font-medium justify-center mb-[5px] items-center rounded-full w-[35px] h-[35px] hover:bg-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
<script setup>
import { ref } from "vue";
const openmodel = ref(false);

const handelModel = () => {
  openmodel.value = !openmodel.value;
};

// =====================================
</script>
