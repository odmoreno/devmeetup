<template>
  <div>
  <v-col row wrap v-for="meetup in meetups" :key="meetup.id" >
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="meetup.imageUrl"
      >
        <v-card-title>{{ meetup.title }}</v-card-title>
        <v-card-subtitle class="text-left">{{ meetup.date }}</v-card-subtitle>
      </v-img>
      <v-spacer></v-spacer>

      <v-card-actions>
        <v-btn
          color="orange"
          text
          right
        >
          Share
        </v-btn>

        <v-btn
          color="orange"
          text
          :to="'/meetups/' + meetup.id"
        >
          view MeetUp
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
  </div>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>
