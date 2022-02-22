import instance from "./config";

export const getAllCate = () => {
    const url = `/categoryProducts`;
    return instance.get(url);
};
export const getCate = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.get(url);
};
export const removeCate = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.delete(url);
};
export const addCate = (productCate) => {
    const url = `/categoryProducts`;
    return instance.post(url, productCate);
};
export const search = (id) => {
    const url = `/categoryProducts/${id}?_embed=products`;
    return instance.get(url);
};
export const updateCate = (productCate) => {
    const url = `/categoryProducts/${productCate.id}`;
    return instance.put(url, productCate);
};
