let user_name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let complete_time = sessionStorage.getItem("time");

document.querySelector(".input_name").innerHTML = user_name;
document.querySelector(".points").innerHTML = points;
document.querySelector(".complete_time").innerHTML = complete_time;