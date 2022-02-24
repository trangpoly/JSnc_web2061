import { getAllCate } from "../../api/categoryProduct";
import { rangeProduct, searchbyName } from "../../api/products";
import Header from "../composer/header";
import { $$ } from "../utils/selector";
import SearchPage from "./searchProduct";

const ProductPage = {
    async render() {
        const { data } = await getAllCate();
        return `
            ${Header.afterRender()}
            <div class="w-11/12 m-auto mt-32">
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
                        <h2 class="text-base font-semibold mt-3 mb-2">Lọc sản phẩm theo giá:</h2>
                        <form id="rangePrice">
                            <select id="resultRange" class="w-full relative bg-gray-100 mb-3 h-10 pl-5 rounded border-2 hover:border-red-300">
                                <option value="none"></option>
                                <option value="desc">Từ cao đến thấp</option>
                                <option value="asc">Từ thấp đến cao</option>
                            </select>
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
        //
        $$("#searchName").addEventListener("submit", async (e) => {
            e.preventDefault();
            console.log($$("#namePro").value);
            const { data } = await searchbyName($$("#namePro").value);
            console.log(data);
            $$("#searchProducts").innerHTML = `
            ${data.length === 0 ? `
            <img src="https://i.dlpng.com/static/png/6815603_preview.png" class="col-span-3 m-auto" alt="">
            <p class="text-lg italic font-semibold col-span-3 text-center text-red-500 mb-72">Không tìm thấy sản phẩm nào chứa từ khóa "${$$("#namePro").value}"</p>
            ` : `
            ${data.map((product) => `
                <div class="bg-gray-100 border-solid border-2 border-gray-200 text-center hover:bg-red-200 hover:drop-shadow-2xl p-2 mt-2">
                <a href="/product/${product.id}"><img src="${product.image}" class="w-full mb-2" alt="">
                <h1 class="font-mono text-lg font-bold mb-2">${product.name}</h1>
                ${product.sale > 0 ? `<span class="font-mono text-base line-through text-black font-bold">${product.price}$</span>` : `<span class="font-mono text-base text-black font-bold">${product.price}$</span>`}
                <span class="font-mono text-lg text-red-600 font-bold">${product.sale > 0 ? `${product.sale}$` : ""}</span>
                <p class="w-5/12 m-auto grid grid-cols-5 gap-5 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                </p></a>
            </div>
                `).join("")}
            
                `}`;
        });

        //
        $$("#rangePrice").addEventListener("click", async (e) => {
            e.preventDefault();
            console.log($$("#resultRange").value);
            const { data } = await rangeProduct($$("#resultRange").value);
            console.log(data);
            $$("#searchProducts").innerHTML = `
            ${data.map((product) => `
                <div class="bg-gray-100 border-solid border-2 border-gray-200 text-center hover:bg-red-200 hover:drop-shadow-2xl p-2 mt-2">
                <a href="/product/${product.id}"><img src="${product.image}" class="w-full mb-2" alt="">
                <h1 class="font-mono text-lg font-bold mb-2">${product.name}</h1>
                ${product.sale > 0 ? `<span class="font-mono text-base line-through text-black font-bold">${product.price}$</span>` : `<span class="font-mono text-base text-black font-bold">${product.price}$</span>`}
                <span class="font-mono text-lg text-red-600 font-bold">${product.sale > 0 ? `${product.sale}$` : ""}</span>
                <p class="w-5/12 m-auto grid grid-cols-5 gap-5 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                </p></a>
            </div>
                `).join("")}
            
                `;
        });
    },
};
export default ProductPage;
