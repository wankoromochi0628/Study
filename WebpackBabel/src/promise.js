function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 引数valueが未定義であるか同課によって成否を判定
            if (value) {
                resolve(`入力値：${value}`);
            } else {
                reject('入力は空です');
            }
        }, 5);
    });
}


asyncProcess('')
    .then(response => response)
    .then(response => console.log(response))
    .catch(error => console.log(`エラー:${error}`));


asyncProcess('鈴木')
    .then(response => response　+ '佑都')
    .then(response => console.log(response))
    .catch(error => console.log(`エラー:${error}`));

console.log('promise test');