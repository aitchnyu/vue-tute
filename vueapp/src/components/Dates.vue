<template>
  <div >
    <div v-for="date of dates" :key="date.label">{{date.label}} {{date.value}}</div>
  </div>
</template>

<script>
import moment from 'moment/moment'
import 'moment-timezone'

export default {
  name: 'Dates',
  data () {
    return {
      dates: [
        { label: 'Arabic', value: moment().locale('ar').format('LLL') },
        { label: 'Hindi', value: moment().locale('hi').format('LLL') },
        { label: 'LA timezone', value: moment().tz('America/Los_Angeles').format() }
      ]
    }
  }
}
</script>
