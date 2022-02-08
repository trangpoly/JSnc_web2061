// import data from "../data";
import axios from "axios";

const ProductDetail = {
    async render(id) {
        const { data } = await axios.get(`https://61fb4ac687801d0017a2c456.mockapi.io/trangptph18099/api/products/${id}`);
        // const found = data.find((element) => element.id === id);
        return `
        <div class="w-10/12 m-auto flex flex-row" style = "padding-top:80px; padding-bottom:10px">
        <div class = "w-2/5 m-10 border-solid border-2 border-gray-200 hover:shadow-2xl" >
            <img src="${data.image}" class="w-full p-5" alt="">
        </div>
        <div class="w-3/5 pt-10">
            <h2 class="mt-2 pt-5 text-3xl text-center text-orange-600 font-bold">${data.name}</h2>
            <div class = "text-center mt-5">
            <span class="mt-2 pt-5 text-2xl text-center line-through text-black font-semibold">${data.priceSale}$</span>
            <span class="mt-2 pt-5 pl-3 text-2xl text-center text-red-700 font-bold">${data.price}$</span>
            </div>
            <h3 class="mt-2 pt-5 text-xl text-black font-bold">Mô tả</h3>
            <p class="mt-3 mb-10 text-stone-900">${data.detail}</p>
            <div class="w-full mb-10 ">
            <h3 class="mt-2 pb-2 text-xl text-black font-bold">Số lượng</h3>
            <input type="number" value="1" min="1" max="5" class="pl-4 w-1/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
            <a href="/" class="py-2 px-10 ml-20 mr-10 bg-black hover:bg-red-400 rounded-full text-white font-bold"><i class="fas fa-plus mr-2"></i>Thêm vào giỏ hàng</a>
            <a href="/" class="py-2 px-10 bg-black hover:bg-red-400 rounded-full text-white font-bold"><i class="fas fa-shopping-cart mr-2"></i>Mua ngay</a>
        </div>
        </div>
        <div class="w-9/12 flex flex-col m-auto" style = "padding-bottom:200px">
            <h2 class="w-full mt-2 ml-2 text-2xl text-left font-semibold font-mono">Bình luận</h2>
            <div class="w-full flex flex-row border-b border-gray-300 hover:bg-red-50">
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" class="w-1/12 p-5" alt="">
                <div class ="w-11/12">
                <h1 class = "w-full font-semibold pt-5">Thu Trang:</h1>
                <p class = "w-full pt-2">Sản phẩm tốt!</p>
            </div></div>
            <div class="w-full flex flex-row border-b border-gray-300 hover:bg-red-50">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" class="w-1/12 p-5" alt="">
                <div class ="w-11/12">
                <h1 class = "w-full font-semibold pt-5">Lê Huy:</h1>
                <p class = "w-full pt-2">Very good!</p>
            </div></div>
            <div class="w-full flex flex-row border-b border-gray-300 hover:bg-red-50">
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png" class="w-1/12 p-5" alt="">
                <div class ="w-11/12">
                <h1 class = "w-full font-semibold pt-5">Văn Phong:</h1>
                <p class = "w-full pt-2">Rất oke!</p>
            </div>
        </div>
        <div class="w-full flex flex-row border-b border-gray-300 hover:bg-red-50">
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" class="w-1/12 p-5" alt="">
                <div class ="w-11/12">
                <h1 class = "w-full font-semibold pt-5">Thu Trang:</h1>
                <input type="text" placeholder="Viết bình luận..." class="pl-4 w-full border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
        </div>
        </div>`;
    },
};
export default ProductDetail;
