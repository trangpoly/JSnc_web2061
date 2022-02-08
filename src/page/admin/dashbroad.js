import NavbarAdmin from "../../composer/navbarAdmin";

const Dashbroad = {
    render() {
        return `
        <div id = "dashbroad" class="flex flex-row w-screen h-screen">
        ${NavbarAdmin.render()}
        <div class="content w-10/12 h-screen bg-white">
            <div class="w-3/12 float-right mt-4 mr-8 relative bg-gray-100 h-10 pt-2 rounded border-2 hover:border-red-300">
                <i class="fas fa-search absolute left-0 mt-1 ml-2"></i>
                <input type="text" placeholder="Search..." class="ml-10 bg-transparent ">
            </div>
        </div>
        
    </div>
        `;
    },
};
export default Dashbroad;
// test
