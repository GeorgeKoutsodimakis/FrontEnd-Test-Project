$(document).ready(function() {

              var awesomeness = $('div.awesomeness'),
              awesomenessElOffset = awesomeness.offset().top/2,
                  documentEl = $(document);



              documentEl.on('scroll', function() {
                  if ( documentEl.scrollTop() > awesomenessElOffset   )
                      $('div.awes').addClass('awe');
                      $('div.pinks').addClass('pink');

              });
          })();
