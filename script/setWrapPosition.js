// add simple logic for switching the positions of the potos and texts looking nice   
// position is swap using even odd numbers of the index
const wrapPos = document.querySelectorAll(".wrap-pos");
wrapPos.forEach((wrap, index) => {
  if (index % 2 == 0) wrap.classList.add("wrap");
  else wrap.classList.add("wrap-reverse");
  // console.log(index);
});
// console.log(wrapPos);