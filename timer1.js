const input = process.argv.slice(2);
const timmer = data => {
  const nums = [ 3,5,9,10,15];
  for (const each of data) {
    const num = Number(each);
    
    if (each === "") {
      break;
    }
    if (num < 0 || isNaN(num)) {
      continue;
    }
  
    if (nums.indexOf(num) >= 0) {
      setTimeout(()=>{
        process.stdout.write(`.\n`);
      }, num * 1000);
    } else {
      setTimeout(()=>{
        process.stdout.write(`Won't beep\n`);
      }, num * 1000);
    }
  }
};

timmer(input);
