function addItem() {
    var a = document.getElementById("list");
    var contact = document.getElementById("contact");
    var li = document.createElement("li");
    li.setAttribute('id', contact.value);
    li.appendChild(document.createTextNode(contact.value));
    a.appendChild(li);
}
function removeItem() {
    var a = document.getElementById("list");
    var contact = document.getElementById("contact");
    var item = document.getElementById(contact.value);
    a.removeChild(item);
}