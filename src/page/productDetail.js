import toastr from "toastr";
import { getCmt, get } from "../../api/products";
import { getAllUser } from "../../api/user";
import { getUserInCmt, $$ } from "../utils/selector";
// import ProductInvolve from "./productInvolve";
import Header from "../composer/header";
import { addToCart } from "../utils/cart";

import ProductInvolve from "./productInvolve";
import { addCmt } from "../../api/comments";

const ProductDetail = {
    async render(id) {
        const { data } = await get(id);
        const userData = await getAllUser();
        const arrUser = userData.data;
        const reponse = await getCmt(id);
        const arr = reponse.data.comments;
        // console.log(arr);
        // const found = data.find((element) => element.id === id);
        return `
        ${Header.afterRender()}
        <div class="w-10/12 m-auto flex flex-row" style = "padding-top:80px; padding-bottom:10px">
        <div class = "w-2/5 m-10 border-solid border-2 border-gray-200 hover:shadow-2xl" >
            <img src="${data.image}" class="w-full p-5" alt="">
        </div>
        <div class="w-3/5 pt-10">
            <h2 class="mt-2 pt-5 text-3xl text-center text-orange-600 font-bold">${data.name}</h2>
            <div class = "text-center mt-5">
            <span class="mt-2 pt-5 text-2xl text-center line-through text-black font-semibold">${data.price}$</span>
            <span class="mt-2 pt-5 pl-3 text-2xl text-center text-red-700 font-bold">${data.sale}$</span>
            </div>
            <h3 class="mt-2 pt-5 text-xl text-black font-bold">Mô tả</h3>
            <p class="mt-2 text-stone-900">${data.desc}</p>
            <div class="w-full mb-10 ">
            <h3 class="mt-3 pb-2 text-xl text-black font-bold">Số lượng</h3>
            <input id="inputValue" type="number" min="1" max="5" value="1" class="pl-4 w-1/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
            <button id="btnAddToCart" class="py-2 px-10 ml-20 mr-10 bg-black hover:bg-red-400 rounded-full text-white font-bold"><i class="fas fa-plus mr-2"></i>Thêm vào giỏ hàng</button>
            <button class="py-2 px-10 bg-black hover:bg-red-400 rounded-full text-white font-bold"><i class="fas fa-shopping-cart mr-2"></i>Mua ngay</button>
        </div>
        </div>
        <div class="cmt w-9/12 flex flex-col m-auto" style = "padding-bottom:20px">
            <h2 class="w-full mt-3 ml-2 text-2xl text-left font-semibold font-mono">Bình luận</h2>
            ${arr.map((cmt) => `
                <div class="w-full flex flex-row border-b border-gray-300 hover:bg-red-50">
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" class="w-1/12 p-5" alt="">
                    <div class ="w-11/12">
                        <h1 class = "w-full font-semibold pt-5">${getUserInCmt(arrUser, cmt.userId)} :</h1>
                        <p class = "w-full pt-2">${cmt.content}</p>
                    </div>
                </div>
            `).join("")}
            <div class="w-full flex flex-row border-b border-gray-300 hover:bg-red-50">
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" class="w-1/12 p-5" alt="">
                <div class ="w-11/12">
                    ${!JSON.parse(localStorage.getItem("user")) ? `<h1 class = "w-full pt-10">Đăng nhập để bình luận</h1>` : `
                    <h1 class = "w-full font-semibold pt-5">${JSON.parse(localStorage.getItem("user")).name}:</h1>
                    <form id="formCmt" class="flex flex-grow">
                        <input id="content" type="text" placeholder="Viết bình luận..." class="pl-4 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-sm">
                        <button class="w-2/12 p-1 border-1 border-white ml-5 mr-5 hover:font-semibold bg-red-400">Gửi bình luận</button>     
                        `}   
                    </form>
                </div>
            </div>

        </div>
        </div>
        <div class="w-9/12 flex flex-col m-auto" style = "padding-bottom:200px">
            <h2 class="w-full mt-3 ml-2 text-2xl text-left font-semibold font-mono">Sản phẩm liên quan</h2>
            ${await ProductInvolve.render(data.categoryProductId)}
            
        </div>
        `;
    },
    afterRender(id) {
        $$("#btnAddToCart").addEventListener("click", async () => {
            if (!JSON.parse(localStorage.getItem("user"))) {
                alert("Đăng nhập để mua hàng!");
            } else {
                const { data } = await get(id);
                // console.log(data);
                addToCart({ ...data, quantity: $$("#inputValue").value ? +$$("#inputValue").value : 1 });
                toastr.success("Thêm giỏ hàng thành công");
            }
        });
        $$("#formCmt").addEventListener("submit", (e) => {
            e.preventDefault();
            addCmt({
                userId: JSON.parse(localStorage.getItem("user")).id,
                productId: +id,
                content: document.getElementById("content").value,
            });
            toastr.success("Bình luận thành công");
            setTimeout(() => {
                document.location.href = `/product/${id}`;
            }, 2000);
        });
    },
};
export default ProductDetail;
