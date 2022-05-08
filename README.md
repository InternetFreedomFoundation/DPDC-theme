# Patrakar Defence Theme

[Ghost](https://ghost.org) theme for patrakar defence [website](https://patrakardefence.in).

## Development

You can create a local instance of Ghost using instructions from [here](https://ghost.org/docs/install/local/).

### Uploading the theme to your local Ghost instance

- Run `npm run zip` in this project.
- Open the [Ghost admin interface](http://localhost:2368/ghost) on your browser.
- Go to Site Settings > Design and upload the zip file created in the earlier step.

### Making changes to the theme

You can run the `npm run dev` in this project to start a Gulp watch task.
This task watches for any changes to files in the project, builds it and copies the built assets into the folder on your local machine where the Ghost theme is installed.

Make sure to set the correct path for the `ghostThemePath` variable in the gulpfile before you run this script.

Alternately, you can also upload the changed theme manually.

Once you've made any required changes in your code editor, repeat the steps in the section above to update the theme.
