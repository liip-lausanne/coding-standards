import { defineAsyncComponent } from 'vue';
import DefaultTheme from 'vitepress/theme';

import './custom.css';

export default {
  ...DefaultTheme,

  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);

    ctx.app.component(
      'Versus',
      defineAsyncComponent(() => import('./components/Versus.vue'))
    );
  },
};
