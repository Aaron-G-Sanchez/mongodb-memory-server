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
    // TODO: Look into setting the parent reference as well.
    // creator: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = Workout
