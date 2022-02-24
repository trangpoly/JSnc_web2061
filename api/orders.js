import instance from "./config";

export const addOrder = (order) => {
    const url = `/orders`;
    return instance.post(url, order);
};
export const getOrder = () => {
    const url = `/orders/?idKH=${JSON.parse(localStorage.getItem("user")).id}`;
    return instance.get(url);
};
export const getAllOrder = () => {
    const url = `orders?_sort=id&_order=desc`;
    return instance.get(url);
};
export const getAllOrderAdmin = () => {
    const url = `orders`;
    return instance.get(url);
};
export const update = (order) => {
    const url = `/orders/${order.id}`;
    return instance.put(url, order);
};
