const pwdFunction = require("./pwd");
const lsFunction = require("./ls");

process.stdout.write("promot>");
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();

    if (cmd === "pwd") {
        process.stdout.write("You typed: " + pwdFunction());
    } else if (cmd === "ls") {
        process.stdout.write("You typed: " + lsFunction());
    }

    process.stdout.write("\nprompt >");
});
