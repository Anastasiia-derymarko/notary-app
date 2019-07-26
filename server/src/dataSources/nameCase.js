const execPhp = require('exec-php');

const NameCase = (names, type) => new Promise((resolve, reject) => {
    execPhp('./bd/nameCase.php', (error, php) =>{
        const results = names.map(name => new Promise((res, rej) => {
            php[type](name, (err, result) =>{
                if (result) res(result);
                if (err) rej(err);
            });
        }));

        Promise.all(results).then((results) => resolve(results));
    });
});

module.exports = NameCase;
