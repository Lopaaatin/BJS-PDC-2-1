class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, actionFunction, ident) {
    if (ident == undefined) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.')
    }
    // try {
      else if (!this.alarmCollection.find((item) => item.id == ident)) {
        this.alarmCollection.push({id: ident, time: time, callback: actionFunction});
      }
    // }
    // catch {
      else {console.error('Будильник с таким id уже существует');}
    // }
  }

  removeClock(id) {
    let removingAlarmIndex = this.alarmCollection.findIndex((item) => item.id == id);
    if (removingAlarmIndex >= 0) {
      this.alarmCollection.splice(removingAlarmIndex, 1);
      return true;
    } 
    return false;
  }

  getCurrentFormattedTime() {
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // let result;
    // if ((hours < 10) && (minutes < 10)) {
    //   result = (`0${hours}:0${minutes}`)
    // } else if (hours < 10) {
    //   result = (`0${hours}:${minutes}`)
    // } else if (minutes < 10) {
    //   result = (`${hours}:0${minutes}`)
    // } else {
    //   result = (`${hours}:${minutes}`)
    // }
    if (hours < 10) {
      hours = (`0 + ${hours}`)
    }
    if (minutes < 10) {
      minutes = (`0 + ${minutes}`)
    }
    return (`${hours}:${minutes}`);
  }

  start() {
    let now = this.getCurrentFormattedTime();
    function checkClock(alarm) {
      if (now == alarm.time) {
        alarm.callback();
      };
    }

    if (this.timerId == null) {
      this.timerId = setInterval(this.alarmCollection.forEach(checkClock), 60000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

  printAlarms() {
    this.alarmCollection.forEach(function(item) {
      console.log(`Будильник ${item.id} заведён на ${item.time}`);
    })
  }

}

let phoneAlarm = new AlarmClock;
let date = new Date;

phoneAlarm.addClock([`${date.getHours()}:${date.getMinutes()}`], () => console.log('Подъём'), 1);
phoneAlarm.addClock(`${date.getHours()}:${date.getMinutes()+1}`, () => console.log('Подъём же!'), 2);
// phoneAlarm.addClock("09:00", () => console.log('Почти проспал'));

phoneAlarm.addClock(`${date.getHours()}:${date.getMinutes()+2}`, () => {
  console.log('Подъём давай уже');
  phoneAlarm.clearAlarms();
  phoneAlarm.printAlarms();  
  }, 3);

  phoneAlarm.addClock(`${date.getHours()}:${date.getMinutes()+5}`, () => console.log('Подъём блин'), 1);

  phoneAlarm.printAlarms();

  phoneAlarm.start();

