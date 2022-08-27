//grab the token sent from front end, validate by useing fn .verify, then if it's valid, continue with request, if not, return an error

const { verify } = require('jsonwebtoken')

const tokenValidator = (req, res, next) => {
    const tokenForAccess = req.header("tokenForAccess")

    if (!tokenForAccess) {
        return res.json({error: "Please log in to post"})
    } else {
        try {
            const tokenIsValid = verify(tokenForAccess, "secretkeytoaccess");
            req.user = tokenIsValid;

            if (tokenIsValid) {
                return next();
            }
        } catch(err) {
            return res.json({ error: err })
        }
    }
} 


module.exports = { tokenValidator }