export const $$ = (element) => {
    const selectors = document.querySelectorAll(element);
    return selectors.length == 1 ? selectors[0] : selectors;
};

export function getNameCate(data, id) {
    let name = "";
    name = data.find((item) => item.id === id).name;
    return name;
}
export function getUserInCmt(data, id) {
    let user = "";
    user = data.find((item) => item.id === id).name;
    return user;
}
