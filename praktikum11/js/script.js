document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW"); 
        setTimeout(()=>alert("DRAW"), 300);
    }

    // jika pilihan komputer menang
    if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Komputer Win");
    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Komputer WINN");
    }else if(pilihanKomputer == "Scissor" && pilihanUser == "Paper"){
        alert("komputer WINNN");
    }

    // jika pilihan user menang 
}
// Jika pilihan user menang
if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
    alert("USER WIN");

}else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
    alert("USER WINN");

}else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
    alert("USER WINN");
}
