/* HTML
    <div id="myProgress">
        <div id="myBar">0%</div>
    </div>

    <button onclick="moveProgressBar()">Run</button>
    <button onclick="resetProgressBar()">Reset</button>
    <button onclick="resetProgressBarAnimated()">Reset with animation</button>
*/

/* CSS
#myProgress {
    width: 100%;
    background-color: grey;
}
  
#myBar {
    width: 0;
    height: 30px;
    background-color: #04AA6D;
    text-align: center; // To center it horizontally (if you want)
    line-height: 30px; // To center it vertically
    color: white;
}
*/

function moveProgressBar() {

    let myBar = document.getElementById("myBar");
    let width = 1;

    let interval = setInterval(frame, 10);

    function frame() {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++;
        myBar.style.width = width + "%";
        myBar.innerHTML = width + "%";
      }
    }
}

function resetProgressBar() {
    let myBar = document.getElementById("myBar");
    myBar.style.width = "0%";
    myBar.innerHTML = "0%";
}

function resetProgressBarAnimated() {
    let myBar = document.getElementById("myBar");
    width = 100;

    let interval = setInterval(frame, 10);

    function frame() {
        if (width <= 0) {
          clearInterval(interval);
        } else {
          width--;
          myBar.style.width = width + "%";
          myBar.innerHTML = width + "%";
          if (width == 0) {
            width = 0;
          }
        }
    }
}