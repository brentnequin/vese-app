export const actions = {
    async getEvents() {
        let res = await this.$axios.get('/events')
        return res
    },

    async getEvent({ context }, { id }) {
        let res = await this.$axios.get('/event/' + id)
        return res
    }
  }