const { Schema } = require('mongoose')

const Workout = new Schema(
  {
    level: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = Workout
