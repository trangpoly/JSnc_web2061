import { reRender } from "../utils/rerender";
import Signin from "../page/signin";

const NavbarAdmin = {
    async render() {
        return `
        <div class="mail-panel w-2/12 h-screen" style="background-color: rgb(240,238,240);">
            <img src="https://bizweb.dktcdn.net/100/369/010/themes/845311/assets/logo.png?1641999926133" class="w-full" alt="">
            <nav class="w-full h-50 grid grid-flow-col-1font-mono text-2xl font-semibold border-t mt-2">
                <div class="w-full pt-10 menu-item-admin hover:bg-red-300"><i class="fas fa-chart-line mr-4 text-gray-600"></i><a href="/admin">Dashbroad</a></div>
                <div class="w-full pt-10 menu-item-admin hover:bg-red-300"><i class="far fa-list-alt mr-4 text-gray-600"></i><a href="/admin/categorys">Categories</a></div>
                <div class="w-full pt-10 menu-item-admin hover:bg-red-300"><i class="fas fa-clipboard-list mr-4 text-gray-600"></i><a href="/admin/products">Product</a></div>
                <div class="w-full pt-10 menu-item-admin hover:bg-red-300"><i class="fas fa-clipboard-list mr-4 text-gray-600"></i><a href="/admin/order">Order</a></div>
                <div class="w-full pt-10 menu-item-admin hover:bg-red-300"><i class="far fa-comments mr-4 text-gray-600"></i><a href="/admin_comment">Comment</a></div>
                <div class="w-full pt-10 menu-item-admin hover:bg-red-300"><i class="fas fa-users mr-4 text-gray-600"></i><a href="/admin_users">Users</a></div>
            </nav>
            <div class="w-full mt-5 flex flex-row">
                <img src="https://thoxay.com.vn/wp-content/themes/thoxay/assets/images/no-avatar.png" class="w-3/12 ml-2 rounded-full" alt="">
                <div class="w-9/12 pt-2 pl-2">
                    ${localStorage.getItem("user") ? `
                    <h2 class="w-full font-semibold">Chào <span id="nameAd" ></span></h2>
                    <a id="logoutAd" class="text-sm">Logout</a>
                    ` : ""}
                </div>

            </div>
        </div>
        `;
    },
    afterRender() {
        const nameAd = document.getElementById("nameAd");
        if (nameAd) {
            nameAd.innerHTML = JSON.parse(localStorage.getItem("user")).name;
        }
        const logoutAd = document.querySelector("#logoutAd");
        if (logoutAd) {
            logoutAd.addEventListener("click", (e) => {
                localStorage.removeItem("user");
                reRender(Signin, "#home");
            });
        }
    },
};
export default NavbarAdmin;
