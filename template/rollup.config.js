import vue from 'rollup-plugin-vue2'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

const plugins = [
  vue(),
  buble({
    exclude: 'node_modules/**'
  }),
  nodeResolve({ browser: true, jsnext: true, main: true }),
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
