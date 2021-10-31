function validObj(obj) {
  if (!obj.id)
      throw new Error("id is missing in record!");
  
  if (!obj.name)
      throw new Error("name is missing in record!");
}

export function getRecord(obj, formatRecord) {
  let newObj = obj;

  if (formatRecord)
      newObj = formatRecord(obj);

  validObj(newObj);

  return newObj;
}

