var moment = require('moment');

generate_nonsense = function(input) {
  if (input.includes('hello') || input.includes('hi')) {
    return 'hello';
  } else if (input.includes('bye')) {
    return 'good bye';
  } else if (input.includes('nonsense')) {
    return 'what do you mean I\'m speaking nonsense?';
  } else if (input.length < 5) {
    return 'I can\'t save you but I can heal your soul';
  } else if (input.length < 10) {
    return 'where does it hurt?'
  } else if (input.length < 15) {
    return 'maybe you should go see a real doctor'
  } else {
    return 'You\'re crazy and I can\'t save you';
  }
}

exports.register = function(req, res) {
  date = moment().format("MMMM Do YYYY")
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
  // console.log(req.body);
  output = generate_nonsense(req.body.human);
  return res.status(200).json({
    status: 'Received message',
    eliza: output
  })
}