# Zendesk Search Bookmark Enabler

Zendesk [does]() [not]() [support]() bookmarking searches in [Zendesk Support](https://support.zendesk.com/hc/en-us).  This tiny chrome extension enables the ability to pass a search to Zendesk via the URL.

## How does it work?

Grabs your search from the URL and injects the search into Zendesk's searchbox

## How do you use it?

- [Install The Extension]()
- Go to your Zendesk Search Url (Example: `https://$domain.zendesk.com/agent/search/1`)
- Add a query param to your Url (Example: `?query=$whatever_you_want_to_search`)

Here's an example of a url that would search for all tickets not solved that are not solved:

```bash
https://$example.zendesk.com/agent/search/1?query=status<=solved%20assignee:none
```

## Don't Understand The Funny URI Encoding Characters?  (Like %20)

If you do not understand how to properly encode your params, the easiest way to get a url that works is:

- Start typing in your address bar
- Paste your base url: `https://$example.zendesk.com/agent/search/1`
- Add '?query='
- Type the search exactly as you want it in the URL (including spaces)
- Hit Enter

![Example]()
