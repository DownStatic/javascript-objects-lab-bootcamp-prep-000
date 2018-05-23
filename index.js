var recipes = {}

function updateObjectWithKeyAndValue(obj,newkey,newvalue){
  newobj = Object.assign({},obj)
  newobj[newkey] = newvalue
  return newobj
}

function updateObjec