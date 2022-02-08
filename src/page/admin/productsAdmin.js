import axios from "axios";
import NavbarAdmin from "../../composer/navbarAdmin";
// import data from "../../data";

const ProductsAdmin = {
    async render() {
        const { data } = await axios.get("https://61fb4ac687801d0017a2c456.mockapi.io/trangptph18099/api/products");
        return `<div id = "dashbroad" class="flex flex-row w-screen h-screen">
        ${NavbarAdmin.render()}
        <div class="content w-10/12 h-screen bg-white">
            <div class="w-3/12 float-right mt-4 mr-8 relative bg-gray-100 h-10 pt-2 rounded border-2 hover:border-red-300">
                <i class="fas fa-search absolute left-0 mt-1 ml-2"></i>
                <input type="text" placeholder="Search..." class="ml-10 bg-transparent ">
            </div>
            <h1 class="w-9/12 font-bold text-red-300 text-4xl mt-4 pl-8 mb-12">Products</h1>
            <a href="/addProduct" class="bg-red-400 hover:bg-red-500 rounded-lg p-2  ml-12 font-mono font-bold text-white">Thêm sản phẩm</a>
            <table class="table-auto w-11/12 m-auto mt-5">
                <thead class="w-full border-b-2 border-red-200 bg-rose-100">
                  <tr class=" text-center">
                    <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-center">ID</th>
                    <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Tên sản phẩm</th>
                    <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Ảnh sản phẩm</th>
                    <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-center">Giá</th>
                    <th class="w-2/12 p-3 text-lg font-semibold text-center tracking-wide">Giảm giá</th>
                    <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Mô tả</th>
                    <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Loại sản phẩm</th>
                    <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-left">Action</th>
                    <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-left"></th>
                  </tr>
                </thead>
                <tbody>
                ${data.map((product) => `
                <tr class="hover:bg-red-50 bg-white">
                    <td class="p-3 text-smtext-gray-700 text-center">${product.id}</td>
                    <td class="p-3 text-smtext-gray-700">${product.name}</td>
                    <td class="p-3 text-smtext-gray-700"><img src="${product.image}" class="w-10/12" alt=""></td>
                    <td class="p-3 text-smtext-gray-700 text-center">${product.price}$</td>
                    <td class="p-3 text-smtext-gray-700 text-center">${product.priceSale}$</td>
                    <td class="p-3 text-smtext-gray-700">${product.detail}</td>
                    <td class="p-3 text-center text-smtext-gray-700">${product.categorieId}</td>
                    <td class="p-3 text-smtext-gray-700"><a href="/admin/editproduct/${product.id}" class="text-blue-700 underline font-bold font-mono text-lg hover:text-red-300">Sửa</a></td>
                    <td class="p-3 text-smtext-gray-700"><a href="#" class="text-red-700 underline font-bold font-mono text-lg hover:text-red-300">Xóa</a></td>
                  </tr>
                `).join("")}
                  
                </tbody>
              </table>
        `;
    },
};
export default ProductsAdmin;
