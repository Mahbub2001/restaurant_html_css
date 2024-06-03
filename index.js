function make_filter(category) {
    var items = document.getElementsByClassName('menu-item');
    for (var i = 0; i < items.length; i++) {
      if (category === 'all') {
        items[i].classList.remove('hidden');
      } else {
        if (items[i].getAttribute('data-category') === category) {
          items[i].classList.remove('hidden');
        } else {
          items[i].classList.add('hidden');
        }
      }
    }
  }