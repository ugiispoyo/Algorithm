
var sum = 0,
        mean, mode, midpoint, modeStr, re,
        champTotal=0;

// old faithful 
arr.sort(function(a, b) {
    return a - b;
});

// get mean
for (var i =0; i<arr.length;i++){
    sum=sum +arr[i];
}
mean=sum/arr.length;

// get mode
modeStr = arr.join(' ');

for (var j=0; j<arr.length; j++){

    re = new RegExp('(' + arr[j] +')', 'g');

    if (modeStr.match(re).length > champTotal){
        champTotal=modeStr.match(re).length;
        mode=arr[j];
    }

}

mode=parseInt(mode);

return mode == mean ? 1 : 0;