import moment from 'moment'

export const DateMixin = {
  filters: {
    formatDate (str, outputFormat = 'dddd hA, MMMM Do YYYY') {
      return moment(str).format(outputFormat)
    }
  },
}