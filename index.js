const driver = {};

const updateDriverWithKeyAndValue = (object, key, value) => {
    return Object.assign({}, object, {[key]: value});
}

const destructivelyUpdateDriverWithKeyAndValue = (object, key, value) => {
    return Object.assign(object, {[key]: value});
}

const deleteFromDriverByKey = (object, key) => {
    const newObj = Object.assign({}, object);
    delete newObj[key];
    return newObj;
}

const destructivelyDeleteFromDriverByKey = (object, key) => {
    delete object[key];
    return object;
}