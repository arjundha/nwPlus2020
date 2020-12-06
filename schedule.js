//list of timeslots
let data = [

        /*
        id: "",
        name: "",
        day: "",
        time: 0,
        duration: 0, //in minutes    
        desc: "",  //some text
        type: "",
        color: "",
        active: true
        */
    
]

const sunlightStart = 5;
const sunlightDuration = 8;

let slots = document.getElementsByClassName("slot");

function initObjects() {

    for (let i = 0; i < slots.length; i++) {
        let slotstr = slots[i].id;
        data.push(makeSlot(i, "", slotstr.slice(0,3), slotstr.slice(3), 0, "", "", "", false));
        //slots[i].addEventListener("click", initbutton(i));
    }
    render();


}

function initButton(i) {
    //form visible
    //get form items, and prefill with data[i]
    let buttonName = data[i].name;
    let buttonDay = data[i].day;
    let buttonTime = data[i].time;
    let buttonDuration = data[i].duration;
    let buttonDesc = data[i].desc;
    let buttonType = data[i].type;

}

function makeSlot(i, sname, sday, stime, sdur, sdesc, stype, scolor, sactive) {
    return {
        id: i,
        name: sname,
        day: sday,
        time: stime,
        duration: sdur,
        desc: sdesc,
        type: stype,
        color: scolor,
        active: sactive
    };




}

function updateSlot(s) {
    let getName = document.getElementById("");
    let getDay = document.getElementById("");
    let getTime = document.getElementById("");
    let getDuration = document.getElementById("");
    let getDesc = document.getElementById("");
    let getType = document.getElementById("");
    //let id = //Get id

    nameValue = "";
    dayValue = "";
    timeValue = 0;
    durValue = 0;
    descValue = getDesc.innerText;
    typeValue = "";
    colorValue = "";

    for (let i = 0; i < getDay.length; i++) {
        if (getDay[i].checked) {
            dayValue = i + 1;
        }
    }
    for (let i = 0; i < getHour.length; i++) {
        if (getHour[i].checked) {
            hourValue = getHour[i].text;
        }
    }
    for (let i = 0; i < getMin.length; i++) {
        if (getMin[i].checked) {
            minValue = getMin[i].text;
        }
    }
    for (let i = 0; i < getDuration.length; i++) {
        if (durValue[i].checked) {
            durValue = durValue[i].text;
        }
    }
    for (let i = 0; i < getType.length; i++) {
        if (typeValue[i].checked) {
            typeValue = typeValue[i].text;
        }
    }


    if (getType == 1) { colorValue = "FFFFFF"; }
    else if (getType == 2) { colorValue = "FFFFFF"; }
    else if (getType == 3) { colorValue = "FFFFFF"; }
    else if (getType == 4) { colorValue = "FFFFFF"; }

    data[id] = makeSlot(id, nameValue, dayValue, hourValue, minValue, durValue, typeValue, colorValue, true);
    render();
    //}
}



function switchTimezone(t) {
    for (let i = 0; i < data.length; i++) {
        data[i].hour = data[i].hour + t;
    }
    //Need to update fixed labels, rename and hide/add?
    render();
}


function createSummary() {
    let day = [];
    for (let i = 0; i < 5; i++)
        day.push({
            classTime: 0,
            exerciseTime: 0,
            leisureTime: 0,
            studyTime: 0,
        })
    let getClassTime = document.getElementsByClassName("");
    let getExerciseTime = document.getElementsByClassName("");
    let getLeisureime = document.getElementsByClassName("");
    let getStudyTime = document.getElementsByClassName("");

    for (let i = 0; i < 5; i++) {
        getClassTime[i].innerHTML = day[i].classTime;
        getExerciseTime[i].innerHTML = day[i].exerciseTime;
        getLeisureime[i].innerHTML = day[i].leisureTime;
        getStudyTime[i].innerHTML = day[i].studyTime;
    }
    //render();
}


//Renders data into objects
function render() {
    data[10].name = "Gregor 101";
    data[10].time = "0800";
    data[10].active = true;
    for (let i = 0; i < data.length; i++) {
        if (data[i].active == true){
            slots[i].innerText =  data[i].name + " " + data[i].time;

        }
    }


}



//Clears object
function clearAll() {
    for (let i = 0; i < data.length; i++) {
        data[i] = {};
    }
    render();
    initObjects();
}


function init() {
    initObjects();



}

init()