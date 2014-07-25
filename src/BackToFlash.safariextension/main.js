var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = 'document.createElement("video").constructor.prototype.canPlayType = function(type){return ""}';
document.documentElement.appendChild(script);