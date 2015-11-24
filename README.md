Kurounin:Pagination-ReactJS
=================

This package provides a bootstrap 3 paginator ReactJS class to be used with the [kurounin:pagination](https://atmospherejs.com/kurounin/pagination) package.

# Usage
```js
<DefaultBootstrapPaginator pagination={this.pagination} limit={10} containerClass="text-center" />
```

Available class properties are:
* `pagination`: pagination instance
* `limit`: maximum number of page links to display (defaults to **10**)
* `containerClass`: optional container class for the paginator
