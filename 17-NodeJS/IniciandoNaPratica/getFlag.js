const getFlagValue = require("./exportsGetFlag");
console.log(`Oi ${getFlagValue("--name")}. ${getFlagValue("--greeting")}`);