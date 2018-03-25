import { JsonMLs } from "../prest/jsonml/jsonml";

export function content_rybar_cv(): JsonMLs {
    return [
        ["div.w3-row",
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h1", "Peter Rybár", ["span.w3-text-gray", " - CV"]],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                            ["dl",
                            ["dt", "IT consultant"],
                            ["dt", "Project leader"],
                            ["dt", "Solutions architect"],
                            ["dt", "Technology leader"],
                            ["dt",
                                ["a.w3-text-blue",
                                    { href: "docs/csm/Peter_Rybar-ScrumAlliance_CSM_Certificate-Letter.pdf" },
                                    "Certified ScrumMaster"
                                ]
                            ],
                            ["dt", "HR consultant"]
                        ],
                        ["p",
                            "E-mail: ",
                            ["a.w3-text-blue", { href: "mailto:pr.rybar@gmail.com" }, "pr.rybar@gmail.com"]
                        ],
                    ],
                    ["div.w3-container.w3-half",
                        ["div.w3-panel.w3-leftbar.w3-light-grey",
                            ["p.w3-large.w3-serif",
                                ["em",
                                    `"Perfection is achieved, not when there is nothing more to add,
                                     but when there is nothing left to take away."`
                                ]
                            ],
                            ["p",
                                ["cite", { title: "" }, `Antoine de Saint Exupery`]
                            ]
                        ]
                    ]
                ]
            ],
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h2", "Professional background"],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                        ["h3", "Experiences"],
                        ["ul",
                            ["li", "IT solutions analysis and design (SOA, ROA, REST)"],
                            ["li", "Project management and team leadership (Java, Typescript/Javascript, PHP, Python, C/C++)"],
                            ["li", "Web applications and web services development (Java, Typescript/Javascript, Python, PHP, HTML5, XHTML, CSS, AJAX, JSON)"],
                            ["li", "Client-server and network applications development (C/C++)"],
                            ["li", "Desktop applications development (GTK+, gtkmm, PyGTK, QT)"],
                            ["li", "Linguistic full-text search engine development (Python, C)"],
                            ["li", "Character Linux device drivers developer (C)"],
                            ["li", "System and cluster administration (Linux, BSD, MOSIX, Condor)"],
                            ["li", "Network administration (LAN, WAN)"],
                            ["li", "HR consulting for IT sector"]
                        ]
                    ],
                    ["div.w3-container.w3-half",
                        ["h3", "Job positions"],
                        ["ul",
                            ["li", "CTO"],
                            ["li", "IT consultant"],
                            ["li", "Solutions architect"],
                            ["li", "HR consultant for IT sector"],
                            ["li", "IT architect"],
                            ["li", "IT analyst"],
                            ["li", "Company lead developer"],
                            ["li", "Project leader/manager"],
                            ["li", "Web applications developer"],
                            ["li", "GUI Application developer"],
                            ["li", "Linux device drivers developer"],
                            ["li", "System administrator"],
                            ["li", "Network administrator"]
                        ]
                    ]
                ],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                        ["h3", "Partners and Projects"],
                        ["ul",
                            ["li", "TREETI.com (DECENT Go) - Blockchain ", ["abbr", { title: "Video on demand" }, `VOD`], "distributiont platform"],
                            ["li", "DECENT.ch - Decentralized Blockchain/IPFS content distributiont"],
                            ["li", "Game Server provider architecture and implementation including REST services. HTML5 slot games technology stack introduced."],
                            ["li", "DAVINCIsoftware.sk - Project DTA v2 (Document Text Analyser), architecture and implementation of new generation data extraction engine."],
                            ["li", "pelicantravel.com s.r.o. - new intranet and extranet solution, architecture, Java REST based technology stack and related solutions, technology consultant and leader"],
                            ["li", "Softec s.r.o., Bratislava, Slovakia - IT architecture, network and security administration"],
                            ["li", "SPP (Slovak Gass Industry) - GPS monitoring system"],
                            ["li", "OVB (financial institution) - IS integration solution, feasibility study"],
                            ["li", "Allianz - B2B application for frequent insurance services customer (Slovak army)"],
                            ["li", "APVV, Slovak Research and Development Agency - IS system for grants management"],
                            ["li", "Telefónica O2 Slovakia, s.r.o. - web portal infrastructure and integration architecture proposal"],
                            ["li", "Česká pojišťovna, Praha, Czech Republic - online insurance distribution web applications"],
                            ["li", "T-Mobile Slovensko, a.s. - telecommunications company, small internal REST web services"],
                            ["li", "Centaur a.s., Bratislava, Slovakia - project leadership, network and security administration"],
                            ["li", "Orange a.s., Bratislava, Slovakia - many iternal projects for IS and Technical department"],
                            ["li", "Slovak National Corpus, Slovak academy of sciences - linguistic full-text search engine"],
                            ["li", "TraviAustria, Datenservice für Reise und Touristik GmbH & Co. Nfg. KG, Wien, Austria - flight search and booking system"],
                            ["li", "BPA spol. s r.o. - internal sale system"],
                            ["li", "International and local scientific and academic projects in the region of nanotechnology, biophysics and biochemistry – responsible for technical problems solving, development of measuring devices and technical design, GNU/Linux device drivers and operational software development."],
                            ["li", "Some other small projects ..."]
                        ]
                    ],
                    ["div.w3-container.w3-half",
                        ["h3", "Project leader on projects"],
                        ["ul",
                            ["li", "TREETI (DECENT Go) - CTO, Solution architect for Blockchain ", ["abbr", { title: "Video on demand" }, `VOD`], " Platform"],
                            ["li", "DECENT.ch - Solution architect for Blockchain Web Platform"],
                            ["li", "Slot games html5 client - Next generation HTML5/TypeScript Game Client infrastructure and dev stack for slot games production."],
                            ["li", "Slot games server - Next generation Game Server and related analytical and business intelligence tools."],
                            ["li", "DTA v2 - Document Text Analyser second generation engine."],
                            ["li", "DTA SaaS - Document Text Analyser SaaS application."],
                            ["li", "HistoryTools - customizable modular scheduling tool written Python"],
                            ["li", "OREX fultext search (Oracle)"],
                            ["li", "UCP Sender - SMS center gateway (C/C++)"],
                            ["li", "XBF Wrapper (PHP, bash, Java)"],
                            ["li", "EInvoice utils (Java, Oracle)"],
                            ["li", "MLDA - Mail LDA in Java (LDAP, Oracle)"],
                            ["li", "NPR Loader - High performance NPR data format parser and DB loader (C/C++, Oracle)"],
                            ["li", "SPP GPS Monitoring - vehicle GPS tracking system with web IU (Java, Javascript, pREST, Oracle)"],
                            ["li", "Online insurance - web applications for online distribution of insurance"],
                            ["li", "flipo.pl - online flight tickets booking and insurance web site and backoffice. Member of portals of pelicantravel.com s.r.o. They were forced to stop using ", ["a.w3-text-blue", { href: "prest-web" }, `pREST web framework `], "in February 2013 because of not paying for software licenses."],
                            ["li", ["a.w3-text-blue", { href: "prest-web" }, "pREST"], " - ROA (Resources oriented architecture) and REST Java web framework for servlet container, designed to effective development of RIA web applications, REST web services, data and application integration"]
                        ]
                    ]
                ]
            ],
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h2", "IT skills"],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                        ["h3", "IT Architecture"],
                        ["p", `Some of my presentations about REST architectural style and related stuff (in Slovak language).`],
                        ["dl",
                            ["dt", "Web UI, UX"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/Fat_web_ui_without_fw.pdf" }, "Fat_web_ui_without_fw.pdf"],
                                ["br"]
                            ],
                            ["dt", "SOA, Integration"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/Integracia-SOA.pdf" }, "Integracia-SOA.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/Integracia-SOA-REST.pdf" }, "Integracia-SOA-REST.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/REST-pREST.pdf" }, "REST-pREST.pdf"]
                            ],
                            ["dt", "REST architecture"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "http://lanyrd.com/2014/java-group-10-vyrocna/sczdkg/", target: "_blank" }, "Java Group #10, REST (presentation in Slovak)"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/rest.pdf" }, "rest.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/rest-itp.pdf" }, "rest-itp.pdf"],
                                ["br"]
                            ],
                            ["dt", ["a.w3-text-blue", { href: "../prest-web" }, "pREST"],
                                "web framework (previous generation known as a tREST)"
                            ],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/pREST.pdf" }, "pREST.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/tREST.pdf" }, "tREST.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/tREST_clanok.pdf" }, "tREST_clanok.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/tREST-2-iks.pdf" }, "tREST-2-iks.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/tREST-2_full.pdf" }, "tREST-2_full.pdf"],
                                ["br"]
                            ],
                            ["dt", "Gaming"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/How_to_build_GameServer_2.pdf" }, "How_to_build_GameServer_2.pdf"],
                                ["br"]
                            ],
                            ["dt", "Maven"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/proto.pdf" }, "proto.pdf"],
                                ["br"]
                            ],
                            ["dt", "OpenID"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/infoware-OpenID.pdf" }, "infoware-OpenID.pdf"],
                                ["br"]
                            ],
                            ["dt", "Cloud computing"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/infoware-cloud_computing.pdf" }, "infoware-cloud_computing.pdf"],
                                ["br"]
                            ],
                            ["dt", "GNU/Linux"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/linux.pdf" }, "linux.pdf"],
                                ["br"]
                            ],
                            ["dt", "Project and version management"],
                            ["dd",
                                ["a.w3-text-blue", { rel: "me", href: "docs/trac.pdf" }, "trac.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/bazaar-scm.pdf" }, "bazaar-scm.pdf"],
                                ["br"],
                                ["a.w3-text-blue", { rel: "me", href: "docs/ODF-OOo-versioning.pdf" }, "ODF-OOo-versioning.pdf"],
                                ["br"]
                            ]
                        ],
                        ["p",
                            ["strong", ["a.w3-text-blue", { href: "../prest-web" }, "pREST"]],
                            ` - ROA (Resources oriented architecture) and REST Java web framework
                             for servlet container, designed to effective development of RIA web applications,
                             REST web services, data and application integration.`
                        ]
                    ],
                    ["div.w3-container.w3-half",
                        ["h3", "Technologies"],
                        ["dl",
                            ["dt", "WEB"],
                            ["dd",
                                ["ul",
                                    ["li",
                                        "HTML5, XHTML, CSS, JavaScript, TypeSctipt, AJAX, RSS, Atom, MicroFormats, Microdata"
                                    ],
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm", target: "_blank" }, "REST"],
                                        " , ",
                                        ["a.w3-text-blue", { href: "http://www.xmlrpc.com", target: "_blank" }, "XML-RPC"],
                                        " , SOAP"
                                    ],
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://www.yaml.org/", target: "_blank" }, "YAML"],
                                        ", XML, SGML"
                                    ],
                                    ["li",
                                        "JavaSE, JavaEE, JDO, JPA, Datanucleus, Hibernate"
                                    ],
                                    ["li",
                                        "Servlet, Struts 2, ", ["a.w3-text-blue", { href: "http://turbogears.org/", target: "_blank" }, "TurboGears"],
                                        ", ",
                                        ["a.w3-text-blue", { href: "http://www.cherrypy.org/", target: "_blank" }, "Cherrypy"],
                                        ", Ruby on Rails"
                                    ],
                                    ["li",
                                        "Apache, Tomcat, Jetty, Nginx, Lighttpd"
                                    ],
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://openid.net/", target: "_blank" }, "OpenID"],
                                        " - free, decentralized and easy way to use a single digital identity across the Internet."
                                    ],
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://spring.io/", target: "_blank" }, "Spring"]
                                    ],
                                    ["li",
                                        ["strong", "pREST - Java web MVC framework"],
                                        " (Best of Breed, because I made it myself)"
                                    ]
                                ]
                            ],
                            ["dt", "Fulltext Search"],
                            ["dd",
                                ["ul",
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://www.elasticsearch.org/", target: "_blank" }, "Elasticsearch"],
                                        ` – distributed, schema-free and document-oriented databases (NoSQL)
                                         and search engine for building very effective applications.`
                                    ],
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://korpus.juls.savba.sk/", target: "_blank" }, "Slovenský národný korpus"]
                                    ]
                                ]
                            ],
                            ["dt", "Desktop"],
                            ["dd",
                                ["ul",
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://www.gnome.org/", target: "_blank" }, "GNOME"]
                                    ],
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://gtk.org/", target: "_blank" }, "GTK+"],
                                        ", ",
                                        ["a.w3-text-blue", { href: "http://www.gtkmm.org/", target: "_blank" }, "gtkmm"],
                                        ", ",
                                        ["a.w3-text-blue", { href: "http://www.pygtk.org/", target: "_blank" }, "PyGTK"],
                                        ", ",
                                        ["a.w3-text-blue", { href: "http://trolltech.com/products/qt", target: "_blank" }, "QT"]
                                    ]
                                ]
                            ],
                            ["dt", "Linux"],
                            ["dd",
                                ["ul",
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://www.kernel.org/", target: "_blank" }, "Linux kernel"]
                                    ],
                                    ["li", "Linux as a network server"],
                                    ["li", "Linux as a network gateway, router and packet filter"],
                                    ["li",
                                        ["a.w3-text-blue", { href: "http://dbus.freedesktop.org/", target: "_blank" }, "D-Bus"]
                                    ],
                                ]
                            ],
                            ["dt", "Protocols"],
                            ["dd",
                                ["ul",
                                    ["li", "HTTP, HTTPS, SMTP, XMPP, WAP, FTP, SFTP, Jabber"],
                                    ["li", "TLS, SSL"],
                                    ["li", "IP, TCP, UDP, ICMP"]
                                ]
                            ]
                        ]
                    ]
                ],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                        ["h3", "Programming languages"],
                        ["p",
                            `I learned many programming languages to choose the best one.
                             But I still haven't found what I'm looking for.`
                        ],
                        ["dl",
                            ["dt", "Compiled Languages"],
                            ["dd",
                                "C, C++, Vala, Fortran, Pascal, ADA",
                                ["br"],
                                "Java (Jython, Jruby, Groovy), C#"
                            ],
                            ["dt", "Interpreted Languages"],
                            ["dd",
                                `Python, Ruby, PHP, Perl, Typescript/Javascript, TCL/TK, Pike, Lua`
                            ],
                            ["dt", "Shells"],
                            ["dd",
                                "sh, bash, csh, tcsh, zsh"],
                            ["dt", "Markup Languages"],
                            ["dd",
                                "XML, HTML5, XHTML, DHTML, SGML, WML, YAML"
                            ],
                            ["dt", "Modeling Languages"],
                            ["dd",
                                "The Unified Modeling Language (UML)"
                            ],
                            ["dt", "Databases - SQL"],
                            ["dd",
                                "PostgresSQL, MySQL, SQLite, Oracle, MSSQL"
                            ],
                            ["dt", "Source code management"],
                            ["dd",
                                "Bazaar, Git, Mercurial, Subversion, CVS"
                            ]
                        ]
                    ],
                    ["div.w3-container.w3-half",
                        ["h3", "Operating systems"],
                        ["p",
                            `A few years ago (about 1995) I was looking for a stable
                             and powerful operating system for server same as desktop
                             deployment to fulfill my growing needs. Linux is a winner.`
                        ],
                        ["dl",
                            ["dt", ["a.w3-text-blue", { href: "http://www.linux.org/", target: "_blank" }, "Linux"]],
                            ["dd",
                                "Among number of distributions I examined, I prefer ",
                                ["a.w3-text-blue", { href: "http://www.debian.org", target: "_blank" }, "Debian GNU/Linux"],
                                " and some of its clones (related projects) like ",
                                ["a.w3-text-blue", { href: "http://www.ubuntu.com/", target: "_blank" }, "Ubuntu"]
                            ],
                            ["dt", ["a.w3-text-blue", { href: "http://www.bsd.org", target: "_blank" }, "BSD"]],
                            ["dd",
                                "I tried ",
                                ["a.w3-text-blue", { href: "http://www.pcbsd.org", target: "_blank" }, "PCBSD"],
                                ", ",
                                ["a.w3-text-blue", { href: "http://www.openbsd.org", target: "_blank" }, "OpenBSD"],
                                ", ",
                                ["a.w3-text-blue", { href: "http://www.netbsd.org", target: "_blank" }, "NetBSD"],
                                " and ",
                                ["a.w3-text-blue", { href: "http://www.freebsd.org", target: "_blank" }, "FreeBSD"],
                                ", but I found more suitable System V like systems."
                            ],
                            ["dt", ["a.w3-text-blue", { href: "http://www.apple.com/macosx/", target: "_blank" }, "Mac OS X"]],
                            ["dd",
                                "Nice GUI, good desktop choice."
                            ],
                            ["dt", ["a.w3-text-blue", { href: "http://www.sun.com/solaris", target: "_blank" }, "Solaris"]],
                            ["dd",
                                "Nice kernel, but user space and GUI seems to me out of date."
                            ],
                            ["dt", ["a.w3-text-blue", { href: "http://wikipedia.org/wiki/Windows", target: "_blank" }, "Windows"]],
                            ["dd",
                                "I grew up on this system, but I consider it as the worst choice.",
                                ["br"],
                                "VISTA - Viruses, Intrusions, Spyware, Trojans, Adware"
                            ]
                        ]
                    ]
                ]
            ],
            ["div.w3-container.w3-card.w3-white.w3-margin",
                ["h2", "Education"],
                ["div.w3-panel.w3-leftbar.w3-light-grey",
                    ["p.w3-large.w3-serif",
                        ["em",
                            `"I thought I would become a physicist; however, the pleasure of programming, where I could make real progress and see results, gradually grew and overtook the pleasure of learning physics."`
                        ]
                    ],
                    ["p",
                        ["cite", { title: "" }, `Richard Stallman`]
                    ]
                ],
                ["div.w3-row",
                    ["div.w3-container.w3-half",
                        ["h3", "Graduations"],
                        ["ul",
                            ["li",
                                `Faculty of Mathematics and Physics,`,
                                ["br"],
                                `Comenius University, Bratislava, Slovakia (1992-1997),`,
                                ["br"],
                                `Specialization biophysics and chemical physics.`,
                                ["br"],
                                `Topic of diploma thesis: Study of Physical Properties of Binary Lipid`,
                                ["br"],
                                `Mixtures and Human Plasma Lipoproteins by the Method of Molecular Acoustic.`,
                                ["br"],
                                ["strong", `Mgr. in physics: biomedical physics</strong>.`],
                                ["br"]
                            ],
                            ["li",
                                `Faculty of Mathematics and Physics,`,
                                ["br"],
                                `Comenius University, Bratislava, Slovakia (1992-1997).`,
                                ["br"],
                                ["strong", `Mgr. in didactic physics`],
                                ".",
                                ["br"]
                            ],
                            ["li",
                                `Faculty of Mathematics, Physics and Informatics,`,
                                ["br"],
                                `Comenius University, Bratislava, Slovakia (2000).`,
                                ["br"],
                                `Postgraduate study in physics.`,
                                ["br"],
                                `Topic: Human plasma lipoproteins oxidation, influence of antioxidants.`,
                                ["br"],
                                ["strong", `RNDr. physics (European equivalent for Doctor of Science - D.Sc., Sc.D., S.D., or Dr.Sc. in US)`],
                                ` pass in January 2000.`,
                                ["br"],
                            ],
                            ["li",
                                `Faculty of Mathematics, Physics and Informatics,`,
                                ["br"],
                                `Comenius University, Bratislava, Slovakia (1997-2000).`,
                                ["br"],
                                `Postgraduate study in physics.`,
                                ["br"],
                                `Topic: Study of influence of the oxidation processes`,
                                ["br"],
                                `on physical properties of biocoloids.`,
                                ["br"],
                                ["strong", `PhD. (philosophiae doctor) in biophysics`],
                                ` pass in March 2004.`,
                                ["br"]
                            ],
                            ["li",
                                `Faculty Electrotechnics and Informatics,`,
                                ["br"],
                                `Slovak Technical University, Bratislava, Slovakia (2000-2002).`,
                                ["br"],
                                `European Engineer (Eur Ing, EUR ING) study.`,
                                ["br"],
                                `Specialization on telecommunications.`,
                                ["br"]
                            ]
                        ]
                    ],
                    ["div.w3-container.w3-half",
                        ["h3", "Languages"],
                        ["ol",
                            ["li", `Slovak - native`],
                            ["li", `Czech - activ`],
                            ["li", `English - fair`],
                            ["li", `Russian - fair`],
                            ["li", `German - basic`]
                        ]
                    ]
                ]
            ]
        ]
    ];
}
