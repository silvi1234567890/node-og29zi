function daysOfWeek(input){
  let day = input(Number [0]);
  switch(day){
    case(day === 1): console.log('Monday'); break;
    case(day === 2): console.log('Tuesday'); break;
    case(day === 3): console.log('Wednesday'); break;
    case(day === 4): console.log('Thursday'); break;
    case(day === 5): console.log('Friday'); break;
    case(day === 6): console.log('Saturday'); break;
    case(day === 7): console.log('Sunday'); break;
    default : console.log('Error');
  }

}
daysOfWeek(["1"])