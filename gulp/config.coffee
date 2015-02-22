config = {}
config.ROOT_PATH           = path.join(__dirname, '..')
config.BASE_SRC_PATH       = path.join(config.ROOT_PATH,  'src')
config.BASE_GENERATED_PATH = path.join(config.ROOT_PATH, '.generated')

config.clean = [
  '.generated/*'
  '!.generated/package.json'
  '!.generated/components'
]

config.assets =
  src: [
    path.join(config.BASE_SRC_PATH, 'img', '**', '*')
    path.join(config.BASE_SRC_PATH, 'fonts', '**', '*')
    path.join(config.BASE_SRC_PATH, '**', '*.html')
    path.join(config.BASE_SRC_PATH, 'package.json')
  ]
  dest: config.BASE_GENERATED_PATH
  watch: path.join(config.BASE_SRC_PATH, '**', '*')

config.css =
  src: path.join(config.BASE_SRC_PATH, 'css', 'main.styl')
  dest: path.join(config.BASE_GENERATED_PATH, 'css')
  watch: path.join(config.BASE_SRC_PATH, 'css', '**', '*')

config.js =
  src: path.join(config.BASE_SRC_PATH, 'js', '**', '*.coffee')
  dest: path.join(config.BASE_GENERATED_PATH, 'js')
  vendor: ''
  watch: path.join(config.BASE_SRC_PATH, 'js', '**', '*')

config.ejs =
  src: path.join(config.BASE_SRC_PATH, '**', '*.ejs')
  dest: path.join(config.BASE_GENERATED_PATH)
  watch: path.join(config.BASE_SRC_PATH, '**', '*.ejs')

config.symlink =
  src: [
    path.join(config.ROOT_PATH, 'node_modules')
    path.join(config.ROOT_PATH, 'bower_components')
  ]
  dest: path.join(config.BASE_GENERATED_PATH)

config.test = ''

module.exports = config
