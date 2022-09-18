const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    next();

}

module.exports = withAuth;