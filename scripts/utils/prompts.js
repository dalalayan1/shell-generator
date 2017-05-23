var inquirer = require("inquirer");
console.log("Select the appropriate answers");
var questions=[{
    type: "list",
    name: "taskrunner",
    message: "Wich task-runner do you need?",
    choices: [ "gulp", "webpack" ],
    filter: function( val ) { return val.toLowerCase(); }
  },{
    type: "list",
    name: "framework",
    message: "Which framework do you need?",
    choices: [ "pure react", "react with redux" ],
    filter: function( val ) { return val.toLowerCase(); }
  },
  {
    type: "list",
    name: "css_preloader",
    message: "Which css-preloader do you need?",
    choices: [ "less", "sass" ],
    filter: function( val ) { return val.toLowerCase(); }
  },
  {
    type: "list",
    name: "eslint",
    message: "Do you need es-linting?",
    choices: [ "No", "Yes" ],
    filter: function( val ) { return val.toLowerCase(); }
  },
  {
    type: "list",
    name: "stylelint",
    message: "Do you need style-linting?",
    choices: [ "No", "Yes" ],
    filter: function( val ) { return val.toLowerCase(); }
  },
  {
    type: "list",
    name: "server",
    message: "Do you need a dev-server?",
    choices: [ "No", "Yes" ],
    filter: function( val ) { return val.toLowerCase(); }
  }];
var obj={
  done:false,
  gulp:false,
  webpack:false,
  react:false,
  react_redux:false,
  less:false,
  sass:false,
  eslint:false,
  stylelint:false,
  devserver:false
};

  var prompt = inquirer.createPromptModule();

  var getPrompts = function getPrompts(){

      prompt(questions).then(function(answers){
      
      (answers.taskrunner=='gulp')?obj.gulp=true:obj.webpack=true;
      (answers.framework=='react')?obj.react=true:obj.react_redux=true;
      (answers.css_preloader=='less')?obj.less=true:obj.sass=true;
      (answers.eslint=='yes')?obj.eslint=true:obj.eslint=false;
      (answers.stylelint=='yes')?obj.stylelint=true:obj.stylelint=false;
      (answers.server=='yes')?obj.devserver=true:obj.devserver=false;
        
      obj.done = true;
    });
    
    return obj;

  }

  module.exports = {
    getPrompts
  }
  
