btn = document.createElement('button');
document.body.appendChild(btn);

btn.innerText = "Test";

btn.addEventListener('click', function() {
  console.log("Clicked")
})
