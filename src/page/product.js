import { getAllCate } from "../../api/categoryProduct";
import { searchbyName } from "../../api/products";
import Header from "../composer/header";
import { $$ } from "../utils/selector";
import SearchPage from "./searchProduct";

const ProductPage = {
    async render() {
        const { data } = await getAllCate();
        return `
            ${Header.afterRender()}
            <div class="w-11/12 m-auto mt-32 mb-40">
                <nav class="w-7/12 m-auto h-10 grid grid-rows-1 grid-flow-col gap-5 font-mono text-xl font-bold">
                    <div class="w-full pt-2 text-center text-red-900 ">Danh mục</div>
                    <div class="w-full pt-2 text-center"><a href="/products"class=" menu-cate">Tất cả<a></div>
                    ${data.map((cate) => `
                        <div class="w-full pt-2 text-center"><a data-id="${cate.id}" id="urlCate" class="menu-cate">${cate.name}</a></div>
                    `).join("")}
                </nav>
                <div class="w-11/12 m-auto flex flex-row">
                    <div class="basis-1/4 pl-3 pr-3 ">
                        <h2 class="text-base font-semibold mt-3 mb-2">Tìm kiếm sản phẩm</h2>
                        <form id="searchName" class="w-full relative bg-gray-100 mb-3 h-10 pt-2 rounded border-2 hover:border-red-300">
                            <i class="fas fa-search absolute left-0 mt-1 ml-2"></i>
                            <input type="text" id= "namePro" placeholder="Search..." class="ml-10 bg-transparent">
                        </form>
                    </div>
                    <div id="searchProducts" class="basis-3/4 boxProduct grid grid-cols-3 gap-3 pl-5 pr-5">
                        ${await SearchPage.render()}
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        const urlCate = $$("#urlCate");
        urlCate.forEach((element) => {
            element.addEventListener("click", async () => {
                const { id } = element.dataset;
                $$("#searchProducts").innerHTML = await SearchPage.afterRender(id);
            });
        });
        // $$("#searchName").addEventListener("submit", async (e) => {
        //     e.preventDefault();
        //     console.log($$("#namePro").value);
        //     const nameSearchPro = await $$("namePro").value;
        //     const input = nameSearchPro.replace(/\s+/g, " ").trim();
        //     console.log(input);
        //     // $$("#searchProducts").innerHTML = await searchbyName(nameSearchPro);
        //     const arrPro = await searchbyName(nameSearchPro);
        //     const arrProDetail = arrPro.data;
        //     console.log(arrProDetail);
        // });
    },
};
export default ProductPage;
