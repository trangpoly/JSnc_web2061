import toastr from "toastr";
import { signin } from "../../api/user";
import { $$ } from "../utils/selector";
import "toastr/build/toastr.min.css";

const Signin = {
    render() {
        return `<div id="signin">
        <div class="w-screen h-screen flex flex-col justify-center items-center bg-white">
        <form id="formSignin" class="w-5/12 m-auto border border-slate-100 border-t-0 shadow-2xl hover:shadow-xl p-3 flex flex-col justify-center items-center">
            <img src="https://www.maxpixel.net/static/photo/640/Icon-Female-Avatar-Female-Icon-Red-Icon-Avatar-6007530.png" alt="" class="w-32">
            <h2 class="my-8 font-display font-bold text-3xl text-black text-center">Welcome to you</h2>
            <div class="relative w-full text-center">
                <i class="fa fa-user absolute text-xl" style="color: #FB7185;"></i>
                <input type="email" id="email" placeholder="Username" class="pl-8 w-6/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-lock absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" id="password" placeholder="Password" class="pl-8 w-6/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-lg">
            </div>
            <a href="#" class="w-full ml-40 mt-4 font-semibold text-black hover:text-red-400" >Quên mật khẩu?</a>
            <p class="w-full text-right mr-40">Bạn chưa có tài khoản? <a href="/signup" class=" text-gray-600 font-bold hover:text-red-400" >Đăng kí ngay</a></p>

            <button class="py-3 px-20 bg-black hover:bg-red-400 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Login</button>
        </form></div>
    </div>`;
    },
    afterRender() {
        $$("#formSignin").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // Call api. Nếu đăng nhập thành công sẽ trả về obj data
                const { data } = await signin({
                    email: $$("#email").value,
                    password: $$("#password").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                if (data.user.id === 1) {
                    toastr.success("Đăng nhập Admin thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/admin/";
                    }, 2000);
                } else {
                    toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/";
                    }, 2000);
                }
            } catch (error) {
                // Nếu lỗi
                toastr.success(error.response.data);
                $$("#formSignin").reset();
            }
        });
    },
};
export default Signin;
