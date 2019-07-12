class Clock {
  constructor() {
    const date = new Date();
    this.hour = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();


    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {
    const time = `${this.hour}` + ':' + `${this.min}` + ':' + `${this.sec}`;
    console.log(time);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.sec += 1;
    if (this.sec>=60){
      this.sec = 0;
      this.min+=1;
      if (this.min>=60){
        this.min = 0;
        this.hour += 1;
        if (this.hour >= 25){
          this.hour=0;
        }
      }
    }
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

// const clock = new Clock();
// rl.question('What do you think of JavaScript? ', answer => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.question('What do you really think?', answer => {
//     console.log(`You said: ${answer}. Thank you for your honesty.`);
//     rl.close();
//   });
// });


// // require module from Node
const readline = require('readline');
// Create the interface from the module
// this will allow us to receive user input
// via the terminal
const rl = readline.createInterface({
  input: process.stdin,
  // eslint-disable-next-line no-undef
  output: process.stdout
});


const addNumbers = function(sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    rl.close();
    return completionCallback(sum);
  }
  if(numsLeft > 0){
    const questionCallBack= (answer) => {
      sum += parseInt(answer)
      console.log(`Total Sum: ${sum}`);
      addNumbers(sum, numsLeft-1, completionCallback );
    }
    rl.question("Please enter a number", questionCallBack);

  }
}

const askIfGreaterThan= function(el1, el2, callback){

  const questionCallBack = (answer) => {
    if (answer === "yes")
    { 
        callback(true);
    }
    else{
      callback(false);
    }
  }
  rl.question(`Is ${el1} Bigger than ${el2}`, questionCallBack)


}
const innerBubbleSortLoop = function(arr, i , madeAnySwaps, outerBubbleSortLoop)
{

 
  if( i == (arr.length -1))
  {
    outerBubbleSortLoop(madeAnySwaps);
  }

  if (i < arr.length-1)
  {
    askIfGreaterThan(arr[i], arr[i+1],(answer) => 
    {
      if( answer===true ){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);

    } )

  }

}

const absurdBubbleSort = function(arr, sortCompletionCallBack){

  const outerBubbleSortLoop = (madeAnySwaps) =>  {
    if (madeAnySwaps === true)
    {
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    }
    else{
      sortCompletionCallBack(arr);
    }

  }

  outerBubbleSortLoop(true);


}

// innerBubbleSortLoop([1,2,6,3,9], 0, false, (arr)=> console.log(arr));
Function.prototype.myBind = function(context)
{
  // const that = this;
    return ()=> {
    this.apply(context);
    }
  }
class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

rl.close();


Function.prototype.myThrottle = function (interval) {
  let tooSoon = false;

  return (...args) => {
    if (tooSoon === false){
      tooSoon = true;
      setTimeout( () => {tooSoon = false}, interval);
      this(...args)
    }
  }

}

Function.prototype.myDebounce = function