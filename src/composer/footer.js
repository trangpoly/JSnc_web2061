const Footer = {
    render() {
        return `<div class="w-2/5 ml-20" >
        <h1 class="font-mono text-2xl font-bold">Hệ thống cửa hàng</h1>
        <div class="w-2/3 flex flex-row text-xl pt-1">
          <div class="w-1/5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg></div>
        <div class="w-4/5 text-lg">123A, Cầu Giấy, Hà Nội</div>
        </div>
        <div class="w-1/2 flex flex-row text-xl pt-1">
          <div class="w-1/5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg></div>
        <div class="w-4/5 text-lg">0123456789</div>
        </div>
        <div class="w-1/2 flex flex-row text-xl pt-1">
          <div class="w-1/5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg></div>
        <div class="w-4/5 text-lg">haha@gmail.com</div>
        </div>
      </div>
  
      <div class="w-2/5">
        <h1 class="font-mono text-2xl font-bold">Pages</h1>
        <nav class="w-3/5 text-xl">
          <div class="w-full pt-1 text-lg hover:text-red-500"><a href="/">Trang chủ</a></div>
          <div class="w-full pt-1 text-lg hover:text-red-500"><a href="/tuyensinh">Sản phẩm</a></div>
          <div class="w-full pt-1 text-lg hover:text-red-500"><a href="/chuongtrinhdaotao">Giới thiệu</a></div>
          <div class="w-full pt-1 text-lg hover:text-red-500"><a href="/gocsinhvien">Liên hệ</a></div>
          <div class="w-full pt-1 text-lg hover:text-red-500"><a href="tuyendung">Tuyển dụng</a></div>
        </nav>
      </div>
   
      <div class="w-2/5 ml-50">
        <h1 class="font-mono text-2xl font-bold">Fanpage</h1>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDirtyCoins.VN%2F&tabs=timeline&width=400&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="400" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>`;
    },
};
export default Footer;
