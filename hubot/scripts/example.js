'use strict'

// Description:
//   Sara Alabdullatif's scripts for Javascript's project 1


module.exports = (robot) => {


  // 1st Action

  const greetings = ['Hi', 'Hello', 'hello there.', 'Greetings!']
    
  robot.respond(/hi/, function(res) { 
    let rand = Math.floor(Math.random() * greetings.length)
    return res.send(`${greetings[rand]}`);
  })


  // 2nd Action  

  robot.hear(/github/i, (res) => {
    res.send('Here is a link to General Assembly JavaScript Development course page on github: https://github.com/didiloki/Riyadh-JSD/blob/master/README.md')
  })



  //3rd Action

  robot.respond(/remind me to take a deep breath in 5 minutes/, (res) => {
    setTimeout(() => res.send('Reminder: take a deeeeeeeeep breath'), 300000)
  })


  // 4th Action

  const encouragements = ['You are Smart', 'You can do it', 'I believe in you', 'You have got some great skills']
  const helping = ['How can I help you', 'Tell me your problem', 'what is the matter', 'what is bothering you']

  robot.respond(`/ (.*) me/i`, (res) => {
    const request = res.match[1]

    if(request === 'encourage'){
      let rand = Math.floor(Math.random() * encouragements.length)
      return res.send(`${encouragements[rand]}`);
    }
    if(request=== 'help'){
      let rand = Math.floor(Math.random() * helping.length)
      return res.send(`${helping[rand]}`);
    }
  })


  // 5th Action

  robot.respond(/say hi to Bashayer/i, (res) => {
    robot.messageRoom('UFDNEFJ5A', 'Hi Bashayer!');
  })

}

