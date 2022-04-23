function add_element() {
	
    /* Getting text from input */
    const getText = document.getElementById("toText").value;

    /* Getting Value from Select */
    const getSelect = document.getElementById("selectValue").value;

    /* Creating new li for ul */
    const create_li = document.createElement("li");

    if ((getText === '')) {
        alert("You must write something!");
    } else if ((getSelect == "toDo") || (getSelect == "toChange") || (getSelect == "toRepair")) {
        var getOl = document.getElementById(getSelect + "_ol");
        getOl.appendChild(create_li);
        create_li.appendChild(document.createTextNode(getText));
    };
    
    var eraseText = document.getElementById("toText").value = "";
}
