function formReaction() {
  const args = [].slice.call(arguments)
  return () => {
    console.log(args.join(" "))
  }
}

function Time(since1970) {
  const now = new Date,
        then = new Date(since1970)

  let nowN, thenN

  nowN = +now
  thenN = +then
  this.delta = nowN - thenN
}

Time.prototype.tik = function () {
  const now = new Date()
  return new Date(+now - this.delta)
};

Time.prototype.tok = Time.prototype.tick

// inclusive, exclusive
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyMortalChance(life) {
  life.mayProceed = (didHeTakeCareOfHisBody, howLongHasTheEngineBeenRunning) => {
    // 1 <= health <= 10
    // 0 <= age
    const health = didHeTakeCareOfHisBody,
          age = howLongHasTheEngineBeenRunning

    let statisticalRank, wasAtTheWrongPlaceAtTheWrongTime, variance,
        y

    // see the curve on a graph where x is age
    y = ( 21000 * ( health *2 ) ) * Math.pow(age, -2.2)
    variance = random(0, 26)
    variance = random(0, 2) ? +variance : -variance
    statisticalRank = y + variance

    // the 1% factor
    wasAtTheWrongPlaceAtTheWrongTime = random(0, 100) === random(0, 100)

    if (wasAtTheWrongPlaceAtTheWrongTime || statisticalRank <= 24) return false
    else return true
  }
}

function Heart(enter, exit) {
  this.intact = null
  this.dayOfJoy = null
  this.dayOfGrief = null
  this.stageEnter = enter
  this.stageExit = exit
  this.health = null
  this.theBeginning()
}

Heart.prototype.getAge = function () {
  const born = new Date(this.dayOfJoy),
        present = new Date,
        bornMs = +born,
        presentMs = +present,
        delta = presentMs - bornMs,
        ageMs = bornMs + delta

  return ( ageMs / 1000 / 60 / 24 / 365 )
};

Heart.prototype.theBeginning = function () {
  this.intact = !!"thank you God"
  this.dayOfJoy = clock.tik().toLocaleDateString()
  this.health = 7 // about average
  // first beat
  this.beat()
  const whatIsThisWorld =
  this.firstReaction = formReaction(this.stageEnter)
  whatIsThisWorld()
  // declare entrance:
  console.log(this.dayOfJoy)
};

Heart.prototype.beat = function () {
  console.log("❤️")
  this.intact ?
                setTimeout( arguments.callee.bind(this), (60 / 55) * 1000 ) :
                this.theEnd()

  this.intact = (this.mayProceed && this.mayProceed(this.health, this.getAge()) || true)
};

Heart.prototype.theEnd = function () {
  // ending...
  const farewell = valuethis.finalReaction =
  formReaction( this.stageExit )
  farewell()
  // end.
  this.dayOfGrief = clock.tok().toLocaleDateString()
  // declare exit
  console.log(this.dayOfGrief)
};


const clock = new Time(887954400000)
const life = new Heart(
  "...,,,__--ooOOPP " + "???? " + ":O",
  "I HAVE HAD A HAPPY LIFE AND THANK THE LORD. GOODBYE AND MAY GOD BLESS ALL."
)
applyMortalChance(life)


// All the world's a stage,
// And all the men and women merely players;
// They have their exits and their entrances,
// And one man in his time plays many parts,
