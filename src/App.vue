<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      temporary=""
    >
      <v-list dense>
        <v-list-item
          v-for="item in menuitems"
          :key="item.title"
          :to = "item.link"
          link>
          <v-list-item-action>
            <v-icon>{{ item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        v-for="item in menuitems2"
        :key="item.title"
        :to = "item.link"
        text>
        <v-icon>{{ item.icon}}</v-icon>
        {{ item.title}}
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>
    
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center">
          <v-col>
            <router-view align="center" justify="center"></router-view>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  href="https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/layouts/layouts/demos/dark.vue"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/bXNzZL"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    menuitems: [
      { icon: 'mdi-view-dashboard', title: 'Dashboard', link: '/' },
      { icon: 'mdi-settings', title: 'Settings', link: '/' },
      { icon: 'mdi-account-supervisor', title: 'View Meetups', link: '/meetups' },
      { icon: 'mdi-map-marker', title: 'Organize Meetup', link: '/meetup/new' },
      { icon: 'mdi-account', title: 'Profile', link: '/profile' },
      { icon: 'mdi-login-variant', title: 'Sign up', link: '/signup' },
      { icon: 'mdi-lock-open', title: 'Sign in', link: '/signin' }
    ],
    menuitems2: [
      { icon: 'mdi-account-supervisor', title: 'View Meetups', link: '/meetups' },
      { icon: 'mdi-map-marker', title: 'Organize Meetup', link: '/meetup/new' },
      { icon: 'mdi-account', title: 'Profile', link: '/profile' },
      { icon: 'mdi-login-variant', title: 'Sign up', link: '/signup' },
      { icon: 'mdi-lock-open', title: 'Sign in', link: '/signin' }
    ]
  }),

  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
