const fs = require("fs");
const path = require("path")

function write(state){
  const content =  JSON.stringify(state, null, 4);
  
  fs.writeFile(path.resolve(__dirname,"../dist/state.json"), content, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}

module.exports = write;