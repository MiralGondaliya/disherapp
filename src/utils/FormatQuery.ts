export const removeEmptyFields = (obj) => {
    const newObj = {};
    for (const key in obj) {
        if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}