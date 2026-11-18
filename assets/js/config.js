// EDIT HERE: phone, WhatsApp, email and pricing. Used by both pages.
window.NEPTUNE = {
  phone: "+254716505064", phoneDisplay: "0716 505 064", whatsapp: "254716505064", email: "info@neptunepestcontrol.co.ke",
  formEndpoint: "",                // optional: paste a Formspree URL to send the form straight to the inbox
  discount: 0.10,                  // 10% offer. Set to 0 to remove it.
  maxBedrooms: 6,                  // above this, we ask the visitor to message for a quote
  pricing: {
    cockroach: { base: 3000, extra: 1500 },  // KSh for 1 bedroom, then KSh per extra bedroom
    bedbug:    { base: 3000, extra: 1500 }   // TODO confirm bed bug pricing with client
  }
};
