
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the MaterialDarker theme for JupyterLab
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'MaterialDarker:plugin',
  requires: [IThemeManager],
  activate: function (app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@oriolmirosa/jupyterlab_materialdarker/index.css';

    manager.register({
      name: 'Material Darker',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};


export default plugin;
