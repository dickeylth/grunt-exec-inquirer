# grunt-exec stdin not work with inquirer demo

## Get Started

1. `npm install`;
2. `grunt exec:test`

and you'll get:

```
~/dev/github/grunt-exec-inquirer grunt exec:test
Running "exec:test" (exec) task

> grunt-exec-inquirer@0.0.0 abc ~/dev/github/grunt-exec-inquirer
> node ./inquirer.js

? Please choose xxx:  (Use arrow keys)
❯ foo
  bar ^[[B^[[B^[[B^[[B^[[B^[[B^C
```