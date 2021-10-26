import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseForm',

  props: {
    handleSubmit: {
      type: Function
    }
  }
});
