# Neptune Pest Control: landing pages

Two static pages: cockroach extermination and bed bug fumigation in Nairobi. Plain HTML, CSS and JavaScript. No build step.

## Edit
- **Copy:** edit the two `.html` files. Text in `[square brackets]` needs client confirmation. Delete the brackets when confirmed.
- **Phone, WhatsApp, email, prices, discount:** `assets/js/config.js` (one place, both pages).
- **Colours and layout:** `assets/css/style.css` (colours are variables at the top).
- **Images:** see `IMAGES.md`. Save files with the exact names into `assets/img/`.

## Publish with GitHub Pages
1. Create a repo and upload these files (keep the folder structure).
2. Settings, Pages, deploy from the `main` branch, root folder.
3. Your pages: `https://<user>.github.io/<repo>/cockroach-extermination-nairobi.html`

## Links between the two pages
The pages link to each other with plain file names, so both `.html` files must sit in the same folder with exactly these names: `cockroach-extermination-nairobi.html` and `bed-bug-fumigation-nairobi.html`. Names are case-sensitive on GitHub. There is no index page: send ads and links straight to the service page.

## The quote form
By default the form opens the email app on the visitor device with the details filled in, addressed to info@neptunepestcontrol.co.ke. For a form that sends straight to the inbox without opening an email app, make a free form at formspree.io pointing to info@neptunepestcontrol.co.ke, then paste its URL into `formEndpoint` in `assets/js/config.js`.

## Before launch
Test the calculator, the email form, and the call and WhatsApp buttons on a phone. Nothing goes live or gets spent without Andriesa's OK.
