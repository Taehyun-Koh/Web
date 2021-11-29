$(function() {
  function removeNote() {
    $(".remove-note").off('click').on('click', function(event) {
      //remove localStorage
      localStorage.removeItem('url');
      localStorage.removeItem('title');
      localStorage.removeItem('type');
      localStorage.removeItem('description');
      event.stopPropagation();
      $(this).parents('.single-note-item').remove(); //remove items from this parents
    })

  }


  // When press "add new"
  $('#add-notes').on('click', function(event) {
    $('#addnotesmodal').modal('show'); //show modal
    $('#btn-n-save').hide();
    $('#btn-n-add').show();
  })

  // When press save
  $("#btn-n-add").on('click', function(event) {
    event.preventDefault();

    //get variable from input area
    var $_noteUrl = document.getElementById('note-has-url').value;
    var $_noteTitle = document.getElementById('note-has-title').value;
    var $_noteType = document.getElementById('note-has-type').value;
    var $_noteDescription = document.getElementById('note-has-description').value;

    //add data to localStorage.
    localStorage.setItem('url', $_noteUrl);
    localStorage.setItem('title', $_noteTitle);
    localStorage.setItem('type', $_noteType);
    localStorage.setItem('description', $_noteDescription);

    //create new html div from below code.
    $html = '<div class="col-md-4 single-note-item"><div class="card1">' +
      '<span class="mr-1"><i class="fa fa-trash remove-note" id="trash"></i></span>' +
      '<div id="taskImg" style="background-image: url(' + $_noteUrl + ');"></div>' +
      '<p class="note-title mb-0">' + $_noteTitle + '</p>' +
      '<div class="note-content">' +
      '<p class="note-inner-content">' + $_noteDescription + '</p>' +
      '</div>' +
      '<p class="taskType">' + $_noteType + '</p>' +
      '</div>' +
      '</div>';

    $("#note-full-container").prepend($html);
    $('#addnotesmodal').modal('hide');

    removeNote();
  });

  $('#addnotesmodal').on('hidden.bs.modal', function(event) {
    event.preventDefault();
    document.getElementById('note-has-title').value = '';
    document.getElementById('note-has-description').value = '';
  })

  removeNote();

  $('#btn-n-add').attr('disabled', 'disabled');
})

//if empty input area exist, this function prevent the addition of card
$('#note-has-title').keyup(function() {
  var empty = false;
  $('#note-has-title').each(function() {
    if ($(this).val() == '') {
      empty = true;
    }
  });
  if (empty) {
    $('#btn-n-add').attr('disabled', 'disabled');
  } else {
    $('#btn-n-add').removeAttr('disabled');
  }
});
