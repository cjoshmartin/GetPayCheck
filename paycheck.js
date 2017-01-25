
/*
Name: Josh Martin
Date: Dec. 27,2016
cjoshmartin.com
description: gets paycheck information for IU network
Status: can't not save to data.json file..
Frequency: every two weeks
*/
// figure out how to get imports working...
var casper = require('casper').create();
var xpath = require("casper").selectXPath;

var config = require('config.json');
var gobals = require('gobals.js')(casper);
var fs =require('fs');

var pay;
var date;
var current ={"paycheck":{}};
casper.start(config.money.paycheck.url,function () {
    gobals.login(config.cas); // logins in to cas
    this.wait(3000,function () {
      date = (this.fetchText(xpath('//table[9]/tbody/tr/td'))).trim();
      date = date.substring(0,10);
      // this.echo("the date of pay: "+date);
      current.paycheck.date=date;
      // this.echo("current.date = "+current.date);
      pay = (this.fetchText(xpath('//tr[6]/td'))).trim();
      pay = pay.substring(1,7);
      // this.echo("current balance: " + pay);
      current.paycheck.pay =parseFloat(pay);
      // this.echo("current.pay = " + current.pay);
      console.log("output: " + JSON.stringify(current,null,' '));
      fs.write('../data/paycheck.json',JSON.stringify(current,null,' '),'w');
    });
  });
// });


casper.on("page.error", function(msg, trace) {
  this.echo("Error:    " + msg, "ERROR");
  this.echo("file:     " + trace[0].file, "WARNING");
  this.echo("line:     " + trace[0].line, "WARNING");
  this.echo("function: " + trace[0]["function"], "WARNING");
  errors.push(msg);
});

casper.run(function() {
  if (errors.length > 0) {
    this.echo(errors.length + ' Javascript errors found', "WARNING");
  } else {
    this.echo(errors.length + ' Javascript errors found', "INFO");
  }
  casper.exit();
});
