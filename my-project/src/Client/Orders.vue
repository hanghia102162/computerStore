<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Đơn hàng của tôi</h1>

    <div class="space-y-6">
      <div
        v-for="order in orders"
        :key="order.id"
        class="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <!-- Header -->
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b px-6 py-4 bg-gray-50"
        >
          <div>
            <h2 class="font-bold text-lg">Đơn hàng #{{ order.code }}</h2>
            <p class="text-sm text-gray-500">Đặt ngày {{ order.createdAt }}</p>
          </div>

          <span
            class="w-fit px-4 py-2 rounded-full text-sm font-semibold"
            :class="statusClass(order.status)"
          >
            {{ order.status }}
          </span>
        </div>

        <!-- Body -->
        <div class="p-6">
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Ảnh -->
            <div class="shrink-0">
              <img
                :src="order.image"
                alt=""
                class="w-full lg:w-48 h-48 object-cover rounded-xl border"
              />
            </div>

            <!-- Nội dung -->
            <div class="flex-1">
              <!-- Tổng tiền -->
              <div
                class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6"
              >
                <div>
                  <p class="text-gray-500 text-sm">Tổng thanh toán</p>

                  <h3 class="text-3xl font-bold text-red-500">
                    {{ formatCurrency(order.total) }}
                  </h3>
                </div>

                <button
                  class="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition font-medium"
                >
                  Xem chi tiết
                </button>
              </div>

              <!-- Địa chỉ -->
              <div class="grid md:grid-cols-2 gap-4">
                <!-- Kho giao -->
                <div
                  class="border rounded-xl p-4 bg-gradient-to-r from-blue-50 to-blue-100"
                >
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xl">📦</span>

                    <h3 class="font-bold">Địa chỉ giao hàng</h3>
                  </div>

                  <p class="font-medium">ASUS Vietnam Warehouse</p>

                  <p class="text-gray-700 mt-1">
                    {{ order.shippingAddress }}
                  </p>
                </div>

                <!-- Người nhận -->
                <div
                  class="border rounded-xl p-4 bg-gradient-to-r from-green-50 to-green-100"
                >
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xl">👤</span>

                    <h3 class="font-bold">Địa chỉ nhận hàng</h3>
                  </div>

                  <p class="font-medium">
                    {{ order.receiverName }}
                  </p>

                  <p class="text-gray-600">
                    {{ order.receiverPhone }}
                  </p>

                  <p class="text-gray-700 mt-1">
                    {{ order.address }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div
          class="border-t px-6 py-4 bg-gray-50 flex flex-wrap gap-3 justify-end"
        >
          <button
            class="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            Theo dõi đơn hàng
          </button>

          <button
            class="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Mua lại
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const orders = [
  {
    id: 1,
    image:
      "https://dlcdnwebimgs.asus.com/gain/8f1d6b7a-9f0d-4f3e-8f0a-7f6b9e6d6f50/",
    code: "ORD20260530001",
    createdAt: "30/05/2026 10:30",
    total: 47980000,
    shippingAddress: "180-188 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh",
    receiverName: "Hà Trọng Nghĩa",
    receiverPhone: "0123 456 789",
    address: "123 Lạch Tray, Ngô Quyền, Hải Phòng",
    status: "Đang giao",
  },
  {
    id: 2,
    image:
      "https://dlcdnwebimgs.asus.com/gain/3a06c574-fd31-40cf-b03e-6ddcc7dbe4ef/",
    code: "ORD20260529005",
    createdAt: "29/05/2026 15:10",
    total: 15990000,
    shippingAddress: "180-188 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh",
    receiverName: "Nguyễn Văn A",
    receiverPhone: "0987 654 321",
    address: "45 Trần Phú, Hải Châu, Đà Nẵng",
    status: "Hoàn thành",
  },
];

const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

const statusClass = (status) => {
  switch (status) {
    case "Hoàn thành":
      return "bg-green-100 text-green-700";

    case "Đang giao":
      return "bg-blue-100 text-blue-700";

    case "Đang xử lý":
      return "bg-yellow-100 text-yellow-700";

    case "Đã hủy":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};
</script>
