const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const User = require('../models')
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
    expect(user.name).toBeDefined()
  })
})
