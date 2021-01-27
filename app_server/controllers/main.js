/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'BH Template' });
};
module.exports = {
index
};
