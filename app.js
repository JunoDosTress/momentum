//user story 1 & 3
function btn1() {
  let input1 = document.querySelector("#input1");
  let message1 = document.querySelector("#message1");
  message1.innerHTML = "Hello, " + input1.value + "! I hope you're doing well.";
  document.getElementById("dA").innerHTML = "";
  document.getElementById("hello").innerHTML = "";
  document.getElementById("input1").style.display = "none";
}
//end of user story 1 & 3

//user story 2
function postTime() {
  let today = new Date();
  let month = today.getMonth();
  let monthArr = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  let day = today.getDate();
  let year = today.getFullYear();
  let date = monthArr[month] + " " + day + ", " + year;

  let hour = today.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minute = today.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  let second = today.getSeconds();
  if (second < 10) {
    second = "0" + second;
  }

  let time = hour + ":" + minute + ":" + second;
  let dateTime = document.getElementById("clockDisplay");
  dateTime.innerText = date + " | " + time;

  setTimeout(postTime, 1000);
}
postTime();
// end of user story 2

// user story 4
function btn2() {
  let input2 = document.querySelector("#input2");
  let message2 = document.querySelector("#message2");
  message2.innerHTML = "Your main focus today is " + input2.value + ".";
}
//end of user story 4

// user story 5
let quotes = [
  "If you get tire, Learn TO REST not to quit!  - Bansky",
  "Wherever life takes you, WALK PROUD  - Chief R. Stacey Laforme",
  "Life is like a COIN. You can spend it anyway you wish, BUT you only SPEND IT ONCE.  - Lillian Dickson",
  "Lead from the HEART not from the HEAD.  - Princess Diana",
  "FAITH can move MOUNTAINS  - Matthew 17:20",
  "I have fought the good fight. I have finished the race. I have kept the FAITH  - 2 Timothy 4:7",
  "LOVE never fails  - 1 COrinthian 13:8",
  "Hatred stirred up strifes but LOVE covered all sins  - Proverbs 10:12",
  "Commit to the Lord whatever you do, and you will SUCCEED  - Proverbs 16:3",
  "Make HAPPINESS a HABIT  - Anonymous",
];

const inputVal = document.getElementById("input3");
setInterval(randomQuote, 10000);

document.getElementById("btn3").addEventListener("click", function () {
  if (inputVal.value.length > 0){
  quotes.push(inputVal.value);
  }
  inputVal.value = "";
});
function randomQuote() {
  let randomQuotes = Math.floor(Math.random() * quotes.length);
  const items = document.getElementById("random");
  items.innerHTML = quotes[randomQuotes];
}
randomQuote();

// user Story 6
document.querySelector("#btn4").onclick = function () {
  if (document.querySelector("#toDoList input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#newTask").innerHTML += `
          <div class="newTask">
              <span id="taskname">
                  ${document.querySelector("#toDoList input").value}
              </span>
              <button class="delete">
              <i class="fa-solid fa-trash-can"></i>
              </button>
          </div>
      `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
