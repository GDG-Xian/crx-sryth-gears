function get_option(name) {
    return localStorage[name];
}

function set_option(name, value) {
    localStorage[name] = value;
}
