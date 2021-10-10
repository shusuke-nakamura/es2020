try {
    throw new Error('エラーが発生しました。');
} catch (e) {
    console.log('エラーを捕捉しました。');
}

try {
    throw new Error('エラーが発生しました。');
} catch {
    console.log('エラーを捕捉しました。');
}