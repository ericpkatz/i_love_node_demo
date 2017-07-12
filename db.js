var modules = [
  {
    id: 1,
    name: 'express',
    description: 'create a server using middleware',
    url: 'https://www.npmjs.com/package/express'
  },
  {
    id: 2,
    name: 'method-override',
    description: 'middleware turn posts into deletes and patches',
    url: 'https://www.npmjs.com/package/method-override'
  },
  {
    id: 3,
    name: 'body-parser',
    description: 'middleware to transform url-encoded text into objects',
    url: 'https://www.npmjs.com/package/body-parser'
  },
  {
    id: 4,
    name: 'swig',
    description: 'a templating engine',
    url: 'https://www.npmjs.com/package/swig-templates'

  },
  {
    id: 5,
    name: 'bootstrap',
    description: 'css to make your site pretty',
    url: 'https://www.npmjs.com/package/bootstrap'
  },
];

module.exports = {
  getModules: function(){
    return modules;
  },
  getModule: function(id){
    return modules.filter(function(module){
      return module.id === id;
    })[0];
  },
  createModule: function(module){
    if(!module.name){
      throw 'name is required';
    }
    module.id = Math.round(1000*Math.random()),
    modules.push(module);
  },
  deleteModule: function(id){
    modules = modules.filter(function(module){
      return module.id !== id;
    });
  }
};
