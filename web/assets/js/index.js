var flickrApi = {
    init: function () {
        flickrApi.initialiseEvents();
    },
    initialiseEvents: function () {
    	$( document ).ready(function() {
			$("#card").flip({trigger: 'manual'});

			$(document).on("click", "#terms", function (e) {
		        $("#card").flip(true);
		    });

		    $(document).on("click", "#back", function (e) {
		        $("#card").flip(false);
		    });
		});

    	/* Flickr API: NOTE: No jquery used below this point */
		document.getElementById("cat").onclick = function(){flickrApi.flickr('cat');};
        document.getElementById("dog").onclick = function(){flickrApi.flickr('dog');};
        document.getElementById("giraffe").onclick = function(){flickrApi.flickr('giraffe');};

        /* Flickr API Callback */
        window.jsonFlickrApi = function(data) {
            var photos = data.photos.photo,
                output = '';
            /* Foreach photo (Building html in js is bad. Should use Mustache Template or something similar) */
            for (var i = 0; i < photos.length; i++) {
                output += '<img src="https://farm' + photos[i]['farm'] + '.staticflickr.com/' + photos[i]['server'] + '/' + photos[i]['id'] + '_' + photos[i]['secret'] + '.jpg"><br>';
            }
            document.getElementById("animals").innerHTML = output;
        };
    },
    flickr: function loadXMLDoc(animal) {
        var http = new XMLHttpRequest(),
            url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d5dab213a7b97e76c8327ce6e49bb654&tags='+animal+'&per_page=5&format=json';
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d5dab213a7b97e76c8327ce6e49bb654&tags='+animal+'&per_page=5&format=json',
                    s = document.createElement('script');
                s.setAttribute('src', url);
                document.body.appendChild(s);
            }
        };
        http.send();
    }
};
flickrApi.init();

