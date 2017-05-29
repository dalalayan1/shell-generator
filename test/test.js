const assert=require('chai').assert;
const expect=require('chai').expect;
const should = require('chai').should;
const getPrompts=require('../scripts/utils/prompts').getPrompts;
const insertEsLintForGulp=require('../scripts/utils/es-lint').insertEsLintForGulp;
const insertEsLintForWebpack=require('../scripts/utils/es-lint').insertEsLintForWebpack;
const preloaderForGulp=require('../scripts/utils/css-preloaders').preloaderForGulp;
const preloaderForWebpack=require('../scripts/utils/css-preloaders').preloaderForWebpack;
describe('prompts',function(){
   it('should return an object',function(){
        assert.typeOf(getPrompts(),'object');
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
