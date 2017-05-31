var inquirer = require("inquirer");
console.log("Select the appropriate answers");

//array of questions to be prompted to the user
var questions=[{
    type: "list",
    name: "taskrunner",
    message: "Wich task-runner do you need?",
    choices: [ "gulp", "webpack" ]
  },{
    type: "list",
    name: "framework",
    message: "Which framework do you need?",
    choices: [ "pure react", "react with redux" ]
  },
  {
    type: "list",
    name: "css_preloader",
    message: "Which css-preloader do you need?",
    choices: [ "less", "sass" ]
  },
  {
    type: "confirm",
    name: "eslint",
    message: "Do you need es-linting?"
  },
  {
    when: function (response) {
      return response.eslint;
    },
    type: "confirm",
    name: "wantAirbnb",
    message: "\tOkay, do you need airbnb guide too?"
  },
  {
    type: "confirm",
    name: "stylelint",
    message: "Do you need style-linting?"
  },
  {
    type: "confirm",
    name: "server",
    message: "Do you need a dev-server?"
  },
  {
    type: "confirm",
    name: "repo",
    message: "Do you have existing git repo?"
  },
  {
    when: function (response) {
      return response.repo;
    },
    type: "default",
    name: "repoUrl",
    message: "Your repo url: "
  }
  ];

//object initialization
  var obj={
    done:false,
    gulp:false,
    webpack:false,
    react:false,
    react_redux:false,
    less:false,
    sass:false,
    eslint:false,
    wantAirbnb:false,
    stylelint:false,
    devserver:false,
    repo:false,
    repoUrl:false
  };

  var prompt = inquirer.createPromptModule();

/**
  * Gets the answers to the prompts.
  * Modifies the obj as per requirements.
  * @return {object} answers
  */
  var getPrompts = function getPrompts(){

      prompt(questions).then(function(answers){
      
      (answers.taskrunner=='gulp')?obj.gulp=true:obj.webpack=true;
      (answers.framework=='pure react')?obj.react=true:obj.react_redux=true;
      (answers.css_preloader=='less')?obj.less=true:obj.sass=true;
      (answers.eslint)?obj.eslint=true:obj.eslint=false;
      (answers.wantAirbnb)?obj.wantAirbnb=true:obj.wantAirbnb=false;
      (answers.stylelint)?obj.stylelint=true:obj.stylelint=false;
      (answers.server)?obj.devserver=true:obj.devserver=false;
      (answers.repo)?obj.repo=true:obj.repo=false;
      obj.repoUrl = answers.repo ? answers.repoUrl : false;
      obj.done = true;
    });
    
    return obj;

  }

  module.exports = {
    getPrompts
  }
  
