<template>
  <form
      class="p-fluid ui-from"
      @submit.prevent="handleSubmit"
  >
    <slot name="form-content"></slot>
  </form>
</template>

<script src="./BaseForm.ts" lang="ts"/>
<style src="./BaseForm.scss" lang="scss"/>
