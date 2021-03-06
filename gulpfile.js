const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const paths = {
  styles: {
    src: ["./assets/css/*.css"],
    dest: "./dist/",
  },
  html: {
    src: ["*.html"],
    dest: "./dist/",
  },
};

/* STYLES */
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(postcss([autoprefixer({ grid: true })]))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

/* HTML */
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

/* FUNCTIONS */
function watch() {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src, html);
}

/* GULP TASKS */
exports.default = watch;
