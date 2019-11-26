define([
    'jquery'
    ], function($) {
        require(["js/breadcrumbs.js"], function(){
            $('h1 .base').html(function(i, html){
                return html.replace(/(\w+\s)/, '<span class="black">$1</span>')
             })
        });
    });