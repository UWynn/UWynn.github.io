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
async function makeArray() {
  for (i in worldJson['servers']) {
    let dateDiff = parseInt((Date.now() - worldJson['servers'][i]['firstSeen'])/1000);
    let arrayPrep = [];
    arrayPrep.push(String(i));
    if (Math.floor(dateDiff%3600/60) < 10 && Math.floor(dateDiff/3600) < 10) {
      arrayPrep.push("0" + String(Math.floor(dateDiff/3600)) + ":0" + String(Math.floor(dateDiff%3600/60)));
    }
    else if (Math.floor(dateDiff%3600/60) < 10) {
      arrayPrep.push(String(Math.floor(dateDiff/3600)) + ":0" + String(Math.floor(dateDiff%3600/60)));
    }
    else if (Math.floor(dateDiff/3600) < 10){
      arrayPrep.push("0" + String(Math.floor(dateDiff/3600)) + ":" + String(Math.floor(dateDiff%3600/60)));
    }
    else {
      arrayPrep.push(String(Math.floor(dateDiff/3600)) + ":" + String(Math.floor(dateDiff%3600/60)));
    }
    arrayPrep.push(String(Object.keys(worldJson['servers'][i]['players']).length));
    arrayPrep.push(String(20 - Math.floor(dateDiff%3600/60)%20));
    finalArray.push(arrayPrep);
  }
}