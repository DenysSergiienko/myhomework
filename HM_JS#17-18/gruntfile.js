module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
        dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      }
},
      uglify: {
        dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
  }
},


cssmin: {
  target: {
    files: {
      'css/dist/new.min.css': ['css/src/*.css']
    }
  }
}



  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify','cssmin']);

};