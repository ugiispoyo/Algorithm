let arr = str.split(" ");
let result = [];

if(arr === ''){
    return 0;
}

for(let i=0; i< arr.length; i++) {
    if(!isNaN(arr[i]) && isFinite(arr[i])) {
        result.push(arr[i]);

    }else {
        let a = result.pop();
        let b = result.pop();
        if(arr[i] === "+") {
            result.push(parseInt(a) + parseInt(b));
        } else if(arr[i] === "-") {
            result.push(parseInt(b) - parseInt(a));
        } else if(arr[i] === "*") {
            result.push(parseInt(a) * parseInt(b));
        } else if(arr[i] === "/") {
            result.push(parseInt(b) / parseInt(a));
        } else if(arr[i] === "^") {
            result.push(Math.pow(parseInt(b), parseInt(a)));
        }
    }
}

if(result.length > 1) {
    return 0;
} else {
    return result[0];
}