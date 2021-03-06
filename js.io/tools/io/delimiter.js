/**********************************
* author: Mario Balibrera
*    web: mariobalibrera.com
*  email: mario.balibrera@gmail.com
**********************************/

js.io.provide('js.io.tools.io.delimiter');

DelimiterReader = function() {
    var self = this;
    var buff = "";
    var delim = null;
    var cb = null;
    var separate_events = function() {
        var sep = buff.indexOf(delim);
        if (sep == -1) {
            return;
        }
        var frame = buff.slice(0,sep);
        buff = buff.slice(sep+delim.length);
        cb(frame);
        separate_events();
    }
    self.set_delim = function(d) {
        delim = d;
    }
    self.set_cb = function(func) {
        cb = func;
    }
    self.read = function(data) {
        buff += data;
        separate_events();
    }
}

js.io.declare('js.io.tools.io.delimiter.Reader',DelimiterReader,{});
