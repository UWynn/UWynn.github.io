let worldJson;
let finalArray = [];
async function getWorlds(callback) {
  let response = await fetch('https://desolate-oasis-19576.herokuapp.com/https://athena.wynntils.com/cache/get/serverList', {
      method: "GET", 
      headers: {
          "Content-Type" : "application/json",
          "User-Agent"   : "UWynn/0.1"
      }
  });
  worldJson = await response.json();
}  
function formatOutputTime(input1, input2, arrayPrep) {
  if (input1 < 10 && input2 < 10) {
    return ("0" + String(input1) + ":0" + String(input2));
  }
  else if (input2 < 10) {
    return (String(input1) + ":0" + String(input2));
  }
  else if (input1 < 10){
    return ("0" + String(input1) + ":" + String(input2));
  }
  else {
    return (String(input1) + ":" + String(input2));
  }
}
async function makeArray() {
  for (i in worldJson['servers']) {
    let dateDiff = parseInt((Date.now() - worldJson['servers'][i]['firstSeen'])/1000);
    let arrayPrep = [];
    arrayPrep.push(String(i));
    arrayPrep.push(formatOutputTime(Math.floor(dateDiff/3600),Math.floor(dateDiff%3600/60)));
    arrayPrep.push(String(Object.keys(worldJson['servers'][i]['players']).length));
    arrayPrep.push(20 - (Math.floor(dateDiff%3600/60))%20);
    finalArray.push(arrayPrep);
  }
}