<template>
  <BaseForm
    :handleSubmit='submitForm'
    class="ui-some-form"
  >
    <template v-slot:form-content>
      <BaseInputText
        name="login"
        placeholder="Логин"
        type="text"
        label="Логин"
      />
      <BaseInputText
        name="password"
        placeholder="Пароль"
        type="password"
        label="Пароль"
      />
      <button type="submit" :disabled="isSubmitting">submit</button>
    </template>
  </BaseForm>
</template>

<script src="./SomeForm.ts" lang="ts"/>
<style src="./SomeForm.scss" lang="scss"/>
