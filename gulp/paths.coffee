paths = {}
paths.ROOT_PATH           = path.join(__dirname, '..')
paths.BASE_SRC_PATH       = path.join(paths.ROOT_PATH,  'src')
paths.BASE_GENERATED_PATH = path.join(paths.ROOT_PATH, 'app')

paths.clean = [
  'app/*'
  '!app/components'
]

paths.assets =
  src: [
    path.join(paths.BASE_SRC_PATH, 'img', '**', '*'),
    path.join(paths.BASE_SRC_PATH, 'fonts', '**', '*'),
    path.join(paths.BASE_SRC_PATH, '**', '*.html'),
    path.join(paths.BASE_SRC_PATH, 'package.json')
  ]
  dest: paths.BASE_GENERATED_PATH
  watch: paths.BASE_SRC_PATH

paths.css =
  src: path.join(paths.BASE_SRC_PATH, 'css', 'main.styl')
  dest: path.join(paths.BASE_GENERATED_PATH, 'css')
  watch: path.join(paths.BASE_SRC_PATH, 'css', '**', '*')

paths.js =
  src: path.join(paths.BASE_SRC_PATH, 'js', '**', '*.coffee')
  dest: path.join(paths.BASE_GENERATED_PATH, 'js')
  vendor: ''
  watch: path.join(paths.BASE_SRC_PATH, 'js', '**', '*')

paths.ejs =
  src: path.join(paths.BASE_SRC_PATH, '**', '*.ejs')
  dest: path.join(paths.BASE_GENERATED_PATH)
  watch: path.join(paths.BASE_SRC_PATH, '**', '*.ejs')

paths.test = ''

module.exports = paths