let data = []

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

const sunlightStart = 5;
const sunlightDuration = 8;

let slots = document.getElementsByClassName("slot");

function initObjects() {
    for (let i = 0; i < slots.length; i++) {
        let slotstr = slots[i].id;
        data.push(makeSlot(i, "", slotstr.slice(0, 3), slotstr.slice(3), 0, "", "", "", false));
        slots[i].addEventListener("click", function () {
            let bName = data[i].name;
            let bDay = data[i].day;
            let bTime = data[i].time;
            let bDuration = data[i].duration;
            let bDesc = data[i].desc;
            let bType = data[i].type;
            updateSlot(i, bName, bDay, bTime, bDuration, bDesc, bType);


        });
    }
    render();
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

function updateSlot(i, uName, uDay, uTime, uDuration, uDesc, uType) {
    let fName = document.getElementById("name");
    let fDay = document.getElementById("day");
    let fTime = document.getElementById("start");
    let fDuration = document.getElementById("duration");
    let fDesc = document.getElementById("desc");
    let fType = document.getElementById("type");
    //let id = //Get id
    fName.value = uName;
    fDay.value = uDay;
    fTime.value = uTime;
    fDuration.value = uDuration;
    fDesc.value = uDesc;
    fType.value = uType;


}

/*

    getName = "gregor 101";
    getDay = "mon";
    getTime = "0800";
    getDuration = "1";
    getDesc = "trust the natural recursion";
    getType = "Class";

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
    for (let i = 0; i < getTime.length; i++) {
        if (getTime[i].checked) {
            timeValue = getTime[i].text;
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

    data[id] = makeSlot(id, nameValue, dayValue, timeValue, durValue, typeValue, colorValue, true);
    render();
*/

function updateButton() {
    let getName = document.getElementById("name").value;
    let getDay = document.getElementById("day").value;
    let getTime = document.getElementById("start").value;
    let getDuration = document.getElementById("duration").value;
    let getDesc = document.getElementById("desc").value;
    let getType = document.getElementById("type").value;

    console.log(getName)
    console.log(getDay)
    console.log(getTime)
    console.log(getDuration)
    console.log(getDesc)
    console.log(getType)

    for (let i = 0; i < data.length; i++) {
        if (data[i].day == getDay && data[i].time == getTime) {
            data[i].name = getName;
            data[i].duration = getDuration;
            data[i].desc = getDesc;
            data[i].type = getType;
            data[i].active = true;

        }


    }
    render();
    /*
        data[i].name = uName;
        data[i].day = uDay;
        data[i].time = uTime;
        data[i].duration = uDuration;
        data[i].desc = uDesc;
        data[i].type = uType;
        render();*/
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
    for (let i = 0; i < 5; i++) {
        day.push({
            classTime: 0,        //minutes
            exerciseTime: 0,
            leisureTime: 0,
            studyTime: 0
        })
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < data.length; j++) {
            if (i == 0 && data[j].day == "mon") {
                if (data[j].type == "Class") {
                    day[i].classTime = day[i].classTime + data[j].duration
                }
                else if (data[j].type == "Exercise") {
                    day[i].exerciseTime = day[i].exerciseTime + data[j].duration
                }
                else if (data[j].type == "Leisure") {
                    day[i].leisureTime = day[i].leisureTime + data[j].duration
                }
                else if (data[j].type == "Study") {
                    day[i].studyTime = day[i].studyTime + data[j].duration
                }
            }
            if (i == 1 && data[j].day == "tue") {
                if (data[j].type == "Class") {
                    day[i].classTime = day[i].classTime + data[j].duration
                }
                else if (data[j].type == "Exercise") {
                    day[i].exerciseTime = day[i].exerciseTime + data[j].duration
                }
                else if (data[j].type == "Leisure") {
                    day[i].leisureTime = day[i].leisureTime + data[j].duration
                }
                else if (data[j].type == "Study") {
                    day[i].studyTime = day[i].studyTime + data[j].duration
                }
            }
            if (i == 2 && data[j].day == "wed") {
                if (data[j].type == "Class") {
                    day[i].classTime = day[i].classTime + data[j].duration
                }
                else if (data[j].type == "Exercise") {
                    day[i].exerciseTime = day[i].exerciseTime + data[j].duration
                }
                else if (data[j].type == "Leisure") {
                    day[i].leisureTime = day[i].leisureTime + data[j].duration
                }
                else if (data[j].type == "Study") {
                    day[i].studyTime = day[i].studyTime + data[j].duration
                }
            }
            if (i == 3 && data[j].day == "thu") {
                if (data[j].type == "Class") {
                    day[i].classTime = day[i].classTime + data[j].duration
                }
                else if (data[j].type == "Exercise") {
                    day[i].exerciseTime = day[i].exerciseTime + data[j].duration
                }
                else if (data[j].type == "Leisure") {
                    day[i].leisureTime = day[i].leisureTime + data[j].duration
                }
                else if (data[j].type == "Study") {
                    day[i].studyTime = day[i].studyTime + data[j].duration
                }
            }
            if (i == 4 && data[j].day == "fri") {
                if (data[j].type == "Class") {
                    day[i].classTime = day[i].classTime + data[j].duration
                }
                else if (data[j].type == "Exercise") {
                    day[i].exerciseTime = day[i].exerciseTime + data[j].duration
                }
                else if (data[j].type == "Leisure") {
                    day[i].leisureTime = day[i].leisureTime + data[j].duration
                }
                else if (data[j].type == "Study") {
                    day[i].studyTime = day[i].studyTime + data[j].duration
                }
            }


        }

    }


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
    render();
}


//Renders data into objects
function render() {
    for (let i = 0; i < data.length; i++) {
        if (data[i].active == true) {
            slots[i].innerHTML = '<div class="event"><input id="check" type="checkbox" class="checkbox" /><label for="check"></label>' +
                data[i].name + ' ' + data[i].time + ' ' + data[i].desc + '</div>';
                console.log(data[i].duration);
            if (data[i].duration == 100) { slots[i].classList.add(""); }
            else if (data[i].duration == 200) { slots[i].classList.add("single"); }
            else if (data[i].duration == 320) { slots[i].classList.add("double"); }
            else if (data[i].duration == 440) { slots[i].classList.add("triple"); }
            else if (data[i].duration == 550) { slots[i].classList.add("quad"); }
            else if (data[i].duration == 660) { slots[i].classList.add("quint"); }
            else if (data[i].duration == 770) { slots[i].classList.add("hex"); }
            else if (data[i].duration == 880) { slots[i].classList.add("oct"); }
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

init();