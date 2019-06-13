$(document).ready(function(){
  opening();
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        
      })
    } // End if
  }) 
})

function opening () {
    $('a[data-o]').click(function(e) {
        
        e.preventDefault();
        
        let open = $(this).attr('data-o');
        $('[data-ob="' + open + '"]').removeClass('off').addClass('on');
        //$('[data-o="' + open + '"]').removeClass('blue-line')
        
        $(this).content().unwrap();
        
    });
}

const resetText = document.getElementById('reset');
resetText.addEventListener('click', e => {
    const spans = document.getElementById('story').querySelectorAll('span');
    for (let i = 0; i <= spans.length; i++){
        spans[i].classList.remove('on');
        spans[i].classList.add('off');
    }
})