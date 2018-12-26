(async () => {
    // let test1 = await asyncProcess('')
    // console.log(test1)

    let test2 = await asyncProcess('鈴木')
    console.log(test2 + 'ゆか')

    console.log('promise test');
    
})();

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