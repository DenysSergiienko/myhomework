module.exports = function(grunt) {

grunt.initConfig({ 

concat: {
    basic_and_extras: {
      files: {
        // Тут мы указываем SCSS файлы которые собираем(конкатениируем) в одни основной.
        'css/src/main.scss': ['css/src/reset.scss', 'css/src/style.scss', 'css/src/variables.scss'],
        // Тут конкатенируем все файлы Javascript, кроме библиотек.
      },
    },
},
uglify: {
  // Тут минифицируем весь Javascript
        dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
  }
},
sass: {
  // Тут из основного(собранного) SCSS компилируем основной CSS
    dist: {
      files: [{
        expand: true,
        cwd: 'css/src',
        src: ['main.scss'],
        dest: 'css/build',
        ext: '.css'
      }]
    }
},
watch: {
    sass: {
      // Тут следим за изменениями во всех SCSS файлах, запускаем по порядку задачи конкатенации, компиляции и потом минимизации  CSS
      files: ['css/src/*.scss'],
      tasks: ['concat', 'sass', 'cssmin'],
    }
},
cssmin: {
  // Тут минимизируем основной CSS-файл и выводим его в папку css
  target: {
    files: {
      'css/style.css': ['css/build/main.css']
    }
  }
}
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat', 'uglify','cssmin']);

};