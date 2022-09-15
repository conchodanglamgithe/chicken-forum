class UserController {
  index(req, res) {
    res.json([
      {
        name: 'user1',
        password: '12345678',
      },
      {
        name: 'user2',
        password: '12345678',
      },
      {
        name: 'user3',
        password: '12345678',
      },
    ])
  }
}

module.exports = new UserController()
