<template>
  <div class="ui-message-wrapper">
    <div
      v-for="(item, index) in state.toaster.messages"
      :key="index"
    >
      {{ item.content }}
    </div>
  </div>
</template>

<script src="./BaseToaster.ts" lang="ts"/>
<style src="./BaseToaster.scss" lang="scss"/>
