
// Expandable blocks code
window.onload = function(){
    
    var default_text = 'more info...'
    var toggle_text = 'less info...'
    
    // Set initial text on pageload
    $('.expand').each(function(){
        $(this).html(default_text);
    });
    
    // Toggle visibility and text on click
    // <.expand #expand-(\d+)> click causes <.expandable #expandable-\1> to toggle
    // CSS div.expandable {display:none}
    $('.expand').click(function(){
        $(this).html($(this).html() == default_text ? toggle_text : default_text);
        var target_num = $(this).attr('id').split('-')[1];
        var content_id = '#expandable-'.concat(target_num);
        $(content_id).slideToggle('fast');
    });
    
};
