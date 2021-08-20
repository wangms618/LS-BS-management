import axios from './axios'

const Class = {
  async getClassList(isOpen = false) {
    try {
      const res = await axios.get('/getClassList')
      console.log(res)
      if (!isOpen) return res.data
      else {
        return res.data.filter(el => el.isOpen == 1)
      }
    } catch (err) {
      return []
    }
  },
}

export default Class