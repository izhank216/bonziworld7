const crypto = require('crypto');
var unhashed =  [
  "ziggymoncherkikoze99567",
"sianseamusdestroyer146213",
"gooberramalteee105710",
"tardisher110566",
"moonmankkk173985",
"c2x133t983015",
    "demintheniggapoop129412"
  ];

  var hashed = [];

  unhashed.forEach(str => {
    hashed = [...hashed, crypto.createHash("sha256").update(str).digest("hex")];
  });
  console.log(JSON.stringify(hashed));