
<template>
  <div>
    <p>The User Page</p>
    <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
// import axios from 'axios'

export default {
  data: () => ({
    playerOptions: {
      // videojs options
      muted: true,
      language: 'en',
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      sources: [{
        type: 'video/mp4',
        src: 'http://localhost:3001/ihc/video'
      }],
      poster: './assets/logo.png'
    }
  }),
  created () {
    this.axios.get('video', {
        headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(res => {
        console.log('hola video: ')
        console.log(res)
        console.log(res.config.url)
        this.playerOptions.sources.src = res.config.url
      })
      .catch(error => console.log(error))
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    // ...player event
    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  },
  components: {
    videoPlayer
  }
}
</script>
