import NavbarAdmin from "../../composer/navbarAdmin";
import data from "../../data";

const EditProduct = {
    render(id) {
        const found = data.find((element) => element.id === id);
        return `
        <div id = "dashbroad" class="flex flex-row w-screen h-screen">
        ${NavbarAdmin.render()}
        <div class="content w-10/12 h-screen bg-white">
            <h1 class="w-full text-center font-bold text-5xl text-red-400 mt-3">Cập nhật sản phẩm</h1>

            <form action="" class="w-10/12 m-auto mt-5 bg-white border border-gray-50 shadow-inner hover:shadow-xl p-3 flex flex-col justify-center items-center">
              <div class="relative pl-5 w-full">
                  <p class="text-gray-500 text-xl font-mono mb-2">Tên sản phẩm:</p>
                  <input type="text" value ="${found.name}" class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Ảnh sản phẩm:</p>
                <img src="${found.image}" class="w-4/12 p-5" alt="">
                <input type="file" class="form-control-file mb-2" id="exampleFormControlFile1">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Giá:</p>
                  <input type="text" value ="${found.price}"  class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Giảm giá:</p>
                  <input type="text" value ="${found.priceSale}"  class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Mô tả:</p>
                  <input type="text" value ="${found.detail}"  class="pl-8 w-10/12 border-b-2 font-display focus:outline-none focus:border-red-300 transition-all duration-500 capitalize text-lg">
              </div>
              <div class="relative pl-5 w-full">
                <p class="text-gray-500 text-xl font-mono mb-2">Loại sản phẩm:</p>
                <select class="w-2/12 border-2 border-gray-400 mb-2">
                <option class="text-gray-500">${found.categorieId}</option>
              </select>
              </div>
              
              
              
              <a href="/" class="py-3 px-20 bg-black hover:bg-red-400 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">THÊM MỚI</a>
          </form>
        </div>
        
    </div>
        `;
    },
};
export default EditProduct;
