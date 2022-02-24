import toastr from "toastr";
import {
    decreaseQuantity, increaseQuantity, removeItemInCart, sumCart,
} from "../utils/cart";
import { reRender } from "../utils/rerender";
import { $$ } from "../utils/selector";
import "toastr/build/toastr.min.css";
import Header from "../composer/header";
import $ from "jquery";
import validate from "jquery-validation";
import { addOrder } from "../../api/orders";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            return ` 
            ${Header.afterRender()}
                <h1 class="text-4xl mt-20 text-center font-bold text-red-500">Giỏ hàng của bạn</h1> 
                ${!JSON.parse(localStorage.getItem("user")) ? `
                <div class="mt-10">
                <img src="https://support.content.office.net/vi-vn/media/395ce311-3feb-4458-adc1-02f9c430a765.png" class="w-5/12 m-auto" alt="">
                <p class=" italic font-semibold text-red-700 text-center mt-5">Bạn chưa đăng nhập! Đăng nhập để mua hàng</p>
                <div class="flex flex-row mt-5 w-5/12 m-auto">
                    <a href="/" class="py-2 px-10 ml-20 mr-10 bg-black hover:bg-red-400 rounded-full text-white font-bold"><i class="fas fa-angle-left"></i> Quay lại trang chủ</a>
                    <a href="/signin" class="float-right py-2 px-10 bg-black hover:bg-red-400 rounded-full text-white font-bold">Đăng nhập</a>
                </div>
                
                </div>` : `
                <table id="tableCart" class="table-auto w-11/12 m-auto mt-5 mb-5">
                        <thead class="w-full border-b-2 border-red-200 bg-rose-100">
                          <tr class=" text-center">
                            <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-center">#</th>
                            <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Tên sản phẩm</th>
                            <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Ảnh sản phẩm</th>
                            <th class="w-2/12 p-3 text-lg font-semibold tracking-wide text-center">Giá</th>
                            <th class="w-3/12 p-3 text-lg font-semibold text-center tracking-wide">Số lượng</th>
                            <th class="w-3/12 text-lg font-semibold text-center tracking-wide">Tổng</th>
                            <th class="w-1/12 text-lg font-semibold tracking-wide text-center">Action</th>

                          </tr>
                        </thead>
                        <tbody>
                        ${cart.map((item, index) => `
                          <tr class="hover:bg-red-50 bg-white">
                              <td class="p-3 text-base text-gray-700 text-center">${index + 1}</td>
                              <td class="p-3 text-base text-gray-700 text-center">${item.name}</td>
                              <td class="p-3 text-base text-gray-700 text-center"><img src="${item.image}" class="w-10/12" alt=""></td>
                              <td class="p-3 text-base text-gray-700 text-center">${item.price} $</td>
                              <td class="p-3 text-base text-gray-700 text-center">
                                <button data-id="${item.id}" class="btn btn-increase p-5 text-2xl text-red-300 hover:text-red-900"><i class="fas fa-plus"></i></button>
                                ${item.quantity}
                                <button data-id="${item.id}" class="btn btn-decrease p-5 text-2xl text-red-300 hover:text-red-900"><i class="fas fa-minus"></i></button>
                              </td>
                              <td class="p-3 text-base text-gray-700 text-center"><span class="sumElement ">${item.price * item.quantity}</span> $</td>
                              <td class="p-3 text-base text-gray-700 text-center">
                              <button data-id="${item.id}" class="btn btn-remove p-5 text-2xl text-red-300 hover:text-red-900"><i class="fas fa-trash-alt"></i></button>
                              </td>
                            </tr>
                        `).join("")}
                        </tbody>
                      </table>  
                      <div class=" w-11/12 m-auto mb-40 flex flex-row text-center">
                        <form id="formCart" action="" class="basis-2/4 ml-10 mr-10 bg-white border-2 rounded border-red-100 shadow-2xl hover:shadow-xl">
                            <h2 class="mt-2 font-display font-bold text-3xl text-black text-center">Thông tin đặt hàng</h2>
                            <div class="relative w-10/12 m-auto text-left mt-2">
                                <i class="fa fa-user absolute text-xl" style="color: #FB7185;"></i>
                                <input type="text" id="nameKH" name="nameKH" value="${JSON.parse(localStorage.getItem("user")).name}" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-lg">
                            </div>
                            <div class="relative mt-8 w-10/12 m-auto text-left">
                                <i class="fa fa-phone absolute text-xl" style="color: #FB7185;"></i>
                                <input type="text" id="phoneKH" name="phoneKH" placeholder="Số điện thoại" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-lg">
                            </div>
                            <div class="relative mt-8 w-10/12 m-auto text-left">
                                <i class="fa fa-map absolute text-xl" style="color: #FB7185;"></i>
                                <input type="text" id="addrerssKH" name="addressKH" placeholder="Địa chỉ nhận hàng" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-lg">
                            </div>
                            <div class="relative mt-5 w-10/12 m-autol ml-14 text-left">
                                <p class="text-red-400 font-semibold">Phương thức thanh toán: </p>
                                <select id="ptttKH" name="ptttKH" class="w-5/12 border-2 mt-2 border-gray-400 mb-2">
                                    <option value="0" class="text-gray-500">Thanh toán khi nhận hàng</option>
                                    <option value="1" class="text-gray-500">Thanh toán qua ngân hàng</option>
                                </select>
                            </div>
                            <button class="py-3 px-20 mb-5 bg-black hover:bg-red-400 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Đặt hàng</button>
                        </form>
                        <div class="basis-1/4 font-semibold text-xl">Tổng tiền: </div>
                        <div class="basis-1/4 font-bold text-xl text-red-700"><span id="sumCart"></span> $</div>
                      <div>
                      `}`;
        }
        return `
        ${!JSON.parse(localStorage.getItem("user")) ? `
                <div class="pt-40">
                <img src="https://support.content.office.net/vi-vn/media/395ce311-3feb-4458-adc1-02f9c430a765.png" class="w-5/12 m-auto" alt="">
                <p class=" italic font-semibold text-red-700 text-center mt-5">Bạn chưa đăng nhập! Đăng nhập để mua hàng</p>
                <div class="flex flex-row mt-5 w-5/12 m-auto">
                    <a href="/" class="py-2 px-10 ml-20 mr-10 bg-black hover:bg-red-400 rounded-full text-white font-bold"><i class="fas fa-angle-left"></i> Quay lại trang chủ</a>
                    <a href="/signin" class="float-right py-2 px-10 bg-black hover:bg-red-400 rounded-full text-white font-bold">Đăng nhập</a>
                </div>
                
                </div>` : `
        <div class="pt-40">
        <img src="https://support.content.office.net/vi-vn/media/395ce311-3feb-4458-adc1-02f9c430a765.png" class="w-5/12 m-auto" alt="">
        <p class=" italic font-semibold text-red-700 text-center mt-5">Giỏ hàng của bạn trống!</p>
        <div class="flex flex-row mt-5 w-5/12 m-auto">
            <a href="/products" class="py-2 px-10 m-auto text-center bg-black hover:bg-red-400 rounded-full text-white font-bold"><i class="fas fa-angle-left"></i> Quay lại mua hàng</a>
        </div>
        `}`;
    },
    afterRender() {
        const sumElement = document.querySelectorAll(".sumElement");
        $$("#sumCart").innerHTML = sumCart(sumElement);

        const btns = $$(".btn");
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        // console.log(id);
                        toastr.success("Tăng số lượng thành công");
                        reRender(CartPage, "#home");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id);
                    toastr.success("Giảm số lượng thành công");
                    reRender(CartPage, "#home");
                } else {
                    removeItemInCart(id, () => {
                        toastr.success("Xóa sản phẩm thành công");
                        reRender(CartPage, "#home");
                    });
                }
            });
        });
        const formCart = $("#formCart");
        formCart.validate({
            rules: {
                nameKH: {
                    required: true,
                },
                phoneKH: {
                    required: true,
                },
                addressKH: {
                    required: true,
                },
                ptttKH: {
                    required: true,
                },
            },
            messages: {
                nameKH: {
                    required: "<br>Tên người nhận là bắt buộc!",
                },
                phoneKH: {
                    required: "<br>Số điện thoại là bắt buộc!",
                },
                addressKH: {
                    required: "<br>Địa chỉ nhận hàng là bắt buộc!",
                },
                pttt: {
                    required: "<br>Phương thức thanh toán là bắt buộc!",
                },
            },
            submitHandler() {
                addOrder({
                    idKH: JSON.parse(localStorage.getItem("user")).id,
                    nameKH: $$("#nameKH").value,
                    addressKH: $$("#addressKH").value,
                    phoneKH: $$("#phoneKH").value,
                    ptttKH: $$("#ptttKH").value,
                    cart: JSON.parse(localStorage.getItem("cart")),
                    sumCart: sumCart(sumElement),
                    status: "Chờ xác nhận",
                });
                localStorage.removeItem("cart");
                toastr.success("Bạn đã đặt hàng thành công!");
                reRender(CartPage, "#home");
            },
        });
    },
};
export default CartPage;
