CMS Made Simple to Wordpress

Used: Express, Cheerio, Request, WPAPI and the official Wordpress API.

I needed to rebuild a page. I wanted to migrate 43 pages from CMS Made Simple to Wordpress

This repository does not contain real data but example data. Can be replaced with individual URL's.

---

For this I did 3 Steps:

1. I scraped all the pages from the CMS Made Simple pages and saved them into a JSON-File (which is in scrape.js and output.json)
2. I formatted the JSON file, manually took out pages I did not need anymore
3. I used the Wordpress API to add the pages into Wordpress (which is in postAPI.js)

---

Note: Of course using a service for migrating from CMS Made Simple to Wordpress would have been much faster and is affordable.
I would usually suggest to use such a service.
This project was not financially resonable but for fun and learning only.
