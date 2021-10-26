import { defineComponent, watch } from 'vue';
import { object, string } from 'yup';
import { useForm } from 'vee-validate';
import BaseForm from '@/components/baseComponents/BaseForm/BaseForm.vue';
import BaseInputText from '@/components/baseComponents/BaseInputText/BaseInputText.vue';
import { DICTIONARY } from '@/dictionaries/validation/dictionary';

export default defineComponent({
  name: 'FormLogin',

  components: {
    BaseForm,
    BaseInputText
  },

  setup() {
    const schema = object({
      login: string()
        .required(DICTIONARY.REQUIRED),

      password: string()
        .required(DICTIONARY.REQUIRED)
    });

    const { handleSubmit, isSubmitting, values } = useForm({
      validationSchema: schema
    });

    // on any form field change trigger
    watch(() => {
      return {
        login: values.login,
        password: values.password
      };
    }, () => {
      console.log(values);
    });

    const submitForm = handleSubmit(async() => {
      return console.log(values);
    });

    return {
      submitForm,
      isSubmitting
    };
  }
});
