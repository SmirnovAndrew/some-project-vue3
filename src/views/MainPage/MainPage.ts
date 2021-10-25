import { defineComponent } from 'vue';
import { resetStore } from '@/utils/resetStore';

export default defineComponent({
  name: 'MainPage',

  components: {},

  props: {},

  setup() {
    return {
      resetStore
    };
  }
});
