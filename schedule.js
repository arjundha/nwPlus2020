//list of timeslots
let data = [
    {
        id: "",
        name: "",
        day: "",
        time: 0,
        duration: 0, //in minutes    
        desc: "",  //some text
        type: "",
        color: "",
        active: true
    }
]

const sunlightStart = 5;
const sunlightDuration = 8;

function loadObjects() {
    let slots = document.getElementsByClassName("slot");
    for (let i = 0; i < slots.length; i++) {
        let id = slots[i].getElementsById.id;
        data.push.makeSlot(i, "", id.str(0,3), 0, "", "", "", "", false)
        slots[i].addEventListener("click", initbutton(i));
    }



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
    }




}
function logSlot() {
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

}

// function updateSlot(s) {
//     let getName = document.getElementById("");
//     let getDay = document.getElementById("");
//     let getTime = document.getElementById("");
//     let getDuration = document.getElementById("");
//     let getDesc = document.getElementById("");
//     let getType = document.getElementById("");
//     //let id = //Get id

//     nameValue = "";
//     dayValue = "";
//     timeValue = 0;
//     durValue = 0;
//     descValue = getDesc.innerText;
//     typeValue = "";
//     colorValue = "";

//     for (let i = 0; i < getDay.length, i++) {
//         if (getDay[i].checked) {
//             dayValue = i + 1;
//         }
//     }
//     for (let i = 0; i < getHour.length, i++) {
//         if (getHour[i].checked) {
//             hourValue = getHour[i].text;
//         }
//     }
//     for (let i = 0; i < getMin.length, i++) {
//         if (getMin[i].checked) {
//             minValue = getMin[i].text;
//         }
//     }
//     for (let i = 0; i < getDuration.length, i++) {
//         if (durValue[i].checked) {
//             durValue = durValue[i].text;
//         }
//     }
//     for (let i = 0; i < getType.length, i++) {
//         if (typeValue[i].checked) {
//             typeValue = typeValue[i].text;
//         }
//     }


//     if (getType == 1) { colorValue = "FFFFFF"; }
//     else if (getType == 2) { colorValue = "FFFFFF"; }
//     else if (getType == 3) { colorValue = "FFFFFF"; }
//     else if (getType == 4) { colorValue = "FFFFFF"; }

//     data[id] = makeSlot(id, nameValue, dayValue, hourValue, minValue, durValue, typeValue, colorValue, true);
//     render();
//     //}
// }



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
    for (let i = 0; i < data.length; i++) {
        let object = document.getElementById('slot');
        object.innerHTML = ''
    }


}



//Clears object
function clearAll() {
    for (let i = 0; i < data.length; i++) {
        data[i] = {};
    }
    render();
    loadObjects();
}


// function init() {
//     loadObjects();
//     print(daySlot)



// }

// init()