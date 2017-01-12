/**
 * Created by vlad on 12.1.17.
 */
function deleteEmptyField(obj) {
    Object.keys(obj).forEach((key) => {
        if (!obj[key]) {
            delete obj[key];
        }
    });
    return obj;
}

export {deleteEmptyField}