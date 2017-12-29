$(document).ready(() => {
  $('#text').on('keyup', event => {
    text = $(event.currentTarget).val();
    $('.preview').html(text);
  })
  $('#font').on('change', () => {
    $('.preview').css('fontFamily', 'value');
  })
})
