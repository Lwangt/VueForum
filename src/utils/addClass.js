export function addClass(el,className) {

  //判断泪目是否存在
  if (_hasClass(el, className)) {
    return;
  }
  let newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}

function _hasClass(el,className){
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className)
}
