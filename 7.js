function filterProps(object, ...propsToFilter) {
    const filteredObject = {...object};
    propsToFilter.forEach(prop => delete filteredObject[prop]);
    return filteredObject;
}

const object = {a: 1, b: 2, c: 3, d: 4};
console.log(filterProps(object, "b", "d")); 
