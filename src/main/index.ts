
import * as fs from "fs";
import { JsonMLs } from "./prest/jsonml/jsonml";
import { jsonmls2htmls, } from "./prest/jsonml/jsonml-html";
import { page } from "./components/page";
import { appshell } from "./components/appshell";
import { sidebar } from "./components/sidebar";
// import { content } from "./components/content";
import { content_technology } from "./components/content-technology";
import { content_rybar_cv } from "./components/content-rybar-cv";
import { content_dextr } from "./components/content-dextr";

function HTML(file: string, jsonmls: JsonMLs, pretty = false): void {
    const path = __dirname + "/../../dist/" + file;
    console.log("generate:", path);
    const html = jsonmls2htmls(jsonmls, pretty).join("");
    fs.writeFileSync(path, html);
}


const siteTitle = "Peter Rybár";

HTML("index.html",
    page(siteTitle, "", "",
        appshell(siteTitle, "CV",
            sidebar("index.html"),
            content_rybar_cv()
        )
    ),
    true
);

HTML("technology.html",
    page(siteTitle, "", "",
        appshell(siteTitle, "Technology",
            sidebar("technology.html"),
            content_technology()
        )
    ),
    true
);

HTML("dextr.html",
    page(siteTitle, "", "",
        appshell(siteTitle, "DExtr - Data Extractor",
            sidebar("dextr.html"),
            content_dextr()
        )
    ),
    true
);
