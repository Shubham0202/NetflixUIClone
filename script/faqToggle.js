const ques = document.querySelectorAll('.que');
const ans = document.querySelectorAll('.faq-ans');
const plusIcons = document.querySelectorAll('.plus-icon');

let prevIndex;
console.log(plusIcons);
ques.forEach((que,index)=>{
que.addEventListener('click',function activeFAQ(){
    // ans.forEach(e=>{
    //     e.classList.remove('active-faq-ans');
    // });
    ans[index].classList.toggle('active-faq-ans');
    plusIcons[index].classList.toggle('active-plus-icon');
   
});
});