module.exports = {
  "extends": "react-app",
  "plugins": [ "flowtype" ],
  "parser": "babel-eslint",
  "rules": {
    "strict": 0,
    "indent": [
        "warn",
        2,
        {
            "SwitchCase": 1
        }
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "warn",
        "double"
    ],
    "allowTemplateLiterals": 0,
    "semi": [
        "warn",
        "always"
    ]
  }
}