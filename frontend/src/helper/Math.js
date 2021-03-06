export const haversineDistance = (coords1, coords2) => {
    function toRad(x) {
        return x * Math.PI / 180;
    }

    var lon1 = coords1?.lon;
    var lat1 = coords1?.lat;

    var lon2 = coords2?.lon;
    var lat2 = coords2?.lat;

    if (lon1 === undefined || lat1 === undefined || lon2 === undefined || lat2 === undefined) {
        return NaN;
    }

    var R = 6371; // km

    var x1 = lat2 - lat1;
    var dLat = toRad(x1);
    var x2 = lon2 - lon1;
    var dLon = toRad(x2)
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d;
}