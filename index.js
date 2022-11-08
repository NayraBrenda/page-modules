const showHideResult = (box) => {
  const result = document.querySelector(`#${box} .result`);
  const download = document.querySelector(`#${box} .download`);
  const button = document.querySelector(`#${box} .button`);
  result.classList.toggle("hide");
  download.classList.toggle("clicked");
  button.classList.toggle("clicked");
};
