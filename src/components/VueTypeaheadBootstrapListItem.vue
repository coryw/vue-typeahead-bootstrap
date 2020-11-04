<template>
  <a
    @keydown.tab="$emit('listItemBlur')"
    @keydown.esc.stop.prevent="$emit('listItemBlur')"
    @keydown.down.prevent
    @keydown.up.prevent
    @keyup.down="$parent.selectNextListItem($event)"
    @keyup.up="$parent.selectPreviousListItem($event)"
    tabindex="0"
    href="#"
    :class="textClasses"
  >
    <div class="sr-only">{{screenReaderText}}</div>
    <div aria-hidden="true" class="py-2 px-2 border hover:bg-blue-300 active:bg-blue-400" style="border-top: 0px;">
      <slot name="suggestion" v-bind="{ data: data, htmlText: htmlText }">
        <span v-html="htmlText"></span>
      </slot>
    </div>
  </a>
</template>

<script>
export default {
  name: 'VueTypeaheadBootstrapListItem',

  props: {
    active: {
      type: Boolean
    },
    data: {},
    screenReaderText: {
      type: String
    },
    htmlText: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    backgroundVariant: {
      type: String
    },
    textVariant: {
      type: String
    }
  },

  computed: {
    textClasses() {
      const classes = ['vbst-item', 'list-group-item', 'list-group-item-action', 'list-none', 'bg-blue-300']
      if (this.backgroundVariant) classes.push(`bg-${this.backgroundVariant}`)
      if (this.textVariant) classes.push(`text-${this.textVariant}`)
      if (this.disabled) classes.push('disabled')
      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
  a:not(.disabled){
    cursor: pointer;
  }
  a.disabled{
    cursor: default;
    pointer-events: none;
  }
</style>
