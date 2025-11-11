const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("reset_button");

changeBtn.addEventListener("click", () => {
    const inputNum = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
    }

    if (inputNum >= 1 && inputNum <= 9 && color) {
        const targetDiv = document.getElementById(inputNum);
        if (targetDiv) targetDiv.style.backgroundColor = color;
    } else {
        alert("Please enter a valid ID (1-9) and a color.");
    }
});

resetBtn.addEventListener("click", () => {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
    }
});
