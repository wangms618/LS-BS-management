import axios from './axios'

const User = {
  async checkUsername(username) {
    try {
      const res = await axios.get('/checkUsername', {
        params: {
          username
        }
      })
      return res.data.hasUser
    } catch (err) {
      return false
    }
  },
  async register(data) {
    try {
      const res = await axios.post('/register', data)
      console.log(res);
      return res.data
    } catch (err) {
      return false
    }
  },
  async login(username, password) {
    try {
      const res = await (axios.post('/login', { username, password }))
      return res.data
    } catch (err) {
      return false
    }
  }
}

export default User