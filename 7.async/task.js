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
    let result;
    let removingAlarmIndex = this.alarmCollection.findIndex((item) => item.id == id);
    if (removingAlarmIndex >= 0) {
      this.alarmCollection.splice(removingAlarmIndex, 1);
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  getCurrentFormattedTime() {
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let result;
    if ((hours < 10) && (minutes < 10)) {
      result = (`0${hours}:0${minutes}`)
    } else if (hours < 10) {
      result = (`0${hours}:${minutes}`)
    } else if (minutes < 10) {
      result = (`${hours}:0${minutes}`)
    } else {
      result = (`${hours}:${minutes}`)
    }
    return result;
  }

  start() {
    let now = this.getCurrentFormattedTime();
    function checkClock(alarm) {
      if (now == alarm.time) {
        alarm.callback();
      };
    }

    if (this.timerId == null) {
      this.timerId = setInterval(this.alarmCollection.forEach(checkClock),);
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

phoneAlarm.addClock("09:00", () => console.log('Подъём'), 1);
phoneAlarm.addClock("09:01", () => console.log('Подъём же!'), 2);
// phoneAlarm.addClock("09:00", () => console.log('Почти проспал'));

phoneAlarm.addClock("09:00", () => {
  console.log('Подъём давай уже');
  phoneAlarm.clearAlarms();
  phoneAlarm.printAlarms();  
  }, 3);

  phoneAlarm.addClock("09:05", () => console.log('Подъём блин'), 1);

  phoneAlarm.printAlarms();

  phoneAlarm.start();

