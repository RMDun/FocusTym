var data = require('../data.json');
var users = require('../users.json');
/*
 * GET home page.
 */
exports.joinGroup = function(req,res){
	res.render("joinGroup");
} 
exports.join = function(req, res) {
	var name = req.query.name;
	var i,j;
	for(i = 0; i < data.groups.length; i++){
		if(data.groups[i].name == name) {
			j=i;
			break;
		}
	}
	console.log(j,data.groups[j]);
	if(j == null || j == undefined){

	}
	else {
		if(!users.users[getUser()].groups.includes(j)){
			users.users[getUser()].groups.push(j);
			console.log(users);
		}
		rend(req, res);
	}

}


function rend(req, res){
	var u = global.globalUser;
		if(!u){
		u = " ";
	}
	console.log(u);
	var p = req.query.password;
		var i,j;
	for(i = 0; i < data.groups.length; i++){
		if(data.groups[i].name == u) {
			j=i;
			break;
		}
	}
	var groups = addUser(u,j);
	var k;
	var dat ={"groups":[]};
	for(i = 0; i < groups.length; i++){
		dat.groups[i] = data.groups[groups[i]];
	}
	res.render('index', dat);
}

function addUser(usr,j){
  var i,j;
  for(i = 0; i < users.users.length; i++){

    if(!users.users[i].name.localeCompare( usr)) {

    console.log(users.users[i],usr);
      j=i;
      break;
    }else{
      j=0;
    }
  }

  if(!users.users[j].name.localeCompare( usr)){
    return users.users[j].groups;
  }else{
    var newUser = {
      "name": usr,
      "groups":[]
    };
    users.users.push(newUser);
    console.log(users);
    return [];
  }
}
function getUser(){
  var i,j;
  for(i = 0; i < users.users.length; i++){

    if(!users.users[i].name.localeCompare( global.globalUser)) {
      j=i;
      break;
    }else{
      j=0;
    }
  }
  return j;
}