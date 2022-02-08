const Signin = {
    render() {
        return `<div id="signin">
        <div class="w-screen h-screen flex flex-col justify-center items-center bg-white">
        <form action="" class="w-5/12 m-auto border border-slate-100 border-t-0 shadow-2xl hover:shadow-xl p-3 flex flex-col justify-center items-center">
            <img src="https://www.maxpixel.net/static/photo/640/Icon-Female-Avatar-Female-Icon-Red-Icon-Avatar-6007530.png" alt="" class="w-32">
            <h2 class="my-8 font-display font-bold text-3xl text-black text-center">Welcome to you</h2>
            <div class="relative w-full text-center">
                <i class="fa fa-user absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" placeholder="Username" class="pl-8 w-6/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <div class="relative mt-8 w-full text-center">
                <i class="fa fa-lock absolute text-xl" style="color: #FB7185;"></i>
                <input type="text" placeholder="Password" class="pl-8 w-6/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
            </div>
            <a href="#" class="w-full ml-40 mt-4 font-semibold text-black hover:text-red-400" >Quên mật khẩu?</a>
            <p class="w-full text-right mr-40">Bạn chưa có tài khoản? <a href="/signup" class=" text-gray-600 font-bold hover:text-red-400" >Đăng kí ngay</a></p>
            
            <a href="/" class="py-3 px-20 bg-black hover:bg-red-400 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Login</a>
        </form></div>
    </div>`;
    },
};
export default Signin;
