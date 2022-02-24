import { getAllOrderAdmin } from "../../../../api/orders";
import NavbarAdmin from "../../../composer/navbarAdmin";
import { $$ } from "../../../utils/selector";

const OrderAdmin = {
    async render() {
        const { data } = await getAllOrderAdmin();
        return `<div id = "dashbroad" class="flex flex-row w-screen h-screen">
        ${await NavbarAdmin.render()}
        <div class="content w-10/12 h-screen bg-white">
            <div class="w-3/12 float-right mt-4 mr-8 relative bg-gray-100 h-10 pt-2 rounded border-2 hover:border-red-300">
                <i class="fas fa-search absolute left-0 mt-1 ml-2"></i>
                <input type="text" placeholder="Search..." class="ml-10 bg-transparent ">
            </div>
            <h1 class="w-9/12 font-bold text-red-300 text-4xl mt-4 pl-8 mb-12">Orders</h1>
            <table id="tableCartInfo" class="table-auto w-11/12 m-auto mt-10">
            <thead class="w-full border-b-2 border-red-200 bg-rose-100">
              <tr class=" text-center">
                <th class="w-1/12 p-1 text-lg font-semibold tracking-wide text-center">#</th>
                <th class="w-2/12 p-1 text-lg font-semibold tracking-wide text-center">Tên tài khoản</th>
                <th class="w-3/12 p-1 text-lg font-semibold tracking-wide text-center">Thông tin khách hàng</th>
                <th class="w-3/12 p-1 text-lg font-semibold tracking-wide text-center">Thông tin sản phẩm</th>
                <th class="w-2/12 p-1 text-lg font-semibold text-center tracking-wide">Action</th>
              </tr>
            </thead>
            <tbody>
            ${data.map((item, index) => `
              <tr class="hover:bg-red-50 bg-white">
                  <td class="p-3 text-base text-gray-700 text-center">${index + 1}</td>
                  <td class="p-3 text-base text-gray-700 text-center">${item.nameKH}</td>
                  <td class="p-3 text-base text-gray-700 text-left pl-2 m-0">
                    <p>Người nhận: ${item.nameKH}</p>
                    <p>Số điện thoại: ${item.phoneKH}</p>
                    <p>Địa chỉ: ${item.phoneKH}</p>
                    <p>Phương thức thanh toán: ${item.ptttKH === 0 ? "Thanh toán khi nhận hàng" : "Thanh toán qua ngân hàng"}</p>
                  </td>
                  <td class="p-3 text-base text-gray-700 text-left m-0">
                  ${item.cart.map((itemCart) => `
                    <div class="w-12/12 flex flex-row">
                        <img src="${itemCart.image}" class="w-2/12 mb-3" alt="" id="img-preview">
                        <p class="w-8/12 pl-2">${itemCart.name}<br><span class="text-sm text-gray-500"> ${itemCart.price}$ x${itemCart.quantity}</span></p>
                    </div>
                    `).join("")}
                    <div class="w-full font-semibold text-right text-red-900">
                        Tổng tiền: ${item.sumCart} $
                    </div>
                  </td>
                  <td class="p-1 text-base text-gray-700 text-center">
                    <form id="formStatus">
                        <select id="resultStatus" class="w-full relative bg-gray-100 mb-3 h-10 pl-5 rounded border-2 hover:border-red-300">
                            <option value="0">Chờ xác nhận</option>
                            <option value="1">Đã xác nhận</option>
                            <option value="2">Đang giao hàng</option>
                            <option value="3">Giao hàng thành công</option>
                        </select>
                    </form>
                  </td>
                </tr>
            `).join("")}     
            </tbody>

          </table>  
           
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();
        const btns = $$("#formStatus");
        btns.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                e.preventDefault();
                console.log($$("#resultStatus").value);
            });
        });
    },

};
export default OrderAdmin;
