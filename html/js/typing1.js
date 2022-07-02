const content = "The limits of my language mean \n the limits of my world.";
const text = document.querySelector(".js_text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
        sleep(1500);
      };
    }

    function sleep(delay){ 
      const start = new Date().getTime(); 
      while (new Date().getTime() < start + delay); 
    }

setInterval(typing, 100);