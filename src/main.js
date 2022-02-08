import Navigo from "navigo";
import Header from "./composer/header";
import Footer from "./composer/footer";
import HomePage from "./page/home";
import ProductDetail from "./page/productDetail";
import Signin from "./page/signin";
import Profile from "./page/profile";
import Signup from "./page/signup";
import Dashbroad from "./page/admin/dashbroad";
import ProductsAdmin from "./page/admin/productsAdmin";
import AddProduct from "./page/admin/addProduct";
import EditProduct from "./page/admin/editProduct";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("home").innerHTML = await content.render(id);
    document.getElementById("footer").innerHTML = Footer.render();

    if (content.afterRender) content.afterRender();
};
router.on({
    "/": () => {
        print(HomePage);
    },
    "/signin": () => {
        print(Signin);
    },
    "/signup": () => {
        print(Signup);
    },
    "/products": () => {
        print("Trang sản phẩm");
    },
    "/admin": () => {
        print(Dashbroad);
    },
    "/admin/products": () => {
        print(ProductsAdmin);
    },
    "/addProduct": () => {
        print(AddProduct);
    },
    "/admin/editproduct/:id": ({ data }) => {
        const { id } = data;
        print(EditProduct, id);
    },
    "/about": () => {
        print("Trang Giới thiệu");
    },
    "/contact": () => {
        print("Trang Liên hệ");
    },
    "/tuyenDung": () => {
        print("Trang Tuyển dụng");
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(ProductDetail, id);
    },
    "/profile": () => {
        print(Profile);
    },
});
router.resolve();
