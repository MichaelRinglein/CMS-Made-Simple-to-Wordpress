var WPAPI = require( 'wpapi' );

//copy-pasted json, putiting it into an object
var pages = { "page": [
	{
		'url': 'http://www.example.com',
		'title': 'Rainy day, warm coffee',
		'content': '<p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit. Vivamus id neque sit amet risus suscipit sodales id nec diam. Proin bibendum vestibulum velit, a euismod arcu varius id. Phasellus pretium mi ligula, ac vestibulum tellus dictum vel. Phasellus scelerisque nisl nec porta molestie.</p> <p> Nam porttitor consectetur lorem et ullamcorper. Quisque lobortis magna et est bibendum, sit amet aliquet magna dignissim. Vivamus id iaculis erat, in dictum quam. Aliquam eu sapien diam. Cras sed purus bibendum, sollicitudin dolor at, ultrices augue. Vivamus aliquam, nibh quis auctor aliquet, nulla est ornare velit, sit amet ullamcorper orci metus id dui. Praesent dictum, diam scelerisque bibendum pharetra, lectus leo dictum felis, nec rutrum sapien diam id urna.</p>'
	},
  {
		'url': 'http://www.example.com/about-us',
		'title': 'A team so great',
		'content': '<p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit. Vivamus id neque sit amet risus suscipit sodales id nec diam. Proin bibendum vestibulum velit, a euismod arcu varius id. Phasellus pretium mi ligula, ac vestibulum tellus dictum vel. Phasellus scelerisque nisl nec porta molestie.</p> <p> Nam porttitor consectetur lorem et ullamcorper. Quisque lobortis magna et est bibendum, sit amet aliquet magna dignissim. Vivamus id iaculis erat, in dictum quam. Aliquam eu sapien diam. Cras sed purus bibendum, sollicitudin dolor at, ultrices augue. Vivamus aliquam, nibh quis auctor aliquet, nulla est ornare velit, sit amet ullamcorper orci metus id dui. Praesent dictum, diam scelerisque bibendum pharetra, lectus leo dictum felis, nec rutrum sapien diam id urna.</p>'
	},
  {
		'url': 'http://www.example.com/contact',
		'title': 'Send us a message',
		'content': '<p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit. Vivamus id neque sit amet risus suscipit sodales id nec diam. Proin bibendum vestibulum velit, a euismod arcu varius id. Phasellus pretium mi ligula, ac vestibulum tellus dictum vel. Phasellus scelerisque nisl nec porta molestie.</p> <p> Nam porttitor consectetur lorem et ullamcorper. Quisque lobortis magna et est bibendum, sit amet aliquet magna dignissim. Vivamus id iaculis erat, in dictum quam. Aliquam eu sapien diam. Cras sed purus bibendum, sollicitudin dolor at, ultrices augue. Vivamus aliquam, nibh quis auctor aliquet, nulla est ornare velit, sit amet ullamcorper orci metus id dui. Praesent dictum, diam scelerisque bibendum pharetra, lectus leo dictum felis, nec rutrum sapien diam id urna.</p>'
	},
]};

//Using WPAPI to handle the authorization
var wp = new WPAPI( {
  endpoint: 'http://example.com/wp-json/',
  username: 'YourWordPressUsername',
  password: 'YourWordPressPassword'
});

//looping through all pages. Adjust number of loops according to number of pages
for (i = 0; i < 3; i++) {
  //pushing the posts into Wordpress
  wp.pages().create({
    title: pages.page[i].title,
    content: pages.page[i].content,
    status: 'publish'
  }).then(function(response) {
    console.log(response);
  });
}
