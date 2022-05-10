require("dotenv").config();
import { T_weeve, T_address } from "./types";

export function forWeeve (weeve: T_weeve) {
  if(weeve)
    return`
    <!DOCTYPE html>
    <html lang="en">
      <head prefix="https://ogp.me/ns/article">
        <meta charset="utf-8">
        <title>${weeve.id}</title>
        <meta property="og:title" content="${weeve.text}" />
        <meta property="og:image" content="https://${process.env.GATEWAY}/${weeve.picture}" />
        <meta property="og:url"   content="https://${process.env.GATEWAY}/${weeve.id}" />
        <meta property="og:site_name"   content="Metaweave.xyz" />
        <meta property="og:type"        content="article" />
        <meta property="article:author" content="${weeve.jwk}" />
      </head>
      <body>
        <script>
          window.location.replace("https://${process.env.GATEWAY}/${process.env.ARGORA_TXID}/thread/${weeve.id}");
        </script>
      </body>
    </html>`
  else
    return `corrupted weeve`;
};

export function forProfile (address: T_address) {
  
  if (address) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head prefix="https://ogp.me/ns/article">
        <meta charset="utf-8">
      </head>
      <body>
        address is ${address}
      </body>
    </html>`
  }
}