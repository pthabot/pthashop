'use strict'

/**
 * Class Declaration
 * Module Export Class
 * Add Model to Controller
 */

const { Book } = require('../model/Book');

class BookController {
    static FindAllBooks(req, res) {
        Book.showAllBooks((err, data) => {
            if (err) {
                console.log('Controller erro', err);
            } else {
                console.log('data', data);
            }
        });
    }
}

module.exports = {
    BookController
};