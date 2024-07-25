const { model } = require('mongoose')
const UserSchema = require('./User')
const WorkoutSchema = require('./Workout')

const User = model('User', UserSchema)
const Workout = model('Workout', WorkoutSchema)

module.exports = {
  User,
  Workout
}
