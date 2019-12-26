import React from "react";
import PrismCode from "react-prism";

const CodeBlock = props => {
  const makeProp = () => {
    let propBox = "";
    if (props.color !== "#000000") propBox = '\ncolor="' + props.color;
    if (props.bgColor !== "#ffffff") propBox += '\nbgColor="' + props.color;
    if (props.opacity !== "70") propBox += '\nopacity="' + props.opacity;
    if (props.preloaderTop !== "40%")
      propBox += '\npreloaderTop="' + props.preloaderTop;
    return propBox;
  };

  const classBased = () => (
    <PrismCode component="pre" className="language-javascript">
      {`
      {/* Pass a state in when props, can be used with class based or hooks */}
      {/* Just wrap your content with HoldMyUi */}

      <HoldMyUi 
        when={${props.loading}}
        preloader="${props.preloader || "Ring"}"${makeProp()}
      >
      {/* Content Here */}

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum
          ullam aspernatur alias mollitia delectus harum ex eos dolor iste eaque
          molestias, possimus, ab sequi id quos animi iusto repellendus.
        </h1>

      </HoldMyUi>

`}
    </PrismCode>
  );

  return classBased();
};

export default CodeBlock;
