const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

    mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/vendor.js', 'public/js')
    .copyDirectory('ng/ngf', 'public/ngf')
    .copyDirectory('ng/images', 'public/images')
    .copy('ng/js/*.js', 'public/js')
    .copy('ng/css/*.css', 'public/css')
    .copy('ng/*.js', 'public/js')
    .scripts([

        'public/js/ng/js/angular-ui-router.js',
        'public/js/ng/js/angular-messages.js',
        'public/js/ng/js/angular-animate.js',
        'public/js/ng/js/angular-sanitize.js',
        'public/js/ng/js/angular-ui-router-title.js',
        'public/js/ng/js/ocLazyLoad.js',
        'public/js/ng/js/angular-country-state.js',

        'public/js/ng/app.module.js',
        'public/js/ng/mainCtrl.js',
        'public/js/ng/app.config.js',
        'public/js/ng/app.component.js',

        'public/ngf/home/home.module.js',
        'public/ngf/home/home.component.js',

        'public/ngf/hotel/hotel.module.js',
        'public/ngf/hotel/hotel.component.js',
        'public/ngf/hotel/hotel_result_controller.js',

        'public/ngf/event_center/event_center.module.js',
        'public/ngf/event_center/event_center.component.js',

        'public/ngf/account/account.module.js',
        'public/ngf/account/account.config.js',
        'public/ngf/account/account.component.js'
        ],'public/js/all.js')
        .styles([
            'public/css/ng/css/index.css',
            'public/css/ng/css/angular-csp.css',
            'public/css/ng/css/animate.css',
            'public/css/ng/css/hover.css',
            'public/css/ng/css/materialize.css',
            'public/css/ng/css/normalize.css'
        ],'public/css/all.css')
   .sass('resources/assets/sass/vendor.scss', 'public/css')
    mix.browserSync({
        proxy : 'kittron.com'
    });