
  document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("myCheckbox");
    var button = document.getElementById("myButton");

    checkbox.addEventListener("change", function() {
      button.disabled = !this.checked;
    });
  });

  function clearForm() {
    document.getElementById("myForm").reset();}