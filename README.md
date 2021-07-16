# Figma arvis workflow

> arvis workflow to quick link Figma teams, projects and files

## TODO:

- Figma's API doesn't allow access to getting listings of draft files.
- Figma's API doesn't allow access to get teams. This requires adding team ids to the workflow manually.
- Files open in the desktop app, but teams and projects won't.

## Installation

```
$ npm install --global arvis-figma-shortcuts
```

## Configuration

There are a couple of requirements.

1. You need a [Figma account](https://www.figma.com) and be part of a team.
2. Create a [Personal Access Token](https://www.figma.com/developers/docs#auth-dev-token) so you can reach the API.
3. Add API key to user config (variables)
4. Add a team to your results with the `figma add [teamurl]` command.

## Usage

The workflow lists results of 3 items teams, projects and files.

### Teams

- <kbd>⏎</kbd> Open team page.
- <kbd>⌥</kbd> + <kbd>⏎</kbd> Remove team from workflow.
- <kbd>⌘</kbd> + <kbd>⏎</kbd> Open team page in web browser.

### Projects

- <kbd>⏎</kbd> Open project page.
- <kbd>⌘</kbd> + <kbd>⏎</kbd> Open project page in web browser.

### Files

- <kbd>⏎</kbd> Open file.
- <kbd>⌘</kbd> + <kbd>Y</kbd> OR <kbd>shift</kbd> Quicklook preview of the file.
- <kbd>⌥</kbd> + <kbd>⏎</kbd> Duplicate file to your drafts.
- <kbd>⌘</kbd> + <kbd>⏎</kbd> Open file in web browser.


## License

MIT © [Jon Rohan](http://jonrohan.codes/)

## 🔗 This workflow is converted from [alfred-workflow](https://github.com/jonrohan/alfred-figma).

* Note that there might be some code change or different actions from the original workflow.

* Marked original workflow's creator to author.
