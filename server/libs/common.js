/**
 * Created by vlad on 12.1.17.
 */
function deleteEmptyField(obj) {
    iterateNestedObj(obj);
    return obj;

    function iterateNestedObj(obj) {
        Object.keys(obj).forEach((key) => {
            if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                iterateNestedObj(obj[key])
            } else {
                if (Object.prototype.toString.call(obj[key]) === '[object Array]') {
                    if (obj[key].length > 0) {
                        obj[key].forEach((item) => {
                            if (Object.prototype.toString.call(item) === '[object Object]') {
                                iterateNestedObj(item);
                            }
                        });

                    } else {
                        delete obj[key];
                    }

                } else if (!obj[key]) {
                    delete obj[key];
                }
            }

        });
    }
}

export {deleteEmptyField}