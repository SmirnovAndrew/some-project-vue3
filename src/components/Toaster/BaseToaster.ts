import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Toaster',

  props: {
    lifeTime: {
      type: Number,
      default: 5000
    }
  },
  setup() {
    const { state } = useStore();

    return {
      state
    };
  }
});
