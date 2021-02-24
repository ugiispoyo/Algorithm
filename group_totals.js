function GroupTotals(strArr) {
    var pairs = strArr.map(function(str) {
      return str.split(":");
    });
    var counts = {};
    for (let i = 0; i < pairs.length; i += 1) {
      if (counts[pairs[i]]) {
        counts[pairs[i][0]] += 1 + parseInt(pairs[i][1]);
      }
    }
    var returnArr = [];
    for (let key in counts) {
      if (counts[key] !== 0) {
        returnArr.push(`${key}:${counts[key]}`);
      }
    }
  
    return returnArr.sort().join(",");
  }