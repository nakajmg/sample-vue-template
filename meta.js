module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Project name"
    },
    description: {
      type: "string",
      message: "Project description",
      default: "A Vue.js project"
    },
    author: {
      type: "string",
      message: "Author"
    },
    question1: {
      type: "confirm",
      require: true,
      message: "question1:"
    },
    pre_question2: {
      type: "confirm",
      required: true,
      message: "pre_question2"
    },
    question2: {
      when: 'pre_question2',
      type: 'list',
      message: 'Choose one from the list',
      choices: [
        "choice1",
        "choice2",
        "choice3"
      ]
    },
    plugins: {
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['vue-router', 'vuex'],
      default: []
    }
  },
  filters: {
    ".eslintrc.js": "question1"
  },
  helpers: {
    isEnabled (list, check, opts) {
      if (list[check]) return opts.fn(this)
      else return opts.inverse(this)
    }
  },
  skipInterpolation: '*.vue'
}
