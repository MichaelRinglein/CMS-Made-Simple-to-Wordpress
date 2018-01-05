var express = require('express');
var fs = require('fs');
var request = require ('request');
var cheerio = require('cheerio');
var path = require ('path');

var app = express();

//get from the sitemap.xml the urls. Arrange them into an array
var urls = new Array (
		"http://www.example.com",
		"http://www.example.com/about-us",
		"http://www.example.com/contact"
);

//loop through every url to get every page from the sitemap.xml

for (i = 0; i < urls.length; i++) {
  var url = urls[i];
  console.log(url);

  //scrape with request
  request (url, function(err, resp, body) {
    if(err){
      console.log(err);
    } else {
      //creating a json file
      var json = {url: '', title: '', content:''};
      json.url = url;
      //using cheerio to find the pages. A webpage usually has a title and a content

      //first the title, was in <header> tag
      var $ = cheerio.load(body);
      var title = $('header');
      var titleText = title.text(); //title just as text
      //adding the title to json file
      json.title = titleText;

      //second the content, was in <section> tag
      var content = $('section');
      var contentText = content.html(); //content with the html formatting
      //adding the content to json file
      json.content = contentText;

      //output title and content to console
      console.log(titleText);
      console.log(contentText);

      //add the title and content to a file called output.json (file already existed)
      fs.appendFile('output.json', JSON.stringify(json, null, 4), function(err) {
        console.log('file is written');
      });
    }
  });
}

//a html interface is not necessary, but can be build on 8081
app.listen('8081')
console.log('Start listening on port 8081');
