<template>
  <div
    class="bg-black text-white p-10 rounded-[15px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4"
  >
    <div class="flex gap-3 items-center">
      <label class="min-w-[70px]">Từ khóa:</label>
      <input type="text" class="border p-1 rounded-[5px] flex-1 text-white" />
    </div>

    <div class="flex gap-3 items-center">
      <label class="min-w-[70px]">Hiển thị:</label>
      <select class="bg-gray-700 p-1 rounded-[5px] flex-1 focus:outline-none">
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    </div>

    <div class="flex gap-3 items-center">
      <label class="min-w-[70px]">Sắp xếp:</label>
      <select class="bg-gray-700 p-1 rounded-[5px] flex-1 focus:outline-none">
        <option>Cũ nhất</option>
        <option>Mới nhất</option>
      </select>
    </div>

    <div class="flex gap-3 items-center">
      <label class="min-w-[70px]">Giá:</label>
      <select class="bg-gray-700 p-1 rounded-[5px] flex-1 focus:outline-none">
        <option>Đẳng cấp</option>
        <option>Trung lưu</option>
        <option>Thấp</option>
      </select>
    </div>

    <div class="flex gap-3 items-center">
      <label class="min-w-[70px]">Danh mục:</label>
      <select class="bg-gray-700 p-1 rounded-[5px] flex-1 focus:outline-none">
        <option>Điện thoại</option>
        <option>Máy tính</option>
        <option>Linh kiện</option>
        <option>Chơi game</option>
        <option>Học tập</option>
        <option>Làm việc</option>
      </select>
    </div>

    <button class="bg-white text-black p-2 rounded-[5px] font-medium w-full">
      Áp dụng
    </button>
  </div>
</template>
