<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
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
        to="/meetups/1"
      >
        view MeetUp
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
