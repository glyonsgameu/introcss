function diminished_value(base, current, max){

    if (current >= max) {
        return 0;
    }
    
    var result = base - (base * (current/max));//linear
    return result;
}