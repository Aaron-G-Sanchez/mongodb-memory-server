const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Workout } = require('../models')
const { dbConnect, dbDisconnect } = require('../util')

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
    console.log(user)
    expect(user).toBeInstanceOf(User)
    expect(user.name).toBeDefined()
  })
})

describe('Workout model', () => {
  test('should create a Workout model', async () => {
    const workout = await Workout.create({
      level: 'Beginner',
      type: 'Full Body'
    })

    console.log(workout)
    expect(workout).toBeInstanceOf(Workout)
    expect(workout.level).toBeDefined()
  })
})
