import $ from "jquery";
import validate from "jquery-validation";
import NavbarAdmin from "../../../composer/navbarAdmin";
import { addCate } from "../../../../api/categoryProduct";
import { reRender } from "../../../utils/rerender";
import CategorysAdmin from "./categorysAdmin";

const AddCategory = {
    async render() {
        return `
        <div id = "dashbroad" class="flex flex-row w-screen h-screen">
        ${await NavbarAdmin.render()}
        <div class="content w-10/12 h-screen bg-white">
            <h1 class="w-full mt-40 text-center font-bold text-5xl text-red-400 mt-3">Thêm danh mục</h1>
            <form id="formAddCategory" class="w-10/12 m-auto mt-5 bg-white border border-gray-50 shadow-inner hover:shadow-xl p-3 flex flex-col justify-center items-center">
              <div class="relative pl-5 w-full">
                  <p class="text-gray-500 text-xl font-mono mb-2">Tên danh mục:</p>
                  <input type="text" id="nameCate" name="nameCate" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>         
              <button class="py-3 px-20 bg-black hover:bg-red-400 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">THÊM MỚI</button>
          </form>
        </div>
        
    </div>
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();
        const formAddCate = $("#formAddCategory");

        formAddCate.validate({
            rules: {
                nameCate: {
                    required: true,
                },
            },
            messages: {
                nameCate: {
                    required: "<br>Tên danh mục là bắt buộc!",
                },
            },
            submitHandler() {
                async function addCatePro() {
                    addCate({
                        name: document.querySelector("#nameCate").value,

                    }).then(() => {
                        reRender(CategorysAdmin, "#home");
                    });
                }
                addCatePro();
            },
        });

        // const formAddProduct = document.querySelector("#formAddCategory");

        // formAddProduct.addEventListener("submit", async (e) => {
        //     e.preventDefault();
        //     addCate({
        //         name: document.querySelector("#nameCate").value,

        //     }).then(() => {
        //         reRender(CategorysAdmin, "#home");
        //     });
        // });
    },

};

export default AddCategory;
