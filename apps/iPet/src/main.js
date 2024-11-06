import {
	createSSRApp
} from "vue"
import App from "./App.vue"
import 'virtual:windi.css'
import 'virtual:svg-icons-register'
import 'amfe-flexible'
import { SvgIcon } from 'yama-ui'
export function createApp() {
	const app = createSSRApp(App)
	app.component('svg-icon', SvgIcon)
	return {
		app,
	}
}
