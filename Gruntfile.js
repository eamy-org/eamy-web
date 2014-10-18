'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        config: {
            src: 'src',
            dest: 'dest'
        },

        assemble: {
            options: {
                assets: '<%= config.dest %>/assets',
                layoutdir: '<%= config.src %>/templates/layouts',
                layout: '<%= assemble.options.layourdir %>/default.hbs',
                data: '<%= config.src %>/data/*.{json,yml}',
                partials: '<%= config.src %>/templates/partials/*.hbs',
                helpers: [
                    '<%= config.src %>/templates/helpers/**/*.js'
                ]
            },
            content: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.src %>/content',
                        src: '**/*.md',
                        dest: '<%= config.dest %>'
                    }
                ]
            }
        },

        copy: {
            assets: {
                files: [
                    {
                        src: ['*.*', 'CNAME', '.nojekyll'],
                        expand: true,
                        cwd: '<%= config.src %>/assets',
                        dest: '<%= config.dest %>'
                    },
                    {
                        src: ['css/**/*', 'img/**/*', 'js/**/*', 'vendor/**/*'],
                        expand: true,
                        cwd: '<%= config.src %>/assets',
                        dest: '<%= config.dest %>/assets'
                    }
                ]
            }
        },

        less: {
            dev: {
                options: {
                    paths: ["assets/less"]
                },
                    files: {
                        "<%= config.dest %>/assets/css/design.css": "<%= config.src %>/assets/less/design.less",
                        "<%= config.dest %>/assets/css/layout.css": "<%= config.src %>/assets/less/layout.less"
                }
            }
        },

        csslint: {
            assets: {
                options: {
                    'adjoining-classes': false,
                    'floats': false,
                    'font-sizes': false,
                    'important': false,
                    'text-indent': false,
                    'known-properties': false,
                    'duplicate-background-images': false
                },
                src: ['<%= config.dest %>/assets/css/**/*.css', '!<%= config.dest %>/assets/css/main.css', '!<%= config.dest %>/assets/css/normalize.css']
            }
        },

        jshint: {
            assets: ['<%= config.dest %>/assets/js/**/*.js']
        },

        clean: [ '<%= config.dest %>/**' ],

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= config.dest %>'
                    ]
                }
            }
        },

        watch: {
            main: {
                files: [
                    '<%= config.src %>/**/*'
                ],
                tasks: ['default']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                      '<%= config.dest %>/**/*'
                ]
            }
        }
    });

    grunt.loadNpmTasks('assemble')
    grunt.loadNpmTasks('grunt-newer')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-contrib-csslint')
    grunt.loadNpmTasks('grunt-contrib-connect')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('dev', [
        'default',
        'connect:livereload',
        'watch'
    ])

    grunt.registerTask('default', [
        'clean',
        'newer:less',
        'newer:copy',
        'newer:assemble',
        'csslint',
        'jshint'
    ])

};