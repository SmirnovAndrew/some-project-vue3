import { defineComponent, computed } from 'vue';
import { useField } from 'vee-validate';
import InputText from 'primevue/inputtext';

export default defineComponent({
  name: 'BaseInputText',

  components: {
    InputText
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
    }
  },

  setup(props, { emit }) {
    const {
      errorMessage,
      value: inputValue
    } = useField(props.name, undefined, { initialValue: props.value });

    const setInputClass = computed(() => {
      return `${(props.type === 'password' || props.icon) && 'p-input-icon-right'}`;
    });

    const handleBlur = () => {
      emit('blur');
    };

    const handleFocus = () => {
      emit('focus');
    };

    return {
      setInputClass,
      errorMessage,
      inputValue,
      handleBlur,
      handleFocus
    };
  }
});
