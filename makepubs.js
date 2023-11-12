
for(var i = 0; i < pubs.length; i++) {
  pub = pubs[i];
  
  title = jQuery('<div class="pubtitle">' + pub["title"] + "</div>").addClass('pub-title font-weight-bold p-1 text-left');
  $(title).addClass("d-flex flex-column card-title text-wrap text-left p-1");
  title_container = jQuery('<div/>');
  $(title_container).addClass('d-flex flex-row justify-content-between').append(title);
  tag_container = jQuery('<div/>').addClass('d-flex flex-column justify-content-center')
  for(var j = 0; j < pub['tags'].length; j++) {
    tag = pub['tags'][j]
    if(tag == 'preprint') {
      tag = jQuery('<span>preprint</span>').addClass('badge bg-dark');
    } else if(tag == 'tech report') {
      tag = jQuery('<span>tech report</span>').addClass('badge bg-dark');
    } else if(tag == 'conference') {
      tag = jQuery('<span>conference</span>').addClass('badge bg-success');
    } else if(tag == 'journal') {
      tag = jQuery('<span>journal</span>').addClass('badge bg-warning');
    } else if(tag == 'workshop') {
      tag = jQuery('<span>workshop</span>').addClass('badge bg-secondary');
    } else if(tag == 'tutorial') {
      tag = jQuery('<span>tutorial</span>').addClass('badge bg-info');
    } else if(tag == 'chapter') {
      tag = jQuery('<span>chapter</span>').addClass('badge bg-primary');
    } else {
      tag = jQuery('<span>' + tag + '</span>').addClass('badge bg-danger');
    }
    $(tag_container).append($('<div/>').addClass('d-flex flex-row justify-content-end').append(tag));
    // $(tag_container).append(document.createTextNode(' '));
  }
  $(title_container).append(tag_container);
  $('.badge').after(' ')
  
  authors = jQuery('<div>' + pub['authors'].join(', ') + '</div>').addClass('text-wrap p-1');

  venue = jQuery('<div>' + pub['venue'] + '</div>').addClass('text-wrap p-1');
  if(pub['abbrv'].length > 0) {
    abbrv = jQuery('<div>(' + pub['abbrv'] + ')</div>').addClass('font-weight-bold p-1');
  } else {
    abbrv = null;
  }
  venue_container = jQuery('<div/>').addClass('d-flex flex-row').append(venue).append(abbrv)

  link_container = jQuery('<div/>').addClass('btn-group btn-group-sm align-self-center').attr('role', 'group')
  if('pdf' in pub && pub['pdf'].length > 0) {
    pdf_button = $('<a>', {href: pub['pdf']}).addClass('btn btn-outline-danger').attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top').attr('title', 'paper').appendTo(link_container)
    pdf_button.append('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-pdf-fill" viewBox="0 0 16 16"><path d="M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/><path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"/></svg>').after(' ');
  }
  if('code' in pub && pub['code'].length > 0) {
    code_button = $('<a>', {href: pub['code']}).addClass('btn btn-outline-danger').attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top').attr('title', 'code').appendTo(link_container)
    code_button.append('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>').after(' ');
  }
  if('video' in pub && pub['video'].length > 0) {
    video_button = $('<a>', {href: pub['video']}).addClass('btn btn-outline-danger').attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top').attr('title', 'presentation').appendTo(link_container)
    video_button.append('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16"><path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>')
  }
  if('slides' in pub && pub['slides'].length > 0) {
    slides_button = $('<a>', {href: pub['slides']}).addClass('btn btn-outline-danger').attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top').attr('title', 'slides').appendTo(link_container)
    slides_button.append('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-ppt-fill" viewBox="0 0 16 16"><path d="M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5z"/><path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5H7z"/></svg>')
  }
  if('link' in pub && pub['link'].length > 0) {
    slides_button = $('<a>', {href: pub['link']}).addClass('btn btn-outline-danger').attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'top').attr('title', 'website').appendTo(link_container)
    slides_button.append('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg>')
  }

  bottom_bar = jQuery('<div/>').addClass('d-flex flex-row justify-content-between');
  $(bottom_bar).append(venue_container);
  $(bottom_bar).append(link_container);

  card = jQuery('<div/>').addClass('card filter ' + pub['cats'].join(' '))
  card_body = jQuery('<div/>').addClass('card-body').appendTo(card)
  
  $(card_body).append(title_container)
  $(card_body).append(authors)
  $(card_body).append(bottom_bar)
  $("#pubs-list").append(card)
}