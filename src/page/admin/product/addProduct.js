import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import NavbarAdmin from "../../../composer/navbarAdmin";
import { add } from "../../../../api/products";
import { reRender } from "../../../utils/rerender";
import ProductsAdmin from "./productsAdmin";
import { getAllCate } from "../../../../api/categoryProduct";

const AddProduct = {
    async render() {
        const { data } = await getAllCate();
        return `
        <div id = "dashbroad" class="flex flex-row w-screen h-screen">
        ${await NavbarAdmin.render()}
        <div class="content w-10/12 h-screen bg-white">
            <h1 class="w-full text-center font-bold text-5xl text-red-400 mt-3">Thêm sản phẩm</h1>
            <form id="formAddProduct" class="w-10/12 m-auto mt-5 bg-white border border-gray-50 shadow-inner hover:shadow-xl p-3 flex flex-col justify-center items-center">
              <div class="relative pl-5 w-full">
                  <p class="text-gray-500 text-xl font-mono mb-2">Tên sản phẩm:</p>
                  <input type="text" id="nameProduct" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-1 mt-2">Ảnh sản phẩm:</p>
                <input type="file" id="image" class="form-control-file mb-2 block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Giá:</p>
                  <input type="number" min="1" id="price" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Giảm giá:</p>
                  <input type="number" min="0" id="sale" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Mô tả:</p>
                  <input type="text" id="desc" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
              <div class="relative pl-5  mt-2 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Loại sản phẩm:</p>
                <select id="categoryProductId" class="w-2/12 border-2 border-gray-400 mb-2">
                  ${data.map((categoryProduct) => `
                      <option value="${categoryProduct.id}" class="text-gray-500">${categoryProduct.name}</option>
                  `).join("")}
                  
                </select>
              </div>
              <button class="py-3 px-20 bg-black hover:bg-red-400 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">THÊM MỚI</button>
          </form>
        </div>

    </div>
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();
        const formAddProduct = document.querySelector("#formAddProduct");
        const CLOUDINARY_PRESET_KEY = "ufnnkotm";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/trangptph18099-web2061/image/upload";

        formAddProduct.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = document.querySelector("#image").files[0];

            // lấy giá trị của file và gán vào object formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET_KEY);

            // call API cloudinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });

            // call api thêm bài viết
            add({
                name: document.querySelector("#nameProduct").value,
                categoryProductId: document.querySelector("#categoryProductId").value,
                desc: document.querySelector("#desc").value,
                price: document.querySelector("#price").value,
                sale: document.querySelector("#sale").value,
                image: data.url,

            }).then(() => {
                reRender(ProductsAdmin, "#home");
            });
        });
    },

};

export default AddProduct;
