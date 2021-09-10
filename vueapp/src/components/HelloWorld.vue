<template>
  <div class="hello">
    {{finalGreeting}}, {{finalName}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String,
    greeting: String
  },
  data () {
    return {
      finalName: this.name,
      finalGreeting: this.greeting
    }
  }
}
</script>
