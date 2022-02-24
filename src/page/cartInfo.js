import { getOrder } from "../../api/orders";
import Header from "../composer/header";

const CartInfoPage = {
    async render() {
        const { data } = await getOrder();
        console.log(data);
        return `
        ${Header.afterRender()}
        <h1 class="text-4xl mt-20 text-center font-bold text-red-500">Đơn hàng của bạn</h1> 
        ${data.map((item) => `
            <table id="tableCartInfo" class="table-auto w-11/12 m-auto mt-10">
            <thead class="w-full border-b-2 border-red-200 bg-rose-100">
              <tr class=" text-center">
                <th class="w-1/12 p-1 text-lg font-semibold tracking-wide text-center"></th>
                <th class="w-1/12 p-1 text-lg font-semibold tracking-wide text-center"></th>
                <th class="w-2/12 p-1 text-lg font-semibold tracking-wide text-center"></th>
                <th class="w-2/12 p-1 text-lg font-semibold tracking-wide text-center"></th>
                <th class="w-3/12 p-1 text-sm text-red-700 font-semibold text-center tracking-wide">${item.status}</th>
              </tr>
            </thead>
            <tbody>
            ${item.cart.map((itemCart, index) => `
              <tr class="hover:bg-red-50 bg-white">
                  <td class="p-3 text-base text-gray-700 text-center">${index + 1}</td>
                  <td class="p-3 text-base text-gray-700 text-center"><img src="${itemCart.image}" class="w-6/12" alt=""></td>
                  <td class="p-3 text-base text-gray-700 text-center">${itemCart.name}</td>
                  <td class="p-3 text-base text-gray-700 text-center">${itemCart.price} $</td>
                  <td class="p-3 text-base text-gray-700 text-center">x ${itemCart.quantity}</td>
                </tr>
            `).join("")}    
            </tbody>
            <tfoot class="w-full border-b-2 border-red-200 bg-rose-100">
            <th class="w-1/12 p-1 text-lg font-semibold tracking-wide text-center"></th>
            <th class="w-1/12 p-1 text-lg font-semibold tracking-wide text-center"></th>
            <th class="w-2/12 p-1 text-lg font-semibold tracking-wide text-center"></th>
            <th class="w-2/12 p-1 text-lg font-semibold tracking-wide text-center"></th>
            <th class="w-3/12 p-1 text-lg font-semibold text-center tracking-wide">Tổng tiền: ${item.sumCart} $</th>
            </tfoot>
          </table>  
            
        `).join("")}
        `;
    },

};
export default CartInfoPage;
