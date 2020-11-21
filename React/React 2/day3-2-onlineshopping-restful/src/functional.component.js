import React from "react";

// fucntional component
// light weight component
// by default the method return it become the render out
// doesnt have access to lifecycle methods
// doesnt have state
export default function Message(props) {
  return <h1> Hello From functionl component {props.msg}</h1>;
}

//react16.8 and above (hooks)
// hooks for functional components
// functional components doesnt have stae
// so we use hooks here
// state ==> State Hook(16.8+ )
// life cycle methods ==> EffectHook(16.8+)
