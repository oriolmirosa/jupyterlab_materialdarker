import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_materialdarker extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_materialdarker:plugin',
  description: 'The Material Darker theme for JupyterLab.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_materialdarker is activated!');
    const style = 'jupyterlab_materialdarker/index.css';

    manager.register({
      name: 'Material Darker',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
