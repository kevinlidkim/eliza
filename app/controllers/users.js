

exports.register = function(req, res) {
  date = new Date();
  // console.log(req.body.name);
  var obj = {
    name: req.body.name,
    date: date
  }

  return res.status(200).json({
    status: 'Post success',
    obj: obj
  })
}

exports.send_text = function(req, res) {
  // do some logic here
  return res.status(200).json({
    status: 'Received message'
  })
}