<template>
  <v-footer
    absolute
    v-bind="localAttrs"
    color="primary"
    padless
  >
    <v-card
      flat
      tile
      color="primary"
      width="100%"
      class="text-center"
    >
      <v-card-text class="ma-0 pa-0">
        <v-container fluid>
          <v-row dense>
            <v-col>
              <span>
                &copy; {{ new Date().getFullYear() }} -- <a href="#">{{ t('footer.github') }}</a>
              </span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <v-btn
                text
                link
                href="#"
                target="_blank"
                rel="noopener"
                plain
              >
                Github
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
