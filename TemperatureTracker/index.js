class TempTracker {
    constructor() {
      //mode
      this.occurances = Array(140).fill(0)
      this.maxOccurances = 0
      this.mode = null

      //mean
      this.numberOfReadings = 0
      this.totalSum = 0
      this.mean

      //min and max
      this.minTemp = null
      this.maxTemp = null

    }
    insert(temp) {
      //for min max
      if (this.minTemp === null || temp < this.minTemp) {
        this.minTemp = temp
      }
      if (this.maxTemp === null || temp > this.maxTemp) {
        this.maxTemp = temp
      }

      //for mean
      this.numberOfReadings++
      this.totalSum += temp
      this.mean = this.totalSum/this.numberOfReadings

      //for mode
      this.occurances[temp]++
      if (this.occurances[temp] > this.maxOccurances) {
        this.mode = temp
        this.maxOccurances = this.occurances[temp]
      }
    }

    getMax() {
      return this.maxTemp
    }

    getMin() {
      return this.minTemp
    }

    getMean() {
      return this.mean
    }

    getMode() {
      return this.mode
    }
}

const tracker = new TempTracker()

tracker.insert(93)

console.log("mean: ", tracker.getMean())
console.log("min: ", tracker.getMin())
console.log("max: ", tracker.getMax())
console.log("mode: ", tracker.getMode())
