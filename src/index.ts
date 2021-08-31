import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @oriolmirosa/jupyterlab_materialdarker extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'MaterialDarker:plugin',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @oriolmirosa/jupyterlab_materialdarker is activated!');
    const style = '@oriolmirosa/jupyterlab_materialdarker/index.css';

    manager.register({
      name: 'Material Darker',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
