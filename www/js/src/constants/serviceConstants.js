define([],
    function () {
        return {
            "bookCartApi": "BookCartApi",
            "maxRowsToRetrieve": 50,
            "defaultPageSize": 10,
            "httpVerb": { GET: "GET", POST: "POST", DELETE: "DELETE", PUT: "PUT" },
            "userResponseFields": "id,FullName",
            'userContextApi': 'userContextApi',           
            'searchApi': 'searchApi',
            'bookDetailApi': 'bookDetailApi',
            'bookReviewApi':'bookReviewApi',
            'categoryApi': 'categoryApi',
            'filterApi': 'filterApi',
            'addCartItemApi': 'addCartItemApi',
            'getCartItemApi': 'getCartItemApi',
            'getOrdersApi': 'getOrdersApi',
            'placeOrdersApi': 'placeOrdersApi',
            'getCheckoutOrderApi': 'getCheckoutOrderApi',
            'removeCartItemApi': 'removeCartItemApi',
            'updateCustomerApi': 'updateCustomerApi',
            'getCustomerDetailsApi': 'getCustomerDetailsApi',
            'authenticateUserApi': 'authenticateUserApi',
            'logoutUserApi': 'logoutUserApi',
            'registerUserApi': 'registerUserApi',
            'resetUserPasswordApi': 'resetUserPasswordApi',
            'countryLookupApi':'countryLookupApi',
            'stateLookupApi':'stateLookupApi',
            'getCustomerWishListApi': 'getCustomerWishListApi',
            'addCustomerWishListApi': 'addCustomerWishListApi',
            'removeCustomerWishListApi': 'removeCustomerWishListApi',
            'generateReceiptApi': 'generateReceiptApi',
            'specialOffersApi':'specialOffersApi',
            "httpMappings": [
                {
                    "name": "userContextApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/account/get-userinfo/"
                },
                {
                    "name": "searchApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/book/Search/"
                },{
                    "name": "specialOffersApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/book/special-Offers/"
                }, {
                    "name": "bookDetailApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/book/details/"
                }, {
                    "name": "bookReviewApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/book/review/"
                }, {
                    "name": "filterApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/common/get-filters/"
                }, {
                    "name": "addCartItemApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/cart/add-book-cart/"
                }, {
                    "name": "getCartItemApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/cart/get-cart-items/"
                },
                {
                    "name": "placeOrdersApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/orders/place-order"
                }, {
                    "name": "getOrdersApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/orders/get-orders/"
                },
                {
                    "name": "removeCartItemApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/cart/remove-item-cart/"
                },
                {
                    "name": "getCheckoutOrderApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/orders/checkout-orders/"
                }, {
                    "name": "updateCustomerApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/customer/update-customer/"
                }, {
                    "name": "generateReceiptApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/customer/receipt/"
                }, {
                    "name": "getCustomerDetailsApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/customer/get-customer-details/"
                }, {
                    "name": "authenticateUserApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/account/authenticate-user/"
                }, {
                    "name": "logoutUserApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/account/logout/"
                }, {
                    "name": "registerUserApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/account/register-user/"
                }, {
                    "name": "resetUserPasswordApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/account/reset-password/"
                }, {
                    "name": "countryLookupApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/common/get-country/"
                }, {
                    "name": "stateLookupApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/common/get-state"
                }, {
                    "name": "getCustomerWishListApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/customer/get-wishlist"
                }, {
                    "name": "addCustomerWishListApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/customer/add-to-wishlist"
                }, {
                    "name": "removeCustomerWishListApi",
                    "hostname": "localhost",
                    "scheme": "http",
                    "pattern": "/shopping.data/api/customer/remove-from-wishlist"
                }
            ]
        };
    });