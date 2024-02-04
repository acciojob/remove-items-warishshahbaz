//your JS code here. If required.

let selectedval;

function handleSubmit() {
  selectedval = document.getElementById("colorSelect").value;
  let select = document.querySelectorAll(".selectVal");
  for (let i = 0; i < select.length; i++) {
    if (select[i].value === selectedval) {
      select[i].classList.remove("unhide");
      select[i].classList.add("hide");
    } else {
      select[i].classList.remove("hide");
      select[i].classList.add("unhide");
    }
  }
 
}