import './app.css'
import App from './App.svelte'

/*
const app = new Map({
  target: document.getElementById('app'),
})*/
const app = new App({
  target: document.getElementById('app'),
})

export default app
