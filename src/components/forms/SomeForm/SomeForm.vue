<template>
  <BaseForm
    :handleSubmit='submitLoginForm'
    class="ui-login-form"
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
      <BaseButton label="Войти" :disabled="isSubmitting" />
    </template>
  </BaseForm>
</template>

<script src="./FormLogin.ts" lang="ts"/>
<style src="SomeForm.scss" lang="scss"/>
