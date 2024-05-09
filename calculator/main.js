const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN") {
            inputValue.innerText = "";
        }
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerText.trim(); 
    });
});
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operation = e.target.innerText.trim();
        let lastValue = inputValue.innerText.slice(-1); 

        switch (operation) {
            case "=":
                if (!isNaN(lastValue)) {
                    try {
                        inputValue.innerText = eval(inputValue.innerText);
                    } catch (error) {
                        inputValue.innerText = "Error"; 
                    }
                }
                break;
            case "AC":
                inputValue.innerText = "0"; 
                break;
            case "DEL":
                if (inputValue.innerText.length > 1) {
                    inputValue.innerText = inputValue.innerText.slice(0, -1); 
                } else {
                    inputValue.innerText = "0"; 
                }
                break;
            default:
                if (!isNaN(lastValue)) {
                    inputValue.innerText += operation;
                }
                break;
        }
    });
});
