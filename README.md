# GetPayCheck
Logins into CAS (Indiana University's Authorization) and scrapes data for next paycheck  
# Setup
1) install  [Phatantom JS](http://phantomjs.org/download.html)  (for mac, recommend just running ```brew update;brew install phantomjs``` ) 
2) ``` npm install -g casperjs```
3) update config.json
4) in terminal type: 
```shell
cd ;nano .bash_profile
```
5) paste this in : ``` alias paycheck=" casperjs [location to paycheck file] " ```
6) press ```control+x``` then ```y ``` 
7) in terminal type: 
```shell
source ~/.bash_profile
```
8) now type ```paycheck``` and you should see your information

# Next step!
I want to make this less work to setup and make this an NPM package that can be downloaded... (might need some help)
https://developer.atlassian.com/blog/2015/11/scripting-with-node/
