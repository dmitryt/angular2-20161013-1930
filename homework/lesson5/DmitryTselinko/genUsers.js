#!/usr/local/bin/node
var fs = require('fs');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var faker = require('faker');
var FOLDER4SAVE = 'fixtures';

function _generate(num) {
  var result = [];
  var sex;
  for (var i = 0; i< num; i++) {
    sex = faker.helpers.randomize(['m', 'f']);
    result.push({
        id: i + 1,
        sex: sex,
        firstName: faker.name.firstName( sex === 'm' ? 0 : 1),
        lastName: faker.name.lastName(),
        age: faker.random.number({ min: 20, max: 100 }),
        email: faker.internet.email()
    });
  }
  return result;
}

function save(data, fpath) {
  fs.writeFile(path.join(FOLDER4SAVE, fpath), JSON.stringify(data), 'utf8', function(err) {
    if(err) {
      return console.error(err);
    }
    console.log("The file was saved!");
  });
}

function main() {
  var num = argv.n || 10;
  var fpath = argv.file;
  var data = _generate(num);
  if (fpath) {
    save(data, fpath);
  }
  return data;
}

main();
