var inputBox = document.body.querySelector(".text");
var noteBox = document.body.querySelector(".text1");
var impBox = document.body.querySelector(".importance");
var messageBox = document.body.querySelector(".message");
var list = [];

document.body.querySelector(".submit").addEventListener("click", function () {
  if (inputBox.value == "coolStudent123") {
    document.body
      .querySelector(".submit1")
      .addEventListener("click", function () {
        messageBox.innerHTML = "";
        if (noteBox.value.length > 2 && Number(impBox.value) <= 5) {
          list.push({
            note: noteBox.value,
            importance: impBox.value
          });
          renderList();
        } else if (noteBox.value == Number || impBox != Number) {
          messageBox.innerHTML = "Enter correct character type.";
        } else {
          messageBox.innerHTML = "Enter requiered field.";
        }
      });
  } else {
    messageBox.innerHTML = "Wrong username";
  }
});
function renderList() {
  document.body.querySelector(".list").innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var itemEle = document.createElement("h6");
    itemEle.innerHTML =
      "Note: " + list[i].note + ", Importance: " + list[i].importance;
    document.body.querySelector(".list").appendChild(itemEle);
  }
}