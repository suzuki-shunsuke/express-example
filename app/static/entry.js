/**
 * http://youmightnotneedjquery.com/#ready
 */
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  console.log('Hello World');
});
