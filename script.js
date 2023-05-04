var icon = document.getElementById("icon");
var count = 0;
function themechange(){
    count++;
    if(count%2 == 0){
        //Light Theme
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        document.documentElement.style.setProperty("--primary", "#2193b0");
        document.documentElement.style.setProperty("--primaryvariant", "#3700b3");
        document.documentElement.style.setProperty("--surface", "#ffffff");
        document.documentElement.style.setProperty("--error", "#b00020");
        document.documentElement.style.setProperty("--secondary", "#000000");
        document.documentElement.style.setProperty("--form", "#f1eeee");
        document.documentElement.style.setProperty("--grey", "lightgrey");
        document.documentElement.style.setProperty("--background", "linear-gradient(to right, rgba(33, 147, 176, 0.5), rgba(109, 213, 237,0.5)), url('https://media.istockphoto.com/photos/digital-padlock-icon-cyber-security-network-and-data-protection-on-picture-id1334595508?b=1&k=20&m=1334595508&s=170667a&w=0&h=nd3aaquCWdZSUrO4_xy_YMDtHnjelxv131yOrSSHebw=')");
        
    }
    else{
        //Dark Theme
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        document.documentElement.style.setProperty("--primary", "#6dd5ed");
        document.documentElement.style.setProperty("--primaryvariant", "#6625ff");
        document.documentElement.style.setProperty("--surface", "#1c1c1c");
        document.documentElement.style.setProperty("--error", "#cf6679");
        document.documentElement.style.setProperty("--secondary", "#ffffff");
        document.documentElement.style.setProperty("--grey", "#757575");
        document.documentElement.style.setProperty("--form", "#323232");
        document.documentElement.style.setProperty("--background", "linear-gradient(to right, rgba(11, 46, 56, 0.5), rgba(56, 56, 56, 0.5)), url('https://media.istockphoto.com/photos/digital-padlock-icon-cyber-security-network-and-data-protection-on-picture-id1334595508?b=1&k=20&m=1334595508&s=170667a&w=0&h=nd3aaquCWdZSUrO4_xy_YMDtHnjelxv131yOrSSHebw=')");
    }
}
const control = document.querySelector(".control");
         const input = document.querySelector("input");
         const weak = document.querySelector(".weak");
         const avg = document.querySelector(".avg");
         const strong = document.querySelector(".strong");
         const text = document.querySelector(".text");
         const show = document.querySelector(".show");
         let rangeWeak = /[a-z]/;
         let rangeAvg = /\d+/;
         let rangeStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
         var opt;
         function trigger(){
           if(input.value != ""){
             control.style.display = "block";
             control.style.display = "flex";
             if(input.value.length <= 3 && (input.value.match(rangeWeak) || input.value.match(rangeAvg) || input.value.match(rangeStrong))){
                opt=1;
             };
             if(input.value.length >= 6 && ((input.value.match(rangeWeak) && input.value.match(rangeAvg)) || (input.value.match(rangeAvg) && input.value.match(rangeStrong)) || (input.value.match(rangeWeak) && input.value.match(rangeStrong)))){
                opt=2;
             };
             if(input.value.length >= 6 && input.value.match(rangeWeak) && input.value.match(rangeAvg) && input.value.match(rangeStrong)){
                opt=3;
             };
             if(opt==1){
               weak.classList.add("active");
               text.style.display = "block";
               text.textContent = "Your password strength is too weak";
               text.classList.add("weak");
             }
             if(opt==2){
               avg.classList.add("active");
               text.textContent = "Your password strength is medium";
               text.classList.add("avg");
             }else{
               avg.classList.remove("active");
               text.classList.remove("avg");
             }
             if(opt==3){
               weak.classList.add("active");
               avg.classList.add("active");
               strong.classList.add("active");
               text.textContent = "Your password strength is strong";
               text.classList.add("strong");
             }else{
               strong.classList.remove("active");
               text.classList.remove("strong");
             }
             show.style.display = "block";
             show.onclick = function(){
               if(input.type == "password"){
                 input.type = "text";
                 show.textContent = "HIDE";
                 show.style.color = "#2193b0";
               }else{
                 input.type = "password";
                 show.textContent = "SHOW";
                 show.style.color = "#757575";
               }
             }
           }else{
             control.style.display = "none";
             text.style.display = "none";
             show.style.display = "none";
           }
         }
