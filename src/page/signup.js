const Signup = {
    render() {
        return `<div id="signup" class="w-screen h-screen flex items-center justify-center bg-red-400">
        <form action="" class="w-6/12 m-auto bg-white border border-red-400 border-t-0 shadow-2xl hover:shadow-xl p-3 flex flex-col justify-center items-center">
            <h2 class="my-8 font-display font-bold text-3xl text-black text-center">ĐĂNG KÍ TÀI KHOẢN</h2>
            <div class="relative w-full text-center">
                <i class="fa fa-envelope absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" placeholder="Email" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-user absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" placeholder="Họ và tên" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-user absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" placeholder="Tên đăng nhập" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fas fa-map-marker-alt absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" placeholder="Địa chỉ" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-calendar-alt absolute text-xl" style="color: #FB7185;"></i>
                <input type="datetime" placeholder="Ngày sinh" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-phone-volume absolute text-xl" style="color: #FB7185;"></i>
                <input type="datetime" placeholder="Số điện thoại" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-key absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" placeholder="Mật khẩu" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-key absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" placeholder="Nhập lại mật khẩu" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            
            
            <a href="/" class="py-3 px-20 bg-black hover:bg-red-400 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">ĐĂNG KÍ</a>
        </form>
    </div>`;
    },
};
export default Signup;
