<template>
  <v-container class="ma-0 pa-0">
    <v-row no-gutters>
      <v-col>
        <v-text-field
          v-model.number="$v.text.$model"
          autocomplete="off"
          :label="t('shared.quantity')"
          :readonly="locked"
          dense
          :error-messages="textErrors"
          @input="$v.text.$touch()"
          @blur="$v.text.$touch()"
        >
          <template #prepend>
            <v-tooltip
              top
              open-delay="250"
            >
              <template #activator="{on, attrs}">
                <span
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-img
                    :src="require(`~/static/${ore.img}.png`)"
                    :lazy-src="require(`~/static/${ore.img}_min.png`)"
                    :alt="ore.name"
                    width="48"
                    height="48"
                  />
                </span>
              </template>
              <span>{{ ore.name }}</span>
            </v-tooltip>
          </template>
          <template #append>
            <v-container>
              <v-row no-gutters>
                <v-col>
                  <v-btn
                    icon
                    small
                    :aria-label="t('aria.decreaseAmount')"
                    @click="decrementNumber"
                  >
                    <v-icon>
                      mdi-chevron-down
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    icon
                    small
                    :aria-label="t('aria.increaseAmount')"
                    @click="incrementNumber"
                  >
                    <v-icon>
                      mdi-chevron-up
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template #append-outer>
            <v-btn
              icon
              :aria-label="t('aria.delete')"
              @click="emit('toggle-active')"
            >
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col />
    </v-row>
    <v-tooltip
      open-delay="200"
      top
    >
      <template #activator="{ on, attrs }">
        <span
          v-bind="attrs"
          v-on="on"
        >
          <v-checkbox
            v-model="locked"
            class="d-inline-block"
            dense
            :label="t('ores.lockBatch')"
          />
        </span>
      </template>
      <span>{{ t('ores.useButtons') }}</span>
    </v-tooltip>
  </v-container>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, reactive } from 'vue'
import useVuelidator from '@vuelidate/core'
import { decimal } from '@vuelidate/validators'
import { Ore } from '@/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits<{(e: 'toggle-active'): void}>()

const props = defineProps<{ore: Ore}>()

const locked = ref(false)
const number = ref(0)

const form = reactive<{text: number}>({ text: 0 })

const rules = { text: { decimal } }

const v$ = useVuelidator(rules, form)
// TODO v$ errors don't seem to affect the behavior of anything. What is the text field actually for?

const textErrors = computed<Array<string>>(() => {
  const errors: Array<string> = []
  if (!v$.text.$dirty) { return errors }
  !v$.text.decimal && errors.push(t('validate.isDecimal'))
  return errors
})

const incrementNumber = (): void => {
  number.value++
  changeNumberText()
}
const decrementNumber = (): void => {
  number.value--
  changeNumberText()
}
const changeNumberText = (): void => {
  form.text = number.value * props.ore.neededPerBatch
}
// Could this be a computed method?

</script>
