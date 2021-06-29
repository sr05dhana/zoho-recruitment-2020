let str = "WELCOME";
let n = str.length;
let res = '';
let m = Math.floor(n / 2);
for (let i = m; i < n; i++) {
    res =  str.slice(m, i + 1)
    console.log(Array(n - res.length).fill('\xa0').join('') + res);
}

for (let i = 0; i < m; i++) {
    const finRes = str.slice(0, i + 1);
    const lrs = res + finRes;
    console.log(Array(n - lrs.length).fill('\xa0').join('') + lrs);
}
