var config = require('config.json');
module.exports = function(casp){
  var module ={};
  module.login = function () {
        casp.wait(2000,function () {
        casp.echo('filling form...');
        casp.sendKeys('#username',config.cas.username);
        casp.sendKeys('#password',config.cas.password);
        // casp.capture('username.png');
        casp.click('input[name="_eventId_submit"]');

      });//end of wait function
  }// end of login
  module.run = function(){
    casp.on("page.error", function(msg, trace) {
      casp.echo("Error:    " + msg, "ERROR");
      casp.echo("file:     " + trace[0].file, "WARNING");
      casp.echo("line:     " + trace[0].line, "WARNING");
      casp.echo("function: " + trace[0]["function"], "WARNING");
      errors.push(msg);
    });

    casp.run(function() {
      if (errors.length > 0) {
        casp.echo(errors.length + ' Javascript errors found', "WARNING");
      } else {
        casp.echo(errors.length + ' Javascript errors found', "INFO");
      }
      casp.exit();
    });
  }// end of run
return module;
};
