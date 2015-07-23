function procCmd(command) {
  var cmd = command.split(" ");
  var first = cmd[0];
  var ssecond = cmd[1];

  // IF /test
  if(first == "test") {
    clientMessage("test.");
  }
  
  // IF /test2 aaa
  
  /*
  1 :
  */

  if(first == "test2" && second == "aaa") {
    //action
  }

  /*
  2 : (/test3 aaa)
  */

  if(first == "test3") {
    if(second == "aaa") {
       //action
    }
  }

  // /test1 = /t1 '?'

  if(first == "test1" || first == "t1") {
    //action
  }
}
