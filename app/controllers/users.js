var moment = require('moment');

generate_nonsense = function(input_case) {
  input = input_case.toLowerCase();

  if (input.includes('hello') || input.includes('hi')) {
    return 'hello';
  } else if (input.includes('computer')) {
    return 'i am a computer';
  } else if (input.includes('who')) {
    return 'i am eliza';
  } else if (input.includes('what')) {
    return 'what do you want peasant';
  } else if (input.includes('bye')) {
    return 'good bye';
  } else if (input.includes('nonsense')) {
    return 'what do you mean I\'m speaking nonsense?';
  } else if (input.length < 3) {
    return 'I can\'t save you but I can heal your soul';
  } else if (input.length < 6) {
    return 'where does it hurt?'
  } else if (input.length < 9) {
    return 'maybe you should go see a real doctor'
  } else if (input.length < 12) {
    return 'yo you download the new fire emblem game?'
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