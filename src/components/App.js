import '../styles/App.scss';
var navArr=[
  {"url":"/","name":"首页"},
  {"url":"/todo","name":"todo"},

];

import template from './App.rt';
export default function App({children}) {
  return template.apply({"children":children,navArr:navArr});
}
