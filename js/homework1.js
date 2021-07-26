const posts = document.querySelector("#post");
const inputValue = document.querySelector("#inputValue");
const employees = ["pista", "gyurca", "lacko"];
posts.innerHTML = employees;

function submit() {
  if (inputValue.value === "") {
    alert("Please type here something");
    return;
  }
  if (inputValue.value !== "") {
    employees.push(inputValue.value);
    posts.innerHTML = employees;
    inputValue.value = "";
    return;
  }
}
