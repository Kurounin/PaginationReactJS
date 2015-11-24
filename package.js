Package.describe({
    "name": "kurounin:pagination",
    "summary": "ReactJS paginator class for kurounin:pagination package.",
    "version": "1.0.1",
    "git": "https://github.com/Kurounin/PaginationReactJS.git"
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@1.2.1");
    api.use([
        "meteor-base",
        "underscore",
        "kurounin:pagination"
    ]);

    api.use([
        "react"
    ], "client");

    api.addFiles([
        "client/paginator.jsx"
    ], "client");

    api.export("DefaultBootstrapPaginator", "client");
});