const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Workout } = require('../models')
const { dbConnect, dbDisconnect } = require('../dbUtil')

beforeAll(async () => {
  await dbConnect()
})

afterAll(async () => {
  await dbDisconnect()
})

describe('User model', () => {
  test('should create a User model', async () => {
    const user = await User.create({
      name: 'Chravis',
      email: 'chravis@gmail.com'
    })

    // console.log(user)
    expect(user).toBeInstanceOf(User)
    expect(user.name).toBeDefined()
    expect(user.name).toBe('Chravis')
  })
})

describe('Workout model', () => {
  test('should create a Workout model', async () => {
    const workout = await Workout.create({
      level: 'Beginner',
      type: 'Full Body'
    })

    // console.log(workout)
    expect(workout).toBeInstanceOf(Workout)
    expect(workout.level).toBeDefined()
    expect(workout.level).toBe('Beginner')
  })
})

describe('User/Workout relation', () => {
  test('should add a workout to a user', async () => {
    const user = await User.findOne({
      name: 'Chravis',
      email: 'chravis@gmail.com'
    }).populate('workouts')

    const workout = await Workout.create({
      level: 'Intermediate',
      type: 'Upper Body'
    })

    user.workouts.push(workout)
    await user.save()

    // console.log(user)
    expect(user).toBeInstanceOf(User)
    expect(user.workouts).toBeInstanceOf(Array)
    expect(user.workouts.length).toBe(1)

    // The commented out code below works the same as the code above.
    // const userWithWorkout = await User.findOne({ name: 'Chravis' }).populate(
    //   'workouts'
    // )
    // // console.log(userWithWorkout)
    // expect(userWithWorkout).toBeInstanceOf(User)
    // expect(userWithWorkout.workouts).toBeInstanceOf(Array)
    // expect(userWithWorkout.workouts.length).toBe(1)
  })
})
