/* GET homepage */
const index = (req, res) => {
 res.render('index', { title: 'netflix.clone' });
};
module.exports = { 
 index
};
