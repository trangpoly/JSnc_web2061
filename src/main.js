import Navigo from "navigo";
import Header from "./composer/header";
import Footer from "./composer/footer";
import Signup from "./page/signup";
import HomePage from "./page/home";
import Signin from "./page/signin";
import Dashbroad from "./page/admin/dashbroad";
import ProductsAdmin from "./page/admin/product/productsAdmin";
import CategorysAdmin from "./page/admin/category/categorysAdmin";
import AddCategory from "./page/admin/category/addCategory";
import AddProduct from "./page/admin/product/addProduct";
import EditProduct from "./page/admin/product/editProduct";
import ProductDetail from "./page/productDetail";
import CartPage from "./page/cart";
import ProductPage from "./page/product";
import EditCategory from "./page/admin/category/editCategory";
import UsersAdmin from "./page/admin/user/user";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("home").innerHTML = await content.render(id);
    document.getElementById("footer").innerHTML = Footer.render();

    if (content.afterRender) await content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/signup": () => {
        print(Signup);
    },
    "/cart": () => {
        print(CartPage);
    },
    "/products": () => {
        print(ProductPage);
    },
    "/signin": () => {
        print(Signin);
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(ProductDetail, id);
    },
    "/admin": () => {
        print(Dashbroad);
    },
    "/admin/products": () => {
        print(ProductsAdmin);
    },
    "/admin/product/add": () => {
        print(AddProduct);
    },
    "/admin/product/edit/:id": ({ data }) => {
        const { id } = data;
        print(EditProduct, id);
    },
    "admin/categorys": () => {
        print(CategorysAdmin);
    },
    "admin/category/add": () => {
        print(AddCategory);
    },
    "admin/category/edit/:id": ({ data }) => {
        const { id } = data;
        print(EditCategory, id);
    },
    "/admin_users": () => {
        print(UsersAdmin);
    },
});
router.resolve();
