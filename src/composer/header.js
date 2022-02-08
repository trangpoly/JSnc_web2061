const Header = {
    render() {
        return `<div id="logo" class="w-1/5 h-min-50">
        <img src="https://bizweb.dktcdn.net/100/369/010/themes/845311/assets/logo.png?1641999926133" class="w-full" alt="">
    </div>
    <nav class="w-3/5 h-50 grid grid-rows-1 grid-flow-col gap-5 font-mono text-2xl font-bold">
        <div class="w-full pt-7 text-center menu-item"><a href="/">Trang chủ</a></div>
        <div class="w-full pt-7 text-center menu-item"><a href="/products">Sản phẩm</a></div>
        <div class="w-full pt-7 text-center menu-item"><a href="/about">Giới thiệu</a></div>
        <div class="w-full pt-7 text-center menu-item"><a href="/contact">Liên hệ</a></div>
        <div class="w-full pt-7 text-center menu-item"><a href="/tuyenDung">Tuyển dụng</a></div>
    </nav>
    <ul class="w-1/5 grid grid-rows-1 grid-flow-col gap-3" style="padding-left: 50px; padding-right: 30px;">
        <li href="" class="group m-auto h-6 w-6 "><svg xmlns="http://www.w3.org/2000/svg" class=" hover:stroke-red-700"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div
            class="grid grid-flow-row-4 w-2/12 p-2 absolute top-full right-8 bg-red-300 text-white mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500">
            <form action="" class="h-8 w-11/12">
                <input type="text" class="h-full w-full" placeholder="  Tìm kiếm" >
            </form>
        </div></li>
        <li href="" class="m-auto h-6 w-6 "><svg xmlns="http://www.w3.org/2000/svg" class="hover:stroke-red-700"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </li>
        <li href="" class="group m-auto h-6 w-6"><svg xmlns="http://www.w3.org/2000/svg"
                class="hover:stroke-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div
                class="grid grid-flow-row-4 w-2/12  p-5 absolute top-full right-0 bg-red-300 text-white mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500">
                <ul class="p-2">
                    <li><a class="mega-sub-item-title" href="#">Quản lý tài khoản</a></li>
                    <li><a class="mega-sub-item" href="/admin">Đăng nhập admin</a></li>
                    <li><a class="mega-sub-item" href="/signin">Đăng nhập</a></li>
                    <li><a class="mega-sub-item" href="/viewprofile">Thông tin tài khoản</a></li>
                    <li><a class="mega-sub-item" href="/signup">Đăng kí</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>`;
    },
};
export default Header;
