import { JsonMLs } from "../prest/jsonml/jsonml";

export function content_technology(): JsonMLs {
    return [
        ["div.w3-row",
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h1", "Technology"],
                ["p",
                    `We offer`, ["strong", `elastic web technology stack `],
                    `which is next and superior generation of extensible web technology stack.`,
                    ["strong", `pREST solution stack `],
                    `is a set of software subsystems or components needed to deliver a fully
                    functional web solution, e.g. a product or service.
                    Elasticity allows not only extend but also shrink in time according
                    Your business requirements.`,
                    ["strong", `Elasticity `], `is in harmony with`, ["strong", `cloud computing`],
                    `and all its types – IaaS PaaS SaaS.`
                ],
                ["p.w3-center",
                    ["img", {
                        alt: "pREST cloud computing",
                        src: "images/cloud-computing.jpg",
                        style: "width:100%;max-width:718px;" }
                    ]
                ],
                ["p",
                    `Maybe you can expand the services you currently offer
                    by electronic channels instead of employees or contractors
                    to do the same.
                    In other words, you build on the brand you’ve built to scale up your operations.
                    And/or you leverage your time more and more by offering low-ticket items,
                    which are a stepping stone to your high-ticket services.`
                ]
            ]
        ],
        ["div.w3-row-padding",
            ["div.w3-half",
                ["div.w3-container.w3-card.w3-white.w3-margin-",
                    ["h2", "Frameworks"],
                    ["dl",
                        ["dt", `pREST web`],
                        ["dd",
                            `Java `, ["abbr", { title: "Model-View-Controller" }, `MVC `],
                            `web framework designed for responsive and high performance web applications, `,
                            ["abbr", { title: `Rich Internet Applications` }, `RIA `],
                            `web services and data/application integration development by `,
                            ["abbr", { title: `Representational State Transfer` }, `REST `],
                            `architectural style.`
                        ],
                        ["dd",
                            ["a.w3-text-blue", { href: "prest-web" }, `more »`]
                        ],
                        ["dt", `pREST cluster`],
                        ["dd",
                            `Javascript library, it offers versatile widgets, forms,
                            intensive development tools and also base for building responsive `,
                            ["abbr", { title: "Asynchronous JavaScript and XML" }, `AJAX `],
                            `web applications without any restrictions.`
                        ],
                        ["dd",
                            ["a.w3-text-blue", { href: "prest-cluster" }, `more »`]
                        ],
                        ["dt", `pPHP`],
                        ["dd",
                            `Lightweight PHP web framework designed for`,
                            ["abbr", { title: "Rapid Application Development" }, `RAD `],
                            `of small web applications, landing pages, `,
                            ["abbr", { title: "Rich Internet Applications" }, `RIA `], `, `,
                            ["abbr", { title: "Representational State Transfer" }, `REST `],
                            `web services by `,
                            ["abbr", { title: "Representational State Transfer" }, `REST`],
                            `architectural style.`
                        ],
                        ["dd",
                            ["a.w3-text-blue", { href: "pphp" }, `more »`]
                        ]
                    ]
                ],
                ["div.w3-margin", " "]
            ],
            ["div.w3-half",
                ["div.w3-container.w3-card.w3-white.w3-margin-",
                    ["h2", "Solutions"],
                    ["dl",
                        ["dt", `DExtr`],
                        ["dd",
                            `Document Data Extractor is a new progressive tool for automated
                            data extraction of valuable data from various document classes:
                            invoices, bills, contracts, payslips ...`
                        ],
                        ["dd",
                            ["a.w3-text-blue", { href: "dextr" }, `more »`]
                        ],
                        ["dt", `SWID`],
                        ["dd",
                            `Identity management and "Single Sign On" solution for portal web applications.`
                        ],
                        ["dd",
                            ["a.w3-text-blue", { href: "swid" }, `more »`]
                        ],
                    ]
                ],
                ["div.w3-margin", " "],
                ["div.w3-container.w3-card.w3-white.w3-margin-",
                    ["h2", "Applications"],
                    ["dl",
                        ["dt", `inflet`],
                        ["dd",
                            `New, effective and futuristic approach to publishing, searching, and sharing of informations.`
                        ],
                        ["dd",
                            ["a.w3-text-blue", { href: "inflet" }, `more »`]
                        ]
                    ]
                ],
                ["div.w3-margin", " "]
            ]
        ]
    ];
}
