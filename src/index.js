module.exports = function towelSort (matrix) {
    if ( matrix === undefined || matrix.length === 0 ) return [];
    const res = []
    for ( let key in matrix ) {
        ( Number(key) + 2) % 2 === 0
            ? res.push( matrix[key] )
            : res.push( matrix[key].reverse() )
    }
    return res.join(',').split(',')
}
