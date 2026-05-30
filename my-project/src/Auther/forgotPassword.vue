<script setup>
import { ref } from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

const email = ref("");

const handleForgotPassword = () => {
  console.log("Email:", email.value);
  window.location.href = "/reissue";

  alert("Liên kết đặt lại mật khẩu đã được gửi tới email của bạn!");
};
</script>

<template>
  <Header />

  <div
    class="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black flex justify-center items-center px-4 py-10"
  >
    <div
      class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl"
    >
      <!-- LEFT -->
      <div
        class="hidden lg:flex flex-col justify-center px-14 text-white bg-[url('https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200')] bg-cover bg-center relative"
      >
        <div class="absolute inset-0 bg-black/70"></div>

        <div class="relative z-10 flex flex-col gap-6">
          <h1 class="text-5xl font-bold leading-tight">
            ASUS <span class="text-blue-500">STORE</span>
          </h1>

          <p class="text-lg text-zinc-300 leading-relaxed">
            Khôi phục tài khoản để tiếp tục mua sắm laptop, gaming gear và các
            thiết bị công nghệ chính hãng.
          </p>

          <div class="flex gap-4">
            <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
              <h2 class="text-2xl font-bold text-blue-400">24/7</h2>
              <p class="text-sm text-zinc-300">Hỗ trợ khách hàng</p>
            </div>

            <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
              <h2 class="text-2xl font-bold text-blue-400">100%</h2>
              <p class="text-sm text-zinc-300">Bảo mật tài khoản</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="bg-white flex justify-center items-center py-10 px-6">
        <form
          @submit.prevent="handleForgotPassword"
          class="w-full max-w-md flex flex-col gap-6"
        >
          <div class="text-center">
            <h1 class="text-4xl font-bold text-black">Quên mật khẩu</h1>

            <p class="text-zinc-500 mt-2 leading-relaxed">
              Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu.
            </p>
          </div>

          <!-- EMAIL -->
          <div class="relative">
            <input
              id="email"
              type="email"
              placeholder=" "
              v-model="email"
              required
              class="peer w-full border border-zinc-300 rounded-xl p-4 focus:outline-none focus:border-blue-500"
            />

            <label
              for="email"
              class="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-zinc-500 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm"
            >
              Nhập email của bạn
            </label>
          </div>

          <!-- BUTTON -->
          <button
            type="submit"
            class="w-full h-[50px] rounded-xl bg-black text-white font-medium hover:bg-blue-600 transition-all duration-300"
          >
            Gửi liên kết khôi phục
          </button>

          <!-- BACK -->
          <router-link
            to="/login"
            class="text-center text-zinc-500 hover:text-blue-500 transition"
          >
            ← Quay lại đăng nhập
          </router-link>
        </form>
      </div>
    </div>
  </div>

  <Footer />
</template>
