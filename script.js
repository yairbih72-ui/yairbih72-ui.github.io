const btn = document.getElementsByClassName("pad");
const text_bar = document.querySelector("textarea");
let group_all = [];
let group_operators = [];
let group_numbers = [];
let next = false;
let num = "";
let result;
let reset = false

for(let i = 0; i < 12; i++) {
    btn[i].addEventListener('click',tabel)
}

function tabel() {
    if (reset == true) {
        text_bar.value = "";
        reset = false
        num = "";
        group_all = [];
        group_operators = [];
        group_numbers = [];
    }
    const text_ = this.getAttribute("id");
    if (text_ == "-" || text_ == "+") {
        group_numbers.push(parseInt(num));
        num = "";
        text_bar.value += (" " + text_ + " ");
    }
    else if (text_ == "=") {
        group_numbers.push(parseInt(num));
        for(let j = 0; j< group_all.length; j++) {
            if (group_all[j] == "-" || group_all[j] == "+") {
                group_operators.push(group_all[j]);
            }
        }
        result = group_numbers[0]
        for (let start = 0; start < group_operators.length; start++) {
            if (group_operators[start] == "+") {
                result += group_numbers[start+1]; 
            }
            else if (group_operators[start] == "-") {
                result -= group_numbers[start+1]; 
            }
        }
        text_bar.value += (" " + text_+ " " + result);
        reset = true
    }
    else {
        text_bar.value += text_;
        num += text_;
    }
    group_all.push(text_);

}
