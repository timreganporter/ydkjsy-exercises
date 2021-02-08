function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
  symbols: [ "X", "Y", "Z", "W", "$", "*", "<", "@" ],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = ( this.position + 100 + randMax(100) ) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position == randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  }
};

var slotMachine = {
  reels: [ Object.create(reel), Object.create(reel), Object.create(reel) ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
     return this.reels.reduce(function(acc, reel) {
      acc[0].push(reel.symbols[(reel.position - 1) % reel.symbols.length]);
      acc[1].push(reel.display());
      acc[2].push(reel.symbols[(reel.position + 1) % reel.symbols.length]);
      return acc;
    }, [[],[],[]])
    .reduce(function(acc, line) { 
      acc.push(line.join(" | "))
      return acc;
    }, [])
    .join("\n");
  }
};

slotMachine.spin();
console.log(slotMachine.display());


