import instance from "./config";

export const getAllCmt = () => {
    const url = `/comments`;
    return instance.get(url);
};
// export const getCmt = (id) => {
//     const url = `/comments/${id}/?embed=products`;
//     return instance.get(url);
// };
export const removeCmt = (id) => {
    const url = `/comments/${id}`;
    return instance.delete(url);
};
export const addCmt = (comment) => {
    const url = `/comments`;
    return instance.post(url, comment);
};
