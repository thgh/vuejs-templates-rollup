import vue from 'rollup-plugin-vue2'
import scss from 'rollup-plugin-scss'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const plugins = [
  vue(),
  scss(),
  buble({ exclude: 'node_modules/**' }),
  nodeResolve({ browser: true, jsnext: true }),
  commonjs()
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(uglify())
}

if (process.env.NODE_ENV === 'development') {
  plugins.push(livereload())
  plugins.push(serve({
    open: true
  }))
}

export default {
  entry: 'src/main.js',
  dest: 'dist/build.js',
  sourceMap: true,
  plugins
}
