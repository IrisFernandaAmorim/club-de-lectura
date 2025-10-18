function toggle(elem) {
  
  // Toggle the text of the button on click
  let txt = elem.innerText;
  elem.innerText = txt == 'Por leer 📖' ? 'Leído ✅' : 'Por leer 📖';

  // Toggle the color of the button on click
  let bgColor = elem.style.backgroundColor;

  // if there is no background color then we assume
  // we are changing to Leído state.
  if (typeof bgColor === "string" && bgColor.length === 0) {
    elem.style.backgroundColor = 'rgb(124, 113, 113)';
  } else {
    // we have an existing color so we toggle depending on state
    elem.style.backgroundColor = bgColor == 'rgb(97, 212, 134)' ? 'rgb(124, 113, 113)' : 'rgb(97, 212, 134)';
  }
  
}