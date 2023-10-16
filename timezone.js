
function get_offset(tz){
    var offset;
    if (tz == "EST")
    {

    }
    else if (tz == "EDT")
    {

    }

    return offset;
}


function parse_time_str(text){
    /*Parse a time string like '9AM EDT' or '9:00 AM EST' into a time object.
    The string is deconstructed from right to left since tokens such as the
    timezone and the 12h period will have a fixed length and order.
    The timezone must be either 'EST' or 'EDT'.*/

    text = text.uppercase();  // Ensure uppercase
    var split = text.slice(-4).trim();

    return get_offset(split)
}


