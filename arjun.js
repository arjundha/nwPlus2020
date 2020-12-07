let list = []
count = 0

function fillSlot(obj){
    let thisid = obj.cell
    let h = obj.height
    let n = obj.name
    let d = obj.desc
    console.log(h)
    console.log(thisid)
    console.log(typeof thisid)
    let cell = document.getElementById(thisid)
    cell.innerHTML = "<div class=\"event\"" + "style=\"height:" + h + ";\"><input id=\"check\" type=\"checkbox\" class=\"checkbox\" /><label for=\"check\"></label><h3>" + n + "</h3><h5>" + d + "</h5></div>"
}
//<div class="event oct"><input id="check" type="checkbox" class="checkbox" /><label for="check"></label>10:00–11:00 Meeting</div>

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
    count = count + 1
    console.log(count)
    let obj = new Slot(getName, getTime, getDay, getDuration, getDesc, getType)
    console.log(obj)
    list.push(obj)
    console.log(list)
    console.log(document.getElementById("mon0800"))
    fillSlot(obj)
}

function Slot(name, start, day, height, desc, type){
    this.name = name;
    this.start = start;
    this.cell = day + start;
    this.height = height+"%";
    this.desc = desc;
    this.type = type
}
