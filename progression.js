function diminished_value(base, current, max){

    if (current >= max) {
        return 0;
    }
    else if (current <=0) {
        return base;
    }
    
    var result = base - (base * (current/max));//linear
    return result;
}