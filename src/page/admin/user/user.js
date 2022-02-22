// import axios from "axios";
import { getAllUser } from "../../../../api/user";
import NavbarAdmin from "../../../composer/navbarAdmin";
// import data from "../../data";

const UsersAdmin = {
    async render() {
        const { data } = await getAllUser();
        return `<div id = "dashbroad" class="flex flex-row w-screen h-screen">
        ${await NavbarAdmin.render()}
        <div class="content w-10/12 h-screen bg-white">
            <div class="w-3/12 float-right mt-4 mr-8 relative bg-gray-100 h-10 pt-2 rounded border-2 hover:border-red-300">
                <i class="fas fa-search absolute left-0 mt-1 ml-2"></i>
                <input type="text" placeholder="Search..." class="ml-10 bg-transparent ">
            </div>
            <h1 class="w-9/12 font-bold text-red-300 text-4xl mt-4 pl-8 mb-12">Users</h1>
            <a href="category/add" class="bg-red-400 hover:bg-red-500 rounded-lg p-2  ml-12 font-mono font-bold text-white">Thêm danh mục</a>
            <table id="table" class="table-auto w-11/12 m-auto mt-5">
                <thead class="w-full border-b-2 border-red-200 bg-rose-100">
                  <tr class=" text-center">
                    <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-center">#</th>
                    <th class="w-3/12 p-3 text-lg font-semibold tracking-wide text-center">Tên</th>
                    <th class="w-5/12 p-3 text-lg font-semibold tracking-wide text-center">Email</th>
                    <th class="w-1/12 p-3 text-lg font-semibold tracking-wide text-center">Vai trò</th>
                  </tr>
                </thead>
                <tbody>
                ${data.map((user, index) => `
                <tr class="hover:bg-red-50 bg-white">
                    <td class="p-3 text-sm text-gray-700 text-center">${index + 1}</td>
                    <td class="p-3 text-sm text-center text-gray-700">${user.name}</td>
                    <td class="p-3 text-sm text-center text-gray-700">${user.email}</td>
                    <td class="p-3 text-sm text-center text-gray-700">${user.id === 1 ? "Quản trị viên" : "Khách hàng"}</td>
                  </tr>
                `).join("")}

                </tbody>
              </table>
        `;
    },
    afterRender() {
        NavbarAdmin.afterRender();
        // const btns = document.querySelectorAll(".btn");
        // // console.log(btns);
        // btns.forEach((btn) => {
        //     const { id } = btn.dataset;

        //     btn.addEventListener("click", () => {
        //         console.log(id);
        //         const confirm = window.confirm("Bạn chắc chắn muốn xóa?");
        //         if (confirm) {
        //             // axios.delete(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`).then(() => {
        //             removeCate(id).then(() => {
        //                 reRender(CategorysAdmin, "#home");
        //             });
        //         }
        //     });
        // });
    },

};
export default UsersAdmin;
