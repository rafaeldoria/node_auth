const User = require('./../../models/user')

module.exports = (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(() => 
            res.redirect('/users'))
        .catch(error => 
            console.log(error))



}