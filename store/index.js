export const actions = {
    async getEvents() {
        let res = await this.$axios.get('api/events')
        console.log(res)
        return res
    },

    async getEvent({ context }, { id }) {
        let res = await this.$axios.get('api/event/' + id)
        return res
    }
  }