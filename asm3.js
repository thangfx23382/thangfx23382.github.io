"use strict";
// ẨN thông tin cá nhân
const submitbtn = document.querySelector(".submit1");
const thongtincn = document.querySelector(".ttcn");
const formtongquat = document.querySelector(".form-nhaplieu");

const email = document.getElementById("email").value;
const EmailError = document.querySelector(".emailError");

submitbtn.addEventListener("click", function () {
  const email = document.getElementById("email").value;

  if (!email) {
    EmailError.textContent = "Hãy nhập email";
    EmailError.classList.remove("hide");
    console.log(email);
  } else if (isValidEmail(email) && !formtongquat.classList.contains("hide")) {
    formtongquat.classList.add("hide");
    thongtincn.classList.remove("hide");
    console.log(email);
  } else EmailError.textContent = "Định dạng không hợp lệ";
  console.log(EmailError);
  EmailError.classList.remove("hide");
});
function isValidEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
//Ân thông tin nghề nghiệp

const hienthi = document.querySelector(".cot");
const viewmore = document.querySelectorAll(".view-more");

viewmore.forEach((button, index) => {
  console.log(viewmore.length);

  button.addEventListener("click", function () {
    console.log(button);
    console.log(index);
    let parent = button.closest(".cot");
    let details = parent.querySelector(".dulieu");
    console.log(details);

    if (details.classList.contains("hidden")) {
      details.classList.remove("hidden");
      button.textContent = "View less";
    } else {
      details.classList.add("hidden");
      button.textContent = "View more";
    }
  });
});

// Ân thông tin nội dung nghề nghiệp
// const viewbtn = document.querySelector(".view-more");
// const viewlessbtn = document.querySelector(".view-less");

// console.log(gethover.length);

// function gothover() {
//   viewbtn.classList.remove("viewmore-btn-hidden");
// }
// function ungethover() {
//   if (!viewbtn.classList.contains("viewmore-btn-hidden"))
//     viewbtn.classList.add("viewmore-btn-hidden");
// }

// const gethover = document.querySelectorAll(".cot");
// gethover.forEach(function (cot) {
//   const Hoverbtn = cot.querySelector(".view-more");

//   function gothover() {
//     Hoverbtn.classList.remove("viewmore-btn-hidden");
//   }
//   function ungethover() {
//     if (!Hoverbtn.classList.contains("viewmore-btn-hidden"))
//       Hoverbtn.classList.add("viewmore-btn-hidden");
//   }
//   for (let i = 0; i < gethover.length; i++) {
//     gethover[i].addEventListener("mouseover", gothover);
//     gethover[i].addEventListener("mouseleave", ungethover);
//   }
// });

// function ungetInfor() {
//   if (viewmore.innerHTML.includes("less")) {
//     viewmore.textContent = "View more";
//     dulieu.classList.add("hidden");
//     console.log(viewmore);
//     console.log(dulieu[selectedIndex]);
//   }
// }

// viewmore.forEach((button, index) => {
//   console.log(viewmore.length);
//   console.log(index);
//   button.addEventListener("click", function () {
//     console.log(button);
//     let parent = button.closest(".cot");
//     console.log(parent);
//     let details = parent.querySelector(".dulieu");
//     console.log(details);
//     details.classList.remove("hidden");
//     button.textContent = "View less";
//     if (button.innerHTML.includes("less")) {
//       details.classList.add("hidden");
//       button.textContent = "View more";
//     } else if (button.innerHTML.includes("more")) {
//       details.classList.remove("hidden");
//       button.textContent = "View less";
//     }
//   });
// });
