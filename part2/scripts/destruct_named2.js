let book = {
    isbn: '987-4-7741-7568-3',
    title: 'AngularJSアプリケーションプログラミング',
    price: 3700
};

function getInfo({ isbn }) {
    console.log(isbn);
}

getInfo(book);