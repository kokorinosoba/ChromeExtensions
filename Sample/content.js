window.onload = function() {
  var is_repository = document.getElementsByClassName('repository-content').length > 0;
  if (is_repository) {
    document.getElementsByClassName('logged-in')[0].style.backgroundColor = '#f0eddb';
  }
};
