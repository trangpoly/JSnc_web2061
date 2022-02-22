import toastr from "toastr";
import { signup } from "../../api/user";
import { $$ } from "../utils/selector";
import "toastr/build/toastr.min.css";

const Signup = {
    render() {
        return `<div id="signup" class="w-screen h-screen flex items-center justify-center bg-red-400">
        <form id="formSignup" action="" class="w-5/12 m-auto bg-white border border-red-400 border-t-0 shadow-2xl hover:shadow-xl p-3 flex flex-col justify-center items-center">
            <h2 class="my-8 font-display font-bold text-3xl text-black text-center">ĐĂNG KÍ TÀI KHOẢN</h2>
            <div class="relative w-full text-center">
                <i class="fa fa-user absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" id="name" placeholder="Họ và tên" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-envelope absolute text-xl" style="color: #FB7185;"></i>
                <input type="email" id="email" placeholder="Email" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-key absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" id="password" placeholder="Mật khẩu" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 text-lg">
            </div>
            <button class="py-3 px-20 bg-black hover:bg-red-400 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">ĐĂNG KÍ</button>
        </form>
    </div>`;
    },
    afterRender() {
        $$("#formSignup").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    name: $$("#name").value,
                    email: $$("#email").value,
                    password: $$("#password").value,
                });
                toastr.success("Đăng ký thành công");
                if (data) {
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
                $$("#formSignup").reset();
            }
        });
    },
};
export default Signup;
