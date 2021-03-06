import nock from 'nock';

export default () => {

  nock('http://api.meetup.com:80')
    .get('/meetup-group-NqJGKtSx/events')
    .query({"key": "27652da7f3a3ab586c6b29f3b7940"})
    .reply(200, [{
      "created": 1469201595000,
      "id": "232805304",
      "name": "Get together in NYC - how to make our communities economically sustainable?",
      "status": "upcoming",
      "time": 1470265200000,
      "updated": 1469426703000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "venue": {
        "id": 24481681,
        "name": "Belgian Beer Cafe ",
        "lat": 40.74344253540039,
        "lon": -73.98820495605469,
        "repinned": false,
        "address_1": "220 5th Ave (Corner of 26th Street)",
        "city": "New York",
        "country": "us",
        "localized_country_name": "USA",
        "zip": "",
        "state": "NY"
      },
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232805304/",
      "description": "<p>Our cofounder Pia Mancini is in town from SF so let's get together at a bar.</p> <p>Let's talk about your communities (meetups, open source projects, ...) and discuss how we can help them be more economically sustainable.</p> <p>Our goal at Open Collective is to enable communities to collect and disburse money in full transparency. We believe that we can make our communities stronger if we give them the tools to be economically sustainable. It's a work in progress and we value your input. If you are managing a community we want to hear from you and we want to help you!</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlyvlbgc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1472079600000,
      "updated": 1469426680000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860117/",
      "description": "<p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlyvmblc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1475103600000,
      "updated": 1469425770000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860125/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlyvnbjc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1477522800000,
      "updated": 1469425770000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860119/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlyvpbfc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1479945600000,
      "updated": 1469425770000,
      "utc_offset": -18000000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860121/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlyvqblc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1482969600000,
      "updated": 1469425770000,
      "utc_offset": -18000000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860123/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlywcbhc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1485388800000,
      "updated": 1469425770000,
      "utc_offset": -18000000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860116/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlywdbdc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1487808000000,
      "updated": 1469425770000,
      "utc_offset": -18000000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860118/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlywfbdc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1490223600000,
      "updated": 1469425770000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860124/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlywgbjc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1493247600000,
      "updated": 1469425770000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860122/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlywhbgc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1495666800000,
      "updated": 1469425770000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860115/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }, {
      "created": 1469422469000,
      "fee": {
        "accepts": "cash",
        "amount": 10,
        "currency": "USD",
        "description": "per person",
        "label": "Price",
        "required": false
      },
      "id": "gzgkwlywjblc",
      "name": "Another test meetup",
      "status": "upcoming",
      "time": 1498690800000,
      "updated": 1469425770000,
      "utc_offset": -14400000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "group": {
        "created": 1467307564000,
        "name": "Open Collective",
        "id": 20132146,
        "join_mode": "open",
        "lat": 40.75,
        "lon": -73.98999786376953,
        "urlname": "meetup-group-NqJGKtSx",
        "who": "Members"
      },
      "link": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860120/",
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Thank you to our sponsors</p> <p><a href=\"https://opencollective.com/opencollective\">&lt;/a&gt;</a></p> <p>Thank you to our sponsors</p> <p>&lt;a href=\"https://opencollective.com/opencollective\"&gt;</p> <p>This is the short description of the meetup.</p> ",
      "visibility": "public"
    }], {
      date: 'Mon, 25 Jul 2016 06:05:55 GMT',
      'content-type': 'application/json;charset=utf-8',
      'transfer-encoding': 'chunked',
      connection: 'close',
      'set-cookie': ['__cfduid=d5d77cde5d65efad185050fad30c0fb401469426755; expires=Tue, 25-Jul-17 06:05:55 GMT; path=/; domain=.meetup.com; HttpOnly'],
      'x-meetup-server': 'api6',
      'x-meetup-request-id': '28403d96-5808-4d36-9d05-9e43740d9df6',
      'x-oauth-scopes': 'basic',
      'x-accepted-oauth-scopes': 'basic',
      'x-ratelimit-limit': '30',
      'x-ratelimit-remaining': '29',
      'x-ratelimit-reset': '10',
      'x-total-count': '12',
      link: '<http://api.meetup.com/meetup-group-NqJGKtSx/events?scroll=since%3A2017-06-28T19%3A00%3A00.000-04%3A00>; rel="next"',
      etag: 'W/"1834e07937d3a35992ddd10c54d3887b"',
      vary: 'Accept-Encoding,User-Agent,Accept-Language',
      server: 'cloudflare-nginx',
      'cf-ray': '2c7d6c4626930ee5-EWR'
    });

  nock('http://api.meetup.com:80')
    .post('/2/event/gzgkwlyvlbgc', "description=%3Cp%3EThank%20you%20to%20our%20sponsors%20%3Ca%20href%3D%22https%3A%2F%2Fgithub.com%22%3EGithub%3C%2Fa%3E%20and%20Gitlab%3C%2Fp%3E%0A%3Cp%3E%3Ca%20href%3D%22https%3A%2F%2Fopencollective.com%2Fopencollective%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fopencollective.com%2Fopencollective%2Fsponsors.png%3Fwidth%3D700%22%3E%3C%2Fa%3E%3C%2Fp%3E%0A%20%3Cp%3EThis%20is%20the%20short%20description%20of%20the%20meetup.%3C%2Fp%3E%20")
    .query({"key": "27652da7f3a3ab586c6b29f3b7940"})
    .reply(200, {
      "utc_offset": -14400000,
      "headcount": 0,
      "visibility": "public",
      "waitlist_count": 0,
      "created": 1469422469000,
      "fee": {
        "amount": 10,
        "accepts": "cash",
        "description": "per person",
        "currency": "USD",
        "label": "Price",
        "required": "0"
      },
      "maybe_rsvp_count": 0,
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>This is the short description of the meetup.</p>",
      "event_url": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232860117/",
      "yes_rsvp_count": 1,
      "announced": false,
      "name": "Another test meetup",
      "id": "gzgkwlyvlbgc",
      "time": 1472079600000,
      "updated": 1469426756000,
      "group": {
        "join_mode": "open",
        "created": 1467307564000,
        "name": "Open Collective",
        "group_lon": -73.98999786376953,
        "id": 20132146,
        "urlname": "meetup-group-NqJGKtSx",
        "group_lat": 40.75,
        "who": "Members"
      },
      "status": "upcoming"
    }, {
      date: 'Mon, 25 Jul 2016 06:05:56 GMT',
      'content-type': 'application/json;charset=utf-8',
      'transfer-encoding': 'chunked',
      connection: 'close',
      'set-cookie': ['__cfduid=dae820daba0e2400fc4770d3305414cd41469426755; expires=Tue, 25-Jul-17 06:05:55 GMT; path=/; domain=.meetup.com; HttpOnly'],
      'x-meetup-server': 'api5',
      'x-meetup-request-id': '185e7de3-4ea1-4936-a4e4-0c01b1167cc9',
      'x-ratelimit-limit': '30',
      'x-ratelimit-remaining': '27',
      'x-ratelimit-reset': '10',
      'x-oauth-scopes': 'basic',
      'x-accepted-oauth-scopes': 'basic',
      vary: 'Accept-Encoding,User-Agent,Accept-Language',
      server: 'cloudflare-nginx',
      'cf-ray': '2c7d6c4743e90ec1-EWR'
    });

  nock('http://api.meetup.com:80')
    .post('/2/event/232805304', "description=%3Cp%3EThank%20you%20to%20our%20sponsors%20%3Ca%20href%3D%22https%3A%2F%2Fgithub.com%22%3EGithub%3C%2Fa%3E%20and%20Gitlab%3C%2Fp%3E%0A%3Cp%3E%3Ca%20href%3D%22https%3A%2F%2Fopencollective.com%2Fopencollective%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fopencollective.com%2Fopencollective%2Fsponsors.png%3Fwidth%3D700%22%3E%3C%2Fa%3E%3C%2Fp%3E%0A%20%3Cp%3EOur%20cofounder%20Pia%20Mancini%20is%20in%20town%20from%20SF%20so%20let%27s%20get%20together%20at%20a%20bar.%3C%2Fp%3E%20%3Cp%3ELet%27s%20talk%20about%20your%20communities%20%28meetups%2C%20open%20source%20projects%2C%20...%29%20and%20discuss%20how%20we%20can%20help%20them%20be%20more%20economically%20sustainable.%3C%2Fp%3E%20%3Cp%3EOur%20goal%20at%20Open%20Collective%20is%20to%20enable%20communities%20to%20collect%20and%20disburse%20money%20in%20full%20transparency.%20We%20believe%20that%20we%20can%20make%20our%20communities%20stronger%20if%20we%20give%20them%20the%20tools%20to%20be%20economically%20sustainable.%20It%27s%20a%20work%20in%20progress%20and%20we%20value%20your%20input.%20If%20you%20are%20managing%20a%20community%20we%20want%20to%20hear%20from%20you%20and%20we%20want%20to%20help%20you%21%3C%2Fp%3E%20")
    .query({"key": "27652da7f3a3ab586c6b29f3b7940"})
    .reply(200, {
      "utc_offset": -14400000,
      "venue": {
        "country": "us",
        "localized_country_name": "USA",
        "city": "New York",
        "address_1": "220 5th Ave (Corner of 26th Street)",
        "name": "Belgian Beer Cafe ",
        "lon": -73.988205,
        "id": 24481681,
        "state": "NY",
        "lat": 40.743443,
        "repinned": false
      },
      "headcount": 0,
      "visibility": "public",
      "waitlist_count": 0,
      "created": 1469201595000,
      "maybe_rsvp_count": 0,
      "description": "<p>Thank you to our sponsors <a href=\"https://github.com\">Github</a> and Gitlab</p> <p><a href=\"https://opencollective.com/opencollective\"><a href=\"https://opencollective.com/opencollective/sponsors.png?width=700\" class=\"linkified\">https://opencollective.com/opencollective/sponsors.png?width=700</a></a></p> <p>Our cofounder Pia Mancini is in town from SF so let's get together at a bar.</p> <p>Let's talk about your communities (meetups, open source projects, ...) and discuss how we can help them be more economically sustainable.</p> <p>Our goal at Open Collective is to enable communities to collect and disburse money in full transparency. We believe that we can make our communities stronger if we give them the tools to be economically sustainable. It's a work in progress and we value your input. If you are managing a community we want to hear from you and we want to help you!</p>",
      "event_url": "http://www.meetup.com/meetup-group-NqJGKtSx/events/232805304/",
      "yes_rsvp_count": 1,
      "announced": false,
      "name": "Get together in NYC - how to make our communities economically sustainable?",
      "id": "232805304",
      "time": 1470265200000,
      "updated": 1469426756000,
      "group": {
        "join_mode": "open",
        "created": 1467307564000,
        "name": "Open Collective",
        "group_lon": -73.98999786376953,
        "id": 20132146,
        "urlname": "meetup-group-NqJGKtSx",
        "group_lat": 40.75,
        "who": "Members"
      },
      "status": "upcoming"
    }, {
      date: 'Mon, 25 Jul 2016 06:05:56 GMT',
      'content-type': 'application/json;charset=utf-8',
      'transfer-encoding': 'chunked',
      connection: 'close',
      'set-cookie': ['__cfduid=dae820daba0e2400fc4770d3305414cd41469426755; expires=Tue, 25-Jul-17 06:05:55 GMT; path=/; domain=.meetup.com; HttpOnly'],
      'x-meetup-server': 'api10',
      'x-meetup-request-id': '34debf41-1568-4444-b2c4-70fa1c6d19dd',
      'x-ratelimit-limit': '30',
      'x-ratelimit-remaining': '28',
      'x-ratelimit-reset': '10',
      'x-oauth-scopes': 'basic',
      'x-accepted-oauth-scopes': 'basic',
      vary: 'Accept-Encoding,User-Agent,Accept-Language',
      server: 'cloudflare-nginx',
      'cf-ray': '2c7d6c4749020ec1-EWR'
    });
};
