
import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the MaterialDarker theme for JupyterLab
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'MaterialDarker:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'Material Darker',
      isLight: false,
      load: function() {
        return manager.loadCSS('@oriolmirosa/jupyterlab_materialdarker/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
