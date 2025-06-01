//your code here

 const delhiRadio = document.getElementById("delhi");
  const blockquote = document.getElementById("info");

  // Add event listener
  document.querySelectorAll("input[name='options']").forEach(radio => {
    radio.addEventListener("change", () => {
      if (delhiRadio.checked) {
        blockquote.style.display = "block";
      } else {
        blockquote.style.display = "none";
      }
    });
  });