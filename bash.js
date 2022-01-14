const pwdFunction = require("./pwd");
const lsFunction = require("./ls");
const catFunction = require ("./cat");

process.stdout.write("promot>");
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    const index = cmd.indexOf(' ');
    const file = cmd.slice(index);

    if (cmd === "pwd") {
        process.stdout.write("You typed: " + pwdFunction());
    } else if (cmd === "ls") {
        process.stdout.write("You typed: " + lsFunction());
    } else if (cmd === 'cat'){
        process.stdout.write("You typed: " + catFunction());
    }

    process.stdout.write("\nprompt >");
});
