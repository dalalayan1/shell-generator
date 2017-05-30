const assert=require('chai').assert;
const expect=require('chai').expect;
const should = require('chai').should;
const request=require('request');
const path=require('path');
const getPrompts=require('../scripts/utils/prompts').getPrompts;
const insertEsLintForGulp=require('../scripts/utils/es-lint').insertEsLintForGulp;
const insertEsLintForWebpack=require('../scripts/utils/es-lint').insertEsLintForWebpack;
const preloaderForGulp=require('../scripts/utils/css-preloaders').preloaderForGulp;
const preloaderForWebpack=require('../scripts/utils/css-preloaders').preloaderForWebpack;
describe('the function prompts',function(){
   it('should return an object containing the answers',function(){
        assert.typeOf(getPrompts.call(),'object');
    });
    it('the generate promts to seet the configurations',function(){
       assert.isFunction(getPrompts,'the generate promts to set the configurations')
    });
});
describe('the function insertEsLintForGulp',function(){
    it('should generate the lint file for gulp configuration',function(){
       assert.isFunction(insertEsLintForGulp,'the insertEsLintForGulp generate the lint file for gulp configuration')
    });
});
describe('the function insertEsLintForWebpack',function(){
   it('should generate the lint file for webpack configuration',function(){
       assert.isFunction(insertEsLintForWebpack,'the insertEsLintForGulp generate the lint file for webpack configuration')
    });
    
});
describe('the function preloaderForGulp',function(){
    it('should generate the lint file for gulp configuration',function(){
       assert.isFunction(preloaderForGulp,'the preloaderForGulp generate the css-preloaders modules for gulp configuration')
    });
});
describe('the function preloaderForWebpack',function(){
   it('should generate the lint file for webpack configuration',function(){
       assert.isFunction(preloaderForWebpack,'the preloaderForWebpack generate the css-preloaders modules for webpack configuration')
    }); 
});
describe('the main page content',function(){
    it('the main page content should be equal to the index.html file in the dist folder',function(){
            request('http://localhost:7001' , function(error, response, body) {
            expect(body).to.equal('path.join(__dirname, "dist/index.html")');
         });
    });
    it('Main page status should be 200 after the content is loaded', function() {
            request('http://localhost:7001' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
      it('Main page status should be 200 when we hit any route', function() {
            request('http://localhost:7001/*' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
});
