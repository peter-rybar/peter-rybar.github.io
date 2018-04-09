import { JsonMLs } from "../prest/jsonml/jsonml";

export function page(title: string,
                     description: string,
                     keywords: string,
                     content: JsonMLs,
                     lang = "en"): JsonMLs {
    return [
        "<!DOCTYPE html>",
        ["html", { lang: lang },
            ["head",
                ["meta", { charset: "utf-8" }],
                ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }],
                ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0" }],

                ["title", title],

                ["meta", { name: "description", content: description }],
                ["meta", { name: "keywords", content: keywords }],
                ["meta", { name: "author", content: "Peter Rybar, pr.rybar@gmail.com" }],
                ["meta", { name: "robots", content: "follow, all" }],

                // TODO
                // ["meta", { property: "og:type", content: "website" }],
                // ["meta", { property: "og:title", content: "0100 Ventures" }],
                // ["meta", { property: "og:description", content: "We are a venture builder running a multinational co-working space, organizing international VC conferences, Innovation Consulting, and taking on the challenges of tomorrow." }],
                // ["meta", { property: "og:url", content: "http://www.0100ventures.com/" }],
                // ["meta", { property: "og:image", content: "http://www.0100ventures.com/_web/img/thumbnail.png" }],
                // ["meta", { property: "og:image:width", content: "400" }],
                // ["meta", { property: "og:image:height", content: "300" }],
                // ["meta", { property: "fb:app_id", content: "315060158846201" }],

                ["link", { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css" }],
                ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Raleway" }],
                ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }],
                ["link", { rel: "stylesheet", href: "assets/css/styles.css" }],

                ["style", `html, body, h1, h2, h3, h4, h5 { font-family: "Raleway", sans-serif }`],

                ["meta", { id: "theme-color", name: "theme-color", content: "#37474F" }],
                ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],

                ["link", { rel: "manifest", href: "manifest.json" }]
            ],
            ["body.w3-light-grey",
                ...content,
                ["script", { src: "sw-init.js" }]
            ]
        ]
    ];
}
