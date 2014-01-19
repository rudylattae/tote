(function(g) {
    // imports (sor to f)
    var storageAdapter = g.localStorage;


    function epo( namespace ) {
        return new Epo( namespace );
    }



    function Epo( namespace ) {
        this._ns = namespace;
    }

    Epo.prototype.set = function set( key, value ) {
        storageAdapter.setItem( this._nsKey(key), value );
    };

    Epo.prototype.get = function get( key ) {
        return storageAdapter.getItem( this._nsKey(key) );
    };

    Epo.prototype._nsKey = function _nsKey( key ) {
        if ( !this._ns ) return key;
        return this._ns + '-' + key; 
    };


    // exports
    g.epo = epo;
}( window ));