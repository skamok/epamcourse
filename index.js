function pleaseRunThis() {
  trap()
}
function trap() {
  pleaseRunThis()
}
// pleaseRunThis() // https://medium.com/@diep.christopher/javascript-call-stack-and-stack-overflow-7da2903fcb5c
// https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/

var x = [];

function createSomeNodes() {
    var div,
        i = 100,
        frag = document.createDocumentFragment();
    for (;i > 0; i--) {
        div = document.createElement("div");
        div.appendChild(document.createTextNode(i + " - "+ new Date().toTimeString()));
        frag.appendChild(div);
    }
    document.getElementById("nodes").appendChild(frag);
}
function grow() {
    x.push(new Array(1000000).join('x'));
    createSomeNodes();
    setTimeout(grow,1000);
}

document.getElementById('button').addEventListener('click', () => {
  grow();
})