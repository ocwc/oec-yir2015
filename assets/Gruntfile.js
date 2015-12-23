module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      develop: {
        options: {
          style: 'expanded',
          sourceMap: true,
        },

        files: {
          '../css/style.dev.css': ['scss/style.scss']
        }
      }
    },

    postcss: {
      build: {
        options: {
          map: false,
          processors: [
            require('autoprefixer')({browsers: ['last 1 versions', 'ie >= 10']}),
            require('cssnano')
          ]
        },
        files: {
          '../css/style.min.css': ['../css/style.dev.css']
        }
      }
    },

    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015'],
            comments: false
        },
        dist: {
            files: {
                '../js/script.js': ['js/*.js']
            }
        }
    },

    uglify: {
      develop: {
        options: {
          mangle: false,
          compress: false,
          nonull: true,
          sourceMap: true
        },
        files: {
          '../js/plugins.js': [
            // 'bower_components/lodash/lodash.min.js',
          ]
        }
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['scss/*.scss'],
        tasks: ['sass:develop'],
        options: {
          spawn: false
        }
      },
      uglify: {
        files: ['js/*.js'],
        tasks: ['babel'],
        options: {
          spawn: false
        }
      }
    }

  });

  grunt.registerTask('build', ['sass:develop', 'postcss:build', 'babel', 'uglify']);
  grunt.registerTask('develop', ['sass:develop', 'babel', 'uglify', 'watch']);
  grunt.registerTask('default', ['build']);

};
