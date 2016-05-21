module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.js',
            },
        },
        uglify: {
            dist: {
                src: ['js/dist/script.main.js'],
                dest: 'js/script.min.js'
            }
        },
        concat_css: {
            options: {

            },
            all: {
                src: ['css/src/*.css'],
                dest: 'css/dist/style.main.css'
            },
        },
    });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('css', ['concat_css']);

};
