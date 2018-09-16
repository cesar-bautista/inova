function baseFactory($q, $http) {
    var settings = {
        method: 'POST',
        skipAuthorization: false,
        url: '',
        data: {},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return {
        ajaxSetup: function (options) {
            $.extend(true, settings, options);
        },
        sendAjax: function () {
            var deferred = $q.defer();
            $http({
                    method: settings.method,
                    skipAuthorization: settings.skipAuthorization,
                    url: settings.url,
                    data: settings.data,
                    headers: settings.headers
                })
                .then(function (res) {
                    deferred.resolve(res);
                })
                .then(function (error) {
                    deferred.reject(error);
                })
            return deferred.promise;
        }
    };
};

function authFactory(baseFactory) {
    var child = Object.create(baseFactory);
    return {
        login: function (user) {            
            child.ajaxSetup({
                skipAuthorization: true,
                url: '/auth/login',
                data: "email=" + user.email + "&password=" + user.password
            });
            return child.sendAjax();
        }
    }
};

function navFactory(baseFactory) {
    var child = Object.create(baseFactory);
    return {
        get: function () {
            child.ajaxSetup({
                url: '/users/menu',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWT')
                }
            });
            return child.sendAjax();
        }
    }
}

function companyFactory(baseFactory) {
    var child = Object.create(baseFactory);
    return {
        get: function () {
            child.ajaxSetup({
                url: '/companies/get'
            });
            return child.sendAjax();
        },
        save: function (company) {
            child.ajaxSetup({
                url: '/companies/save',
                data: company
            });
            return child.sendAjax();
        },
        delete: function (company) {
            child.ajaxSetup({
                url: '/companies/delete',
                data: company
            });
            return child.sendAjax();
        }
    }
}

function companybranchFactory(baseFactory) {
    var child = Object.create(baseFactory);
    return {
        get: function () {
            child.ajaxSetup({
                url: '/companiesbranch/get'
            });
            return child.sendAjax();
        },
        save: function (branch) {
            child.ajaxSetup({
                url: '/companiesbranch/save',
                data: branch
            });
            return child.sendAjax();
        },
        delete: function (branch) {
            child.ajaxSetup({
                url: '/companiesbranch/delete',
                data: branch
            });
            return child.sendAjax();
        }
    }
}

function productFactory(baseFactory) {
    var child = Object.create(baseFactory);
    return {
        get: function () {
            child.ajaxSetup({
                url: '/products/get'
            });
            return child.sendAjax();
        },
        save: function (product) {
            child.ajaxSetup({
                url: '/products/save',
                data: product
            });
            return child.sendAjax();
        },
        delete: function (product) {
            child.ajaxSetup({
                url: '/products/delete',
                data: product
            });
            return child.sendAjax();
        }
    }
}

function providerFactory(baseFactory) {
    var child = Object.create(baseFactory);
    return {
        get: function () {
            child.ajaxSetup({
                url: '/providers/get'
            });
            return child.sendAjax();
        },
        save: function (branch) {
            child.ajaxSetup({
                url: '/providers/save',
                data: branch
            });
            return child.sendAjax();
        },
        delete: function (branch) {
            child.ajaxSetup({
                url: '/providers/delete',
                data: branch
            });
            return child.sendAjax();
        }
    }
}

function seoFactory(baseFactory) {
    var child = Object.create(baseFactory);
    return {
        get: function () {
            child.ajaxSetup({
                url: '/seo/get'
            });
            return child.sendAjax();
        },
        save: function (seo) {
            child.ajaxSetup({
                url: '/seo/save',
                data: seo
            });
            return child.sendAjax();
        }
    }
}

angular.module('inspinia')
    .factory("baseFactory", baseFactory)
    .factory("authFactory", authFactory)
    .factory("navFactory", navFactory)
    .factory("companyFactory", companyFactory)
    .factory("companybranchFactory", companybranchFactory)
    .factory("productFactory", productFactory)    
    .factory("providerFactory", providerFactory)
    .factory("seoFactory", seoFactory);