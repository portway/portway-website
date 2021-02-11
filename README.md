# Portway Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/1d53eb10-f7a8-488c-975f-081a9dea385f/deploy-status)](https://app.netlify.com/sites/portway-website/deploys)

Marketing site for Portway app

* [Deployments](#deployments)
* [Adding a sponsor](#adding-a-sponsor)

## Local development

1. `npm install`
1. `npx gatsby develop`

Your website will be running on http://localhost:8000/

## Deployments

Deployments are through Netlify. `master` is automatically deployed when it's updated.

Every pull request gets a special preview URL, so that you can test changes there.

---

## Adding a sponsor

Sponsors URLs are read from the Gatsby siteMetadata, located in `gatsby-config.js`.

* Sponsors will get a unique URL at /${sponsor.slug}
* An optional banner with a message (required) and logo (optional) can be displayed

---

## Tracking Signup Source

Any links to the Portway app signup form should include an `a` tag with the following data attribute: `<a data-link="portway-signup">`. This will automatically attach a query paramter to the link indicating the signup source.

To add a new signup source, in `src/scripts/utilities` edit the `identifySignupSource` function.

Signup sources will be stored on the user account in Portway to track retention.