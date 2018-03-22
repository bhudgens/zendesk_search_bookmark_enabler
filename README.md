# Zendesk Search Bookmark Enabler

For at least four years, [people have been asking Zendesk](https://support.zendesk.com/hc/en-us/community/posts/202543443-Search-criteria-should-be-added-to-URL-) to allow searches to be accessible via the URL.  This facilitates utilizing Zendesk's in-depth search tools to provide custom views and would allow passing along searches to other folks.  Zendesk has essentially [ignored their users](https://support.zendesk.com/hc/en-us/community/posts/203438206-Search-based-Views-Saved-Searches).  This Chrome Extension hopes to fill the void in a limited capacity until Zendesk provides this [much needed feature](https://support.zendesk.com/hc/en-us/community/posts/115008515707-Perform-a-search-using-string-in-URL).

## How does it work?

Grabs your search from the URL and injects the search into Zendesk's Searchbox

## How do you use it?

- [Install The Extension](https://chrome.google.com/webstore/detail/ienmdmgikmjpbjmlaimkbhhlfncidjdl)
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

![Example](https://github.com/bhudgens/zendesk_search_bookmark_enabler/raw/master/images/example_1.png)
