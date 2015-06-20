module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            sitecss: {
                files: {
                    'wwwroot/assets/css/styles-1.0.0.min.css': [
                        'bower_components/materialize/dist/css/materialize.css',
                        'bower_components/animate.css/animate.css',
                        'bower_components/ngImgCrop/compile/unminified/ng-img-crop.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/materialize/dist/js/materialize.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/ngImgCrop/compile/unminified/ng-img-crop.js'
                ],
                dest: 'wwwroot/assets/js/scripts-1.0.0.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/materialize/font/',
                        src: '**',
                        dest: 'wwwroot/assets/font/',
                        flatten: false
                    }
                ]
            }
        }
    });

    grunt.registerTask("default", ["bower:install"]);
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
};
