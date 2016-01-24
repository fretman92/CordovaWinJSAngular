/// <binding BeforeBuild='build' />
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                  '<%= grunt.template.today("yyyy-mm-dd") %> */\n(function(angular) {\n\'use strict\';\n',
                footer: '})(window.angular);'},
            dist: {
                src: ['scripts/**/*.js'],
                dest: 'www/scripts/appBundleGrunt.js',
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', ['concat', ]);
};