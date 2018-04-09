import { JsonMLs } from "../prest/jsonml/jsonml";

interface Menu {
    url: string;
    label: string;
    icon: string;
}

export function sidebar(active: string): JsonMLs {
    const menu: Menu[] = [
        { url: "index.html", label: "Curriculum Vitae", icon: "i.fa.fa-eye.fa-fw" },
        { url: "technology.html", label: "Technology", icon: "i.fa.fa-users.fa-fw" },
        { url: "dextr.html", label: "Dextr - Data Extractor", icon: "i.fa.fa-bell.fa-fw" },
        // { url: "settings.html", label: "Settings", icon: "i.fa.fa-cog.fa-fw" }
    ];
    const nbsp = "\u00a0 ";
    return [
        ["nav",
            ["br"],
            ["div.w3-container.w3-row",
                ["div.w3-col.s4",
                    ["img.w3-circle.w3-margin-right",
                        {
                            src:  "assets/rybar.png",
                            style: "width:60px"
                        }
                    ]
                ],
                ["div.w3-col.s8.w3-bar",
                    ["span",
                        ["a.w3-xlarge", { href: "index.html", style: "text-decoration: none;" },
                            "Peter Rybár"
                        ]
                    ],
                    ["br"],
                    ["a.w3-bar-item.w3-button", { href: "mailto:pr.rybar@gmail.com", title: "Mail" },
                        ["i.fa.fa-envelope"]
                    ],
                    ["a.w3-bar-item.w3-button", { href: "https://www.linkedin.com/in/peter-rybar-9861996/", title: "LinkedIn", target: "_blank" },
                        ["i.fa.fa-linkedin"]
                    ],
                    ["a.w3-bar-item.w3-button", { href: "https://plus.google.com/u/0/+PeterRyb%C3%A1r", title: "Google+", target: "_blank" },
                        ["i.fa.fa-google-plus"]
                    ]
                ],
            ],
            ["hr"],
            // ["div.w3-container",
            //     ["h5", "Menu"],
            // ],
            ["div.w3-bar-block",
                ...menu.map(m => {
                    return (
                        ["a.w3-bar-item.w3-button.w3-padding",
                            {
                                href: m.url,
                                classes: m.url === active ? ["w3-gray", "w3-text-white"] : []
                            },
                            [m.icon], nbsp, m.label
                        ]);
                })
            ],
            ["hr"],
            ["div.w3-center",
                ["a.w3-button",
                    {
                        href: "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fpeter-rybar.github.io&title=Peter Rybar&source=https%3A%2F%2Fpeter-rybar.github.io",
                        title: "Share on LinkedIn",
                        target: "_blank"
                    },
                    ["i.fa.fa-linkedin"]
                ],
                ["a.w3-button",
                    {
                        href: "https://plus.google.com/share?url=https%3A%2F%2Fpeter-rybar.github.io",
                        title: "Share on Google+",
                        target: "_blank"
                    },
                    ["i.fa.fa-google-plus"]
                ],
                ["a.w3-button",
                    {
                        href: "https://twitter.com/intent/tweet?source=https%3A%2F%2Fpeter-rybar.github.io&text=Peter Rybar:%20https%3A%2F%2Fpeter-rybar.github.io",
                        title: "Tweet",
                        target: "_blank"
                    },
                    ["i.fa.fa-twitter"]
                ],
                ["a.w3-button",
                    {
                        href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpeter-rybar.github.io&quote=Peter Rybar",
                        title: "Share on Facebook",
                        target: "_blank"
                    },
                    ["i.fa.fa-facebook"]
                ],
                ["br"],
                "Share"
            ],
            ["br"],
            ["br"]
        ]
    ];
}
