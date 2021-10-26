import { defineComponent, ref, watch, computed } from 'vue';
import { useField } from 'vee-validate';
import InputText from 'primevue/inputtext';
import BaseInlineMessage from '@/components/BaseComponents/BaseInlineMessage/BaseInlineMessage.vue';
import type { HTMLInputEvent } from '@/types/eventTypes';

export default defineComponent({
  name: 'BaseInputText',

  components: {
    InputText,
    BaseInlineMessage
  },

  props: {
    className: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String
    },
    value: {
      type: [Number, String]
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean
    },
    icon: {
      type: String
    },
    hasRemoveIcon: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const {
      errorMessage,
      value: inputValue,
      handleInput,
      handleChange
    } = useField(props.name, undefined, { initialValue: props.value });

    const isShowPassword = ref(false);

    watch(() => props.value, () => {
      handleInput(props.value);
    });

    const showPassword = () => {
      isShowPassword.value = true;
    };

    const hidePassword = () => {
      isShowPassword.value = false;
    };

    const resetField = () => {
      handleChange('');
      emit('reset');
    };

    const handleBlur = () => {
      emit('blur');
    };

    const handleFocus = () => {
      emit('focus');
    };

    const handleInputFunction = (e: HTMLInputEvent) => {
      const val = e.target.value;
      handleInput(val);
    };

    const setInputClass = computed(() => {
      return `${(props.type === 'password' || props.icon) && 'p-input-icon-right'} ${props.hasRemoveIcon && 'p-input-remove-icon'}`;
    });

    const hasError = computed(() => {
      return (!!errorMessage.value && errorMessage.value.toString() !== ' ');
    });

    return {
      hasError,
      handleInputFunction,
      errorMessage,
      showPassword,
      hidePassword,
      handleInput,
      isShowPassword,
      inputValue,
      setInputClass,
      handleBlur,
      handleFocus,
      resetField
    };
  }
});
