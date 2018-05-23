var recipes = {}

function updateObjectWithKeyAndValue(obj,newkey,newvalue){
  newobj = Object.assign({},obj)
  newobj[newkey] = newvalue
  return newobj
}

function destructivelyUpdateObjectWithKeyAndValue(obj,newkey,newvalue){
  obj[newkey]=newvalue
  return obj
}

function deleteFromObjectByKey(obj,delkey){
  newobj = Object.assign({},obj)
  delete newobj[delkey]
  return newobj
}

function 