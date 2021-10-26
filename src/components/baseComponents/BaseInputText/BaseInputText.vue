<template>
  <div class="p-field ui-input-field">
    <label
      :class="`${disabled && 'ui-disabled' } ${!!errorMessage && 'ui-error-label' }`"
      :for='`uid${name}`'
    >
      {{ label }}
    </label>
    <span :class="setInputClass">
      <InputText
        :id="`uid${name}`"
        :value="inputValue"
        :name="name"
        :type="(type === 'password' && isShowPassword) ? 'text' : type"
        :placeholder="placeholder"
        :class="`${!!errorMessage && 'p-invalid ui-error-input'} ${className}`"
        @input="handleInputFunction($event)"
        @blur="handleBlur"
        @focus="handleFocus"
        :disabled="disabled"
        autocomplete="yf"
      />
      <i
        v-if="type === 'password'"
        class="pi pi-eye"
        @mousedown.left="showPassword"
        @mouseup.left="hidePassword"
        @mouseleave="hidePassword"
      />
      <i
        v-if="!!icon"
        :class="`pi ${icon}`"
      />
      <span
        v-if="hasRemoveIcon && inputValue"
        class="reset-icon"
        @click="resetField()"
      >
        <img src="@/assets/icons/close.svg" />
      </span>
    </span>
    <BaseInlineMessage
      v-if="hasError"
      :message-text="errorMessage"
    />
  </div>
</template>

<script src="./BaseInputText.ts" lang="ts"/>
<style src="./BaseInputText.scss" lang="scss" />
