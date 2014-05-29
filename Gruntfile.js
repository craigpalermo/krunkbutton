module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.initConfig({
        watch: {
            livereload: {
                files: [],
                options: { livereload: true },
            },
            coffee: {
                files: ['coffee/**/*.coffee'],
                tasks: ['coffee:compile']
            },
            jade: {
                files: ['jade/**/*.jade'],
                tasks: ['jade:compile']
            },
            stylus: {
                files: ['stylus/**/*.styl'],
                tasks: ['stylus:compile']
            }
        },
        coffee: {
            compile: {
                options: {
                    join: true
                },
                files: [{
                    expand: true,
                    cwd: "coffee/",
                    src: ['**/*.coffee'],
                    dest: 'js',
                    ext: '.js'
                },{
                    expand: true,
                    cwd: "coffee/controllers/",
                    src: ['**/*.coffee'],
                    dest: 'js/controllers',
                    ext: '.js'
                }]
            }
        },
        jade: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "jade/",
                    src: ['index.jade'],
                    ext: '.html'
                }]
            }
        },
        stylus: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "stylus/",
                    src: ['**/*.styl'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        }
    });
};
