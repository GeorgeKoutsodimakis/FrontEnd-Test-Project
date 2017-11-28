$(document).ready(function() {

              var offerEl = $('div.offer'),
                offerElOffset = offerEl.offset().top/2,
                  documentEl = $(document);

              documentEl.on('scroll', function() {
                  if ( documentEl.scrollTop() > offerElOffset && offerEl.hasClass('hidden') )
                   offerEl.removeClass('hidden');
              });
          })();
