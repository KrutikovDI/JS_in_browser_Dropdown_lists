const value = document.querySelector(".dropdown__value")
const list = document.querySelector(".dropdown__list")
value.addEventListener("click", (e) => {
  list.classList.add("dropdown__list_active")
  })
list.addEventListener("click", e => {
  e.preventDefault();
  value.textContent = e.target.textContent;
  list.classList.remove("dropdown__list_active")
})