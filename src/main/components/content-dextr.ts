import { JsonMLs } from "../prest/jsonml/jsonml";

export function content_dextr(): JsonMLs {
    return [
        ["div.w3-row",
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h1", "DExtr – Document Data Extractor"],
                ["p",
                    `Document Data Extractor is a new progressive tool
                     for automated data extraction of valuable data
                     from various document classes:
                     invoices, bills, contracts, payslips ...`
                ],
                ["p",
                    `More on `, ["strong", ["a", { href: "http://dextr.sk", target: "_blank" }, `DExtr.sk &raquo;`]]
                ]
            ],
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h2", "Automate your document processes"],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                        ["p",
                            `Does your company handle a lot of documents?`,
                            ["br"],
                            `Does it involve manual labour?`,
                            ["br"],
                            ["strong", `DExtr`],
                            `helps you improve your processes, reduce manual work and cut your costs by:`,
                            ["ul",
                                ["li", `Extracting valuable data in your documents and provides them for further processing`],
                                ["li", `Performing intelligent classification of different types of documents`],
                                ["li", `Significantly reducing document processing time`]
                            ]
                        ],
                        ["p",
                            `More on `,
                            ["strong", ["a", { href: "http://dextr.sk", terget: "_blank" }, "DExtr.sk &raquo;"]]
                        ]
                    ],
                    ["div.w3-container.w3-half",
                        ["p",
                            ["img", {
                                src: "images/dextr/automate_doc_process_cr.jpg",
                                alt: "",
                                style: "width:100%;max-width:718px;" }]
                        ]
                    ]
                ]
            ],
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h2", "Load your Big Data"],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                        ["p",
                           `Looking for new data sources?`,
                            ["br"],
                            `Searching for intelligent Data Mining Tool?`,
                            ["br"],
                            ["strong", `DExtr`],
                            `provides set of professional tools, which allows you to:`
                        ],
                        ["ul",
                            `Reveal semantics in text documents`,
                            `Provide document structure and OCR text recovery`,
                            `Improve natural language processing and named entity recognition`
                        ],
                        ["p",
                            "More on ", ["strong", ["a", { href: "http://dextr.sk", target: "blank" }, "DExtr.sk &raquo;"]]
                        ]
                    ],
                    ["div.w3-container.w3-half",
                        ["p",
                            ["img", {
                                src: "images/dextr/big-data_cr.jpg",
                                alt: "",
                                style: "width:100%;max-width:718px;" }]
                        ]
                    ]
                ]
            ],
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h2", " Reveal semantics in unstructured and non-semantic data"],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                    ["p",
                        `Text reconstruction. Semantic analysis.`
                    ],
                    ["ul",
                        ["li", `Dynamic Entity recognition`],
                        ["li", `Natural language processing`],
                        ["li", `Advanced pattern matching algorithms`],
                        ["li", `Page layout vs. text stream dualism`]
                    ],
                    ["p",
                        `More on `, ["strong", ["a", { href: "http://dextr.sk", target: "_blank" }, "DExtr.sk &raquo;"]]
                    ]
                    ],
                    ["div.w3-container.w3-half",
                        ["p",
                            ["img", {
                                src: "images/dextr/semantics.jpg",
                                alt: "",
                                style: "width:100%;max-width:718px;" }]
                        ]
                    ]
                ]
            ]
        ]
    ];
}
