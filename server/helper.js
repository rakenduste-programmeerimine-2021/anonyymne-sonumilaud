module.exports.genericErrorHandler = (err, res) => {
  console.error(err);
  res.sendStatus(500);
}