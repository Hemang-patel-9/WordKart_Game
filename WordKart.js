const arr = [
  "chemistry",
  "apple",
  "number",
  "keyboard",
  "holiday",
  "computer",
  "nostrils","colorless","aligator","volume","stickers","pokemon","range","borex","exit","rust","iron","micro","train","dogs","vacume","station","moon","bright","lilith","lump","split","swing","dumb","boron","marathon","physics","pyramid","iconic","nails","stable","bathroom","socking","sink","leopard","dove","lizard","napkin","cousion","telephone","rice","elevator","wallpaper","eyes","tree"
];
const hint = ["Name of Subject related to liquid.","Name of food who grew up in cold area.","Synonyms to digit.","Computer input part.","What is on Sunday?","Technological instrument.","you breath in and out by which holes?","Synonyms of acrometics or neutral.","Water animal who is cold-blooded and powerful mouth.","volume.","a piece of paper with writing or a picture on one side that you can stick onto something","Name of anime.","some perticuler area called.","Used in carrom board probably once in game.","The act of leaving something.","related to decomposition of metal or decay.","The part of hemoglobin","The small particles unit.","The huge vihicle of travelling","One of the loyal animal","just total empty place","the place or position in which something or someone stands or is assigned to stand or remain.","Major reason of tide",
"Shining or Clear meterial","Religion signifies the demons.","A swelling under the skin","To seperate By.","Children playing a lot with this instrument in garden.","Moron","5th Element of Periodic table","Related to race","Subject related to Atom","Largest shape with flat surface and 5 total sides.","Generally restricted to more recent, influential or unique","Some body dead cells stored on this part.","Synonym of concious","The place of relaxing and resting in some of the cases.","Type of Expression related to surprise","A bowl-shaped plumbing fixture for washing hands, dishwashing, and other purposes","Animals who runs fast which body color yellow.","Name of famous brand of soap which name is like bird.","Scientfic name is Lacertilia.","a type of cloth which used to clean something","similer to pillows","grahambel's invention.","Known as white gold in india.","kind of lift in buildings","Background of Mobile phone.","body part which is in pair.","The enemy of oxygen at night."];

//needed variables
let x;
var input;
let _id = 0;
var word;
let rows = 8;
let block;
let main;

function init()
{
  //append division start
  let b=document.getElementById('init');
  let containerDiv=document.createElement('div');
  containerDiv.setAttribute('class','container');
  b.append(containerDiv);
  
  let innerDiv1=document.createElement('div');
  let innerDiv2=document.createElement('div');
  innerDiv1.setAttribute('class','title');
  innerDiv2.setAttribute('class','game');
  innerDiv2.setAttribute('id','main');
  containerDiv.append(innerDiv1);
  containerDiv.append(innerDiv2);

  let titlespan=document.createElement('span');
  titlespan.innerHTML="WordKart";
  let para=document.createElement('p');
  para.setAttribute('id','hint');
  
  innerDiv1.append(titlespan);
  innerDiv1.append(para);
  //append division end
  
  //calling hero function
  chooseRandomWord();
}

function chooseRandomWord() {
  //choosing random word --start
  x = Math.floor(Math.random() * arr.length);
  word = arr[x].split("");
  //choosing random word --end
  document.getElementById('hint').innerHTML="Hint : "+hint[x];
  MakeRowsCols(word);
}
//Making Rows And Columns for game start
function MakeRowsCols(word) {
  var parent = document.getElementById("main");
  for (let x = 1; x <= word.length; x++) {
    var sbutton = document.createElement("button");
    sbutton.setAttribute("class", "sbutton");
    sbutton.innerHTML = "GO";
    for (let y = 1; y <= word.length; y++) {
      input = document.createElement("input");
      input.classList.add("getInput");
      parent.appendChild(input);
      input.setAttribute("id", `${x}${y}`);
      input.addEventListener("change",validInput);
      sbutton.setAttribute("id", Number.parseInt(x));
      sbutton.setAttribute("autocomplete", "off");
    }
    parent.append(sbutton);
    let row = document.createElement("br");
    parent.appendChild(row);
  }
  GetInputWords();
}
function validInput()
{
  let a;
  let b;

  // alert(word.length)
  for(a=1;a<=word.length;a++)
  {
    for(b=1;b<=word.length;b++)
    {
      a=Number.parseInt(a);
      b=Number.parseInt(b);
      
      let val=document.getElementById(`${a}${b}`).value;
      isLength=Number.parseInt(val.length);
      if(isLength>1)
      {
        alert('noonononon');
        // alert(isLength[0]);
      }
    }
  }
}
function GetInputWords() {
  for (let w = 1; w <= word.length; w++) {
    for (let d = 1; d <= word.length; d++) {
      document.getElementById(`${w}${d}`).removeAttribute("disabled");
    }
    document.getElementById(w).removeAttribute("disabled");
  }
  _id++;
  for (let w = 1; w <= word.length; w++) {
    if (_id !== w) {
      for (let d = 1; d <= word.length; d++) {
        document.getElementById(`${w}${d}`).setAttribute("disabled", "true");
      }
      document.getElementById(w).setAttribute("disabled", "true");
    }
  }
  document.getElementById(_id).addEventListener("click", checkAnswer);
}
function checkAnswer() {
  for (let x = 1; x <= word.length; x++) {
    if (x == _id) {
      for (let y = 1; y <= word.length; y++) {
        let ans = document.getElementById(`${x}${y}`);
        if (ans.value.toLowerCase() == word[y - 1]) {
          ans.style.backgroundColor = "green";
        } else if (
          word.toString().indexOf(ans.value.toLowerCase()) > -1 &&
          ans.value.toLowerCase() != ""
        ) {
          ans.style.backgroundColor = "yellow";
        } else {
          ans.style.backgroundColor = "red";
        }
      }
    }
  }
  let cnt = Number.parseInt(0);
  for (let x = 1; x <= word.length; x++) {
    if (
      document.getElementById(`${_id}${x}`).style.backgroundColor == "green"
    ) {
      cnt++;
    }
  }
  if (cnt == Number.parseInt(word.length)) {
    Swal.fire({
      title: "Congratulations !<br/>You've won the WordKart",
      text: "Are you sure want to play another one?",
      icon: "success",
      showCancelButton: true,
      customClass: "swal-wide",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Play again!",
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      } else {
        window.close();
      }
    });
  } else if (_id == word.length) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "It's ~" + word.join("") + "~\tBetter Luck Next Time!",
      footer: "",
      showCancelButton: true,
      customClass: "swal-wide",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Play Again",
    }).then((res) => {
      if (res.isConfirmed) {
        location.reload();
      } else {
        windows.close();
      }
    });
  }
  cnt = 0;
  GetInputWords();
}
