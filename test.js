// import axios from "axios";
import toastr from "toastr";
import { getAllCate } from "../../../../api/categoryProduct";
import { remove, getAll } from "../../../../api/products";
import NavbarAdmin from "../../../composer/navbarAdmin";
import { reRender } from "../../../utils/rerender";
import { $$, getNameCate } from "../../../utils/selector";
// import data from "../../data";

const ProductsAdmin = {
    async render() {
        const { data } = await getAll();
        const reponse = await getAllCate();
        const arr = reponse.data;
        // console.log(arr);
        return `<div id = "dashbroad" class="flex flex-row w-screen h-screen">
        ${await NavbarAdmin.render()}
        <div class="content w-10/12 h-screen bg-white">
            <div class="w-3/12 float-right mt-4 mr-8 relative bg-gray-100 h-10 pt-2 rounded border-2 hover:border-red-300">
                <i class="fas fa-search absolute left-0 mt-1 ml-2"></i>
                <input type="text" placeholder="Search..." class="ml-10 bg-transparent ">
            </div>
            <h1 class="w-9/12 font-bold text-red-300 text-4xl mt-4 pl-8 mb-12">Products</h1>
            <a href="product/add" class="bg-red-400 hover:bg-red-500 rounded-lg p-2  ml-12 font-mono font-bold text-white">Thêm sản phẩm</a>
            <div class="w-5/12 ml-10 pl-3 pr-3 ">
                <h2 class="text-base font-semibold mt-3 mb-2">Lọc theo danh mục</h2>
                <form id="searchNameAd" class="w-full">
                    <select id="categoryProductSelect" class="w-5/12 relative bg-gray-100 h-10 rounded border-2 pl-2 hover:border-red-300">
                        <option value="0" class="text-gray-500" selected>Tất cả</option>
                    ${arr.map((categoryProduct) => `
                        <option value="${categoryProduct.id}" class="text-gray-500">${categoryProduct.name}</option>
                    `).join("")}
                    
                    </select>
                </form>
            </div>
            <table id="tablePro" class="table-auto w-11/12 m-auto mt-5">
                <thead class="w-full border-b-2 border-red-200 bg-rose-100">
                  <tr class=" text-center">
                    <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-center">#</th>
                    <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Tên sản phẩm</th>
                    <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Ảnh sản phẩm</th>
                    <th class="w-3/12 p-3 text-lg font-semibold tracking-wide text-center">Mô tả</th>
                    <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-center">Giá</th>
                    <th class="w-1/12 p-3 text-lg font-semibold text-center tracking-wide">Giảm giá</th>
                    <th class="w-3/12 p-3 text-lg font-semibold tracking-wide text-center">Loại sản phẩm</th>
                    <th class="w-1/12 text-lg font-semibold tracking-wide text-left">Action</th>
                    <th class="w-1/12 text-lg font-semibold tracking-wide text-left"></th>

                  </tr>
                </thead>
                <tbody>
                ${data.map((product, index) => `
                <tr class="hover:bg-red-50 bg-white">
                    <td class="p-3 text-sm text-gray-700 text-center">${index + 1}</td>
                    <td class="p-3 text-sm text-gray-700">${product.name}</td>
                    <td class="p-3 text-sm text-gray-700"><img src="${product.image}" class="w-10/12" alt=""></td>
                    <td class="p-3 text-sm text-gray-700">${product.desc}</td>
                    <td class="p-3 text-sm text-gray-700 text-center">${product.price}$</td>
                    <td class="p-3 text-sm text-gray-700 text-center">${product.sale === 0 ? "" : `${product.sale} $`}</td>
                    <td class="p-3 text-center text-smtext-gray-700">${getNameCate(arr, +product.categoryProductId)} </td>
                    
                    <td class="p-3 text-2xl text-gray-700"><a href="product/edit/${product.id}" class="text-blue-700 underline font-bold font-mono hover:text-red-300"><i class="fas fa-pen-square"></i></a></td>
                    <td class="p-3 text-red-700 underline font-bold font-mono text-2xl hover:text-red-300">
                        <button data-id = ${product.id} class="btn"><i class="fas fa-eraser"></i></button>
                    </td>
                  </tr>
                `).join("")}

                </tbody>
              </table>
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();

       

        const btns = document.querySelectorAll(".btn");
        // console.log(btns);
        btns.forEach((btn) => {
            // console.log(btn.dataset);
            const { id } = btn.dataset;

            btn.addEventListener("click", () => {
                console.log(id);
                const confirm = window.confirm("Bạn chắc chắn muốn xóa?");
                if (confirm) {
                    // axios.delete(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`).then(() => {
                    remove(id).then(() => {
                        toastr.success("Xóa sản phẩm thành công");
                        reRender(ProductsAdmin, "#home");
                    });
                }
            });
        });
    },

};
export default ProductsAdmin;
