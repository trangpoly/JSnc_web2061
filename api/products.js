import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product);
};
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};
export const getCmt = (id) => {
    const url = `/products/${id}/?_embed=comments`;
    return instance.get(url);
};
export const searchbyName = (name) => {
    const url = `products/?name_like=${name}`;
    return instance.get(url);
};
export const rangeProduct = (name) => {
    const url = `products?_sort=price&_order=${name}`;
    return instance.get(url);
};
