<template>
  <InputText
      :id="`uid${name}`"
      :value="inputValue"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :class="`${!!errorMessage && 'p-invalid ui-error-input'} ${className}`"
      @blur="handleBlur"
      @focus="handleFocus"
      :disabled="disabled"
      v-model="inputValue"
  />
</template>

<script src="./BaseInputText.ts" lang="ts"/>
<style src="./BaseInputText.scss" lang="scss"/>
