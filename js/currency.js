const droplist = document.querySelectorAll(".drop-list select");

for (let i = 0; i < droplist.length; i++) {
    for(currency_code in country_code) {
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "NPR" ? "selected"  : "";
        }
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}">${currency_code}</option>`;
        // inserting option tag inside select tag
        droplist[i].insertAdjacentHTML("beforeend",optionTag);
        
    }
}