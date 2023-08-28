'use strict';

let myName;

document.getElementById("btnHello").onclick = () => {
    myName = document.getElementById("txtName").value;

    document.getElementById("txtOutput").innerHTML = `Hello ${myName}`;
};
