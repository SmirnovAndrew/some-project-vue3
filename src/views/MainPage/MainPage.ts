import { defineComponent } from 'vue';
import { resetStore } from '@/utils/resetStore';
import SomeForm from '@/components/forms/SomeForm/SomeForm.vue';

export default defineComponent({
  name: 'MainPage',

  components: { SomeForm },

  props: {},

  setup() {
    return {
      resetStore
    };
  }
});
