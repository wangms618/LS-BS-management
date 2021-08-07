import axios from './axios'

const Class = {
  async getClassList(isOpen = false) {
    try {
      const res = await axios.get('/getClassList')
      if (!isOpen) return res.data.data
      else {

        return res.data.data.filter(el => el.isOpen == 1 )
      }
    } catch (err) {
      return []
    }
  },
}

export default Class