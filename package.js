Package.describe({
    "name": "kurounin:pagination-reactjs",
    "summary": "ReactJS paginator class for kurounin:pagination package.",
    "version": "1.0.1",
    "git": "https://github.com/Kurounin/PaginationReactJS.git"
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@1.2.1");
    api.use([
        "meteor-base",
        "underscore",
        "kurounin:pagination@1.0.7"
    ]);

    api.use([
        "react@0.14.1_1"
    ], "client");

    api.addFiles([
        "client/paginator.jsx"
    ], "client");

    api.export("DefaultBootstrapPaginator", "client");
});