// The Simple Feed Viewer application JavaScript should live here.
//
(function (window) {
    var util            = window.util;

    // The API endpoint for each feeds data
    var API_BASE_URL    = 'http://data.digg.com/api/v1/feed/trending/tweets';

    var doc             =   document;

    // An array of available feeds
    var FEEDS = [
        { slug: 'digg' },
        { slug: 'david_picks' },
        { slug: 'politics' },
        { slug: 'design' }
    ];

    // Loop through the FEEDS and attach event listeners
    for(var i = 0; i < FEEDS.length; i++) {
        doc.getElementById(FEEDS[i].slug).addEventListener('click', function(e) {
            setFeederClass();
            this.classList.add('active');
            getData(this.id);
        }, false);
    }
    
    // Function to fetch feed
    function getData(feed){
        util.ajax({
            url: API_BASE_URL,
            data: {
                group: feed
            },
            success: function (data) {
                console.log('Success!', data);
                populateData(data.mesg);
            },
            error: function (responseText) {
                console.log('Error! :(', responseText);
            }
        });
    }

    // Function to create DOM elements and fill data into it
    function populateData(arrData) {
        doc.getElementById('content-feed').innerHTML = '';
        arrData.forEach(function(data) {
            var li          =   doc.createElement('li');
            var anc         =   doc.createElement('a');
            var article     =   doc.createElement('article');
            var p           =   doc.createElement('p');
            anc.href        =   data.url;
            anc.target      =   '_blank';
            anc.innerHTML   =   data.title;
            p.innerHTML     =   data.description + " - <em>" + data.domain + "</em>";
            article.appendChild(anc);
            article.appendChild(p);
            li.appendChild(article);
            li.dataset['dateCreated']   =   data.date_created;
            doc.getElementById('content-feed').appendChild(li);
        });

    }

    // Function to reset Feeder Buttons
    function setFeederClass() {
        var activeBtn = doc.querySelector('.active');
        if(activeBtn !== null) activeBtn.className = 'inactive';
        doc.getElementById('sort-feed').value = "0";
    }

    // Function to sort the feed based on date created
    function feedSorter(sortType) {
        var li_array     =   [];
        doc.querySelectorAll('ul li').forEach(function(li) {
            li_array.push(li);
        });

        li_array.sort(function(a, b) {
            if(a.dataset['dateCreated'] < b.dataset['dateCreated'])
                return sortType === 'asc' ? -1 : 1;
            if(a.dataset['dateCreated'] > b.dataset['dateCreated'])
                return sortType === 'asc' ? 1 : -1;
            return 0;
        });

        var ul = doc.getElementById('content-feed');
        ul.innerHTML = '';
        li_array.forEach(function(li) {
            ul.appendChild(li);
        });
    }

    // Sort the feed data
    doc.getElementById('sort-feed').addEventListener('change', function() {
        console.log(this.value);
        if(this.value !== '0')feedSorter(this.value);
    }, false);

    // Load the default feed
    doc.getElementById('digg').click();
})(this);
