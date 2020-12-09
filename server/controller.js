module.exports = {
    getStuff: (req, res) => {
        const db = req.app.get('db')

        db.get_all_stuff().then(dbRes => {
            res.status(200).send(dbRes);
        });
    }
}