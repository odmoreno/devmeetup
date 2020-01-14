<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-img
      class="white--text align-end"
      height="400px"
      :src="meetup.imageUrl"
    >
      <v-card-title>{{ meetup.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div class="info--text">{{ meetup.date }} - Where it takes place</div>

      <div>Whitsunday Island, Whitehaven Beach</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>
