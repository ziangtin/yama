import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import APP_CONF from './config'


export function registerApps() {
  try {
    registerMicroApps(APP_CONF, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('before unmount', app)
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }
  addGlobalUncaughtErrorHandler((event) => console.log(event))
}
