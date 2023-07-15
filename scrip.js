

  function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault();
        var unduh1 = this.getAttribute('href').replace('#', '');
        scrollToElement(unduh1);
        var target2 = this.getAttribute('href').replace('#', '');
        scrollToElement(target2);
        var target1 = this.getAttribute('href').replace('#', '');
        scrollToElement(target1);
      });
    }
  });

 