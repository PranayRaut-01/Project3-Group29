const express = require('express');
const router = express.Router();
const aws = require("aws-sdk");

///////////////// [ IMPORTED CONTROLLERS ] /////////////////
const userController= require("../controllers/userController");
const bookController = require("../controllers/bookController")
const reviewController = require("../controllers/reviewController")
const middleware = require ("../middleware/auth")


////////////////////////////aws////////////////////////////////

aws.config.update(
    {
        accessKeyId: "AKIAY3L35MCRUJ6WPO6J",
        secretAccessKey: "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",
        region: "ap-south-1"
    }
)


///////////////// [ ALL API's HERE ] /////////////////
router.post('/register',userController.createUser)
router.post('/login',userController.loginUser)

router.post('/books',middleware.authenticUser,middleware.authorizedUser,bookController.createBook)
router.post('/books/:bookId',bookController.createBookCover)
router.get ('/books',middleware.authenticUser,bookController.getBook)
router.get ('/books/:bookId',middleware.authenticUser,bookController.getBookByPathParam)
router.put('/books/:bookId',middleware.authenticUser,middleware.authorizedUser,bookController.updateBook)
router.delete("/books/:bookId",middleware.authenticUser,middleware.authorizedUser,bookController.delBook)

router.post("/books/:bookId/review",reviewController.createReview)
router.put('/books/:bookId/review/:reviewId',reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReviews)

///////////////// [ EXPRORTED ROUTHER ] /////////////////
module.exports = router;
