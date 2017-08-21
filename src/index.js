const Kanban = require('./Kanban.vue')
module.exports = Kanban

Component.install = Vue => Vue.component(Kanban.name, Kanban)
Kanban.version = proccess.env.VERSION

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Kanban)
}
