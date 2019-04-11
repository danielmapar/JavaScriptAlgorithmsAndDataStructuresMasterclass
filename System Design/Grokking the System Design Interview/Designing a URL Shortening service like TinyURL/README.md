# Designing a URL Shortening service like TinyURL

## Why do we need URL shortening?

* URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs.

* For example, if we shorten this page through TinyURL:
    * https://www.educative.io/collection/page/5668639101419520/5649050225344512/5668600916475904/
* We would get:
    * http://tinyurl.com/jlg8zpc


* The shortened URL is nearly one-third the size of the actual URL.

* URL shortening is used for optimizing links across devices, tracking individual links to analyze audience and campaign performance, and hiding affiliated original URLs.

* If you haven’t used tinyurl.com before, please try creating a new shortened URL and spend some time going through the various options their service offers. This will help you a lot in understanding this chapter.

## Requirements and Goals of the System

* **You should always clarify requirements at the beginning of the interview. Be sure to ask questions to find the exact scope of the system that the interviewer has in mind.**

* Our URL shortening system should meet the following requirements:

* Functional Requirements:
    * Given a URL, our service should generate a shorter and unique alias of it. This is called a short link.
    * When users access a short link, our service should redirect them to the original link.
    * Users should optionally be able to pick a custom short link for their URL.
    * Links will expire after a standard default timespan. Users should be able to specify the expiration time.

* Non-Functional Requirements:

    * The system should be highly available. This is required because, if our service is down, all the URL redirections will start failing.
    * URL redirection should happen in real-time with minimal latency.
    * Shortened links should not be guessable (not predictable).

