//Open the menu
    jQuery("#hamburger").click(function() {
        ...
    });

    //close the menu
    jQuery("#contentLayer").click(function() {
        ...
    });
    ...
//set the width of primary content container -> content should not scale while animating
var contentWidth = jQuery('#content').width();

//set the content with the width that it has originally
jQuery('#content').css('width', contentWidth);
...
...
//set the width of primary content container -> content should not scale while animating
var contentWidth = jQuery('#content').width();

//set the content with the width that it has originally
jQuery('#content').css('width', contentWidth);
......
//set margin for the whole container with a jquery UI animation
jQuery("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
    duration: 700
});
...
//close the menu
jQuery("#contentLayer").click(function() {

    //enable all scrolling on mobile devices when menu is closed
    jQuery('#container').unbind('touchmove');

    //set margin for the whole container back to original state with a jquery UI animation
    jQuery("#container").animate({"marginLeft": ["0", 'easeOutExpo']}, {
        duration: 700,
        complete: function() {
              jQuery('#content').css('width', 'auto');
            jQuery('#contentLayer').css('display', 'none');

        }
    });
});
