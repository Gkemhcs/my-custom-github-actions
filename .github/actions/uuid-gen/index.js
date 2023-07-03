const core = require('@actions/core');
const github = require('@actions/github');
try{
const { v4: uuidv4 } = require('uuid');
const uuid=uuidv4()
core.setOutput("uuid",uuid)
console.log(uuid)
}
catch(err){
    console.log(err)
}