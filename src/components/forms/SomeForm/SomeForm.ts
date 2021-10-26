import { defineComponent } from 'vue';
import { object, string } from 'yup';
import { useForm } from 'vee-validate';
import FORM_DICTIONARY from '@/dictionaries/validation/dictionary.json';
import BaseForm from '@/components/BaseComponents/BaseForm/BaseForm.vue';
import BaseInputText from '@/components/BaseComponents/BaseInputText/BaseInputText.vue';
import BaseButton from '@/components/BaseComponents/BaseButton/BaseButton.vue';
import { useStore } from 'vuex';
import { MODULES_NAMES } from '@/store/names/modules.name';
import { USERS_ACTIONS_TYPE } from '@/store/names/action.name';
import appendToastMessage from '@/utils/appendToastMessage';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'FormLogin',

  components: {
    BaseForm,
    BaseInputText,
    BaseButton
  },

  setup(_, { emit }) {
    const { dispatch } = useStore();
    const schema = object({
      login: string()
        .required(FORM_DICTIONARY.REQUIRED),

      password: string()
        .required(FORM_DICTIONARY.REQUIRED)
    });

    const { handleSubmit, setErrors, isSubmitting } = useForm({
      validationSchema: schema
    });

    const { push } = useRouter();

    const submitLoginForm = handleSubmit(async(values) => {
      try {
        await dispatch(`${MODULES_NAMES.USERS}/${USERS_ACTIONS_TYPE.FETCH_LOG_IN}`, values);
        appendToastMessage(FORM_DICTIONARY.SUCCESS, 'success');
        emit('submitted');
        await push('/');
      } catch (error) {
        appendToastMessage(FORM_DICTIONARY.INCORRECT_LOGIN_OR_PASSWORD);
        setErrors({ login: ' ', password: ' ' });
        emit('serverError');
      }
    });

    return {
      submitLoginForm,
      isSubmitting
    };
  }
});
