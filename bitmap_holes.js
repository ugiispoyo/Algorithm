function BitmapHoles(strArr) { 

    let bitmap = strArr.map(a => a.split(''));
    let count = 2;
        
    for(let i = 0; i < bitmap.length; i++) {
        for(let j = 0; j < bitmap[i].length; j++) {
            if(bitmap[i][j] === "0") {
                coverHole(bitmap, i, j, count++);                    
            }      
        }
    }

    return count - 2;   
}
  
function coverHole(bitmap, i, j, number){
    bitmap[i][j] = number;
    if (+bitmap[i][j-1] === 0) {
        bitmap[i][j-1] = number;
        coverHole(bitmap, i, j-1, number); 
    } 
    if (+bitmap[i][j+1] === 0) {
        bitmap[i][j+1]= number;
        coverHole(bitmap, i, j+1, number); 
    }
    if(bitmap[i-1] !== undefined && +bitmap[i-1][j] === 0) {
        bitmap[i-1][j]= number;
        coverHole(bitmap, i-1, j, number); 
    }
    if(bitmap[i+1] !== undefined && +bitmap[i+1][j] === 0) {
        bitmap[i+1][j]= number;
        coverHole(bitmap, i+1, j, number); 
    }
    return;
}