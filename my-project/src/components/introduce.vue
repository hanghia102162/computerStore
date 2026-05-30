<template>
  <div class="bg-black lg:px-20 lg:py-10 px-10">
    <h2 class="text-white text-center text-3xl font-medium">
      Dịch vụ ASUS VIETNAM
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      <div
        v-for="(item, index) in services"
        :key="index"
        class="p-4 flex flex-col gap-3"
      >
        <component :is="item.icon" class="w-10 h-10" :class="item.color" />

        <h2 class="text-white text-2xl font-medium">
          {{ item.name }}
        </h2>

        <p class="text-gray-400">
          {{ item.content }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-10 py-20 justify-center items-center">
      <h2 class="text-white text-center text-3xl font-medium">
        Introduction to ASUS Vietnam
      </h2>
      <p class="lg:w-[70%] text-center text-gray-400">
        ASUS Vietnam Store is the official retail platform of ASUS in Vietnam,
        offering a wide range of high quality technology products, including
        laptops, desktops, smartphones, monitors, and gaming gear. Known for
        innovative design and cutting-edge technology, ASUS aims to deliver
        exceptional performance, reliability, and value to meet the needs of
        diverse customers from casual users to professionals and gamers. With
        dedicated customer support and a commitment to excellence, ASUS Vietnam
        Store ensures an outstanding shopping experience for all tech
        enthusiasts.
      </p>
    </div>
  </div>
</template>
<script setup>
import {
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  BuildingStorefrontIcon,
  TagIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/solid";
const services = [
  {
    name: "vận chuyển",
    icon: TruckIcon,
    content:
      "Chúng tôi cam kết giao hang nhanh chóng với công nghệ tối ưu đảm bảo hàng đến tay khách hàng 1 cách nhanh chóng và đúng hẹn",
    color: "text-white",
  },
  {
    name: "Bảo hành uy tin",
    icon: ShieldCheckIcon,
    content:
      "Sản phẩm được bảo hành chính hãng, hỗ trợ sửa chữa nhanh chóng và đảm bảo quyền lợi khách hàng.",
    color: "text-green-400",
  },
  {
    name: "Hỗ trợ",
    icon: ChatBubbleLeftRightIcon,
    content:
      "Đội ngũ hỗ trợ khách hàng 24/7, luôn sẵn sàng giải đáp mọi thắc mắc của bạn.",
    color: "text-blue-400",
  },
  {
    name: "Cửa hàng",
    icon: BuildingStorefrontIcon,
    content:
      "Hệ thống cửa hàng rộng khắp, giúp bạn dễ dàng trải nghiệm và mua sắm trực tiếp.",
    color: "text-yellow-400",
  },
  {
    name: "Ưu đãi",
    icon: TagIcon,
    content:
      "Nhiều chương trình khuyến mãi hấp dẫn, giảm giá đặc biệt theo từng thời điểm.",
    color: "text-red-400",
  },
  {
    name: "Đa dạng",
    icon: Squares2X2Icon,
    content:
      "Sản phẩm đa dạng mẫu mã, đáp ứng mọi nhu cầu từ cơ bản đến cao cấp.",
    color: "text-purple-400",
  },
];
</script>
