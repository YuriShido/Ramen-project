let menuData = {};
$.ajax({
    url: './menuData.json',
    dataType: 'json',
    async: false,
    // data: { &quot;data&quot; : &quot;data&quot; },
    success: function (json) {
        menuData = json;
    }
});