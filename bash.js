//console.log('hello')
//console.log(process.stdout)
//console.dir(process.cwd)
//process.cwd()
process.stdout.write("promot>");
process.stdin.on("data", (data) => {
  
  const cmd = data.toString().trim();
  const pwd = process.cwd()

  process.stdout.write('You typed: ' + pwd);
  process.stdout.write("\nprompt >");
});
