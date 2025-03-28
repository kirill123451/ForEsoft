function deepClone(obj, copied = []) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    for (let i = 0; i < copied.length; i++) {
        if (copied[i].original === obj) {
            return copied[i].copy;
        }
    }

    let copy;

    if (obj instanceof Date) {
        copy = new Date(obj.getTime());
        copied.push({ original: obj, copy: copy });
        return copy;
    }

    if (obj instanceof Map) {
        copy = new Map();
        copied.push({ original: obj, copy: copy });
        obj.forEach((value, key) => {
            copy.set(deepClone(key, copied), deepClone(value, copied));
        });
        return copy;
    }

    if (obj instanceof Set) {
        copy = new Set();
        copied.push({ original: obj, copy: copy });
        obj.forEach(value => {
            copy.add(deepClone(value, copied));
        });
        return copy;
    }

    if (Array.isArray(obj)) {
        copy = [];
        copied.push({ original: obj, copy: copy });
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i], copied);
        }
        return copy;
    }

    copy = {};
    copied.push({ original: obj, copy: copy });
    const keys = Object.keys(obj); 
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        copy[key] = deepClone(obj[key], copied);
    }

    return copy;


    


}