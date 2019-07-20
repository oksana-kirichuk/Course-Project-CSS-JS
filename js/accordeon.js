$('.set > a').click(function(e) {
  let selector = this.getAttribute('data-accordeon');

  if($(selector).hasClass('active')) {
    $(selector).removeClass('active');
    $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
  } else {
    $('.content').removeClass('active');
    $('.set > a > i').removeClass('fa-minus').addClass('fa-plus')
    $(selector).addClass('active');
    $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
  }
});
    

    

