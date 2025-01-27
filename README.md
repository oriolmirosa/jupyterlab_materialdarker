# Material Darker JupyterLab Extension

[![Github Actions Status](https://github.com/oriolmirosa/jupyterlab_materialdarker/workflows/Build/badge.svg)](https://github.com/oriolmirosa/jupyterlab_materialdarker/actions/workflows/build.yml)

This is my port of the [Material Darker theme](http://equinsuocha.io/material-theme/#/darker) for JupyterLab. It's a work in progress.

The extension has now been updated to support JupyterLab 4.x

![The Material Darker theme on JupyterLab](https://user-images.githubusercontent.com/6955013/37124604-0450d6dc-2237-11e8-95d8-0e822ee92c49.png)

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab_materialdarker
```

After launching JupyterLab, select the `Material Darker` theme from the main menu: `Settings` > `JupyterLab Theme` > `Material Darker`

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab_materialdarker
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_materialdarker directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab_materialdarker
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab_materialdarker` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
