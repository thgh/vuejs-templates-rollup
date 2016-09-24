import vue from 'rollup-plugin-vue2'
import css from 'rollup-plugin-css-only'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const plugins = [
  vue(),
  css(),
  buble({
    exclude: 'node_modules/**'
  }),
  nodeResolve({ browser: true, jsnext: true }),
  commonjs()
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(uglify())
}

export default {
  entry: 'src/main.js',
  dest: 'dist/build.js',
  plugins
}
