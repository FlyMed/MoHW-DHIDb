/*-----------------------------------------------------------------------------------
/* Custom Scripts
-----------------------------------------------------------------------------------*/

/* ----------------- Start Document ----------------- */
(function($){
	$(document).ready(function(){

/*----------------------------------------------------*/
/*	FooTable
/*----------------------------------------------------*/

$(function () {

    $('.footable').footable();

});

// Activate Filtering
$(function() {
    $('.footable').footable().bind('footable_filtering', function(e) {
        var selected = $('.filtering').find(':selected').text();
        if (selected && selected.length > 0) {
            e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
            e.clear = !e.filter;
        }
    });

    $('.clear-filter').click(function(e) {
        e.preventDefault();
        $('.filtering').val('');
        $('table.footable').trigger('footable_clear_filter');
    });

    $('.filtering').change(function(e) {
        e.preventDefault();
        $('table.footable').trigger('footable_filter', {
            filter: $('#filter').val()
        });
    });
});


/* ------------------ End Document ------------------ */
});

})(this.jQuery);