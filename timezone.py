from datetime import  timedelta, timezone

valid_tz = {
    'EST': timezone(timedelta(hours=-5)),
    'EDT': timezone(timedelta(hours=-4)),
}

def parse_time_str(text):
    """Parse a time string like '9AM EDT' or '9:00 AM EST' into a time object.
    The string is deconstructed from right to left since tokens such as the
    timezone and the 12h period will have a fixed length and order.
    The timezone must be either 'EST' or 'EDT'.
    """
    text = text.upper().strip()  # Ensure uppercase
    if not text[-4:].endswith((' EST', ' EDT')):
        raise ValueError(f'Invalid timezone: {text}')

    time_str, tz = text.rsplit(maxsplit=1)
    tz = valid_tz.get(tz)
    return tz



