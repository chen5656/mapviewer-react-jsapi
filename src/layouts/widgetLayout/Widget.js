import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { Paper, Box, Typography, Fab } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CropFreeIcon from "@material-ui/icons/CropFree";

const Widget = (props) => {
  const widgetContainerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [activeDrags, setActiveDrags] = useState(0);
  const [fixe, setFixe] = useState(true);
  const [dimension, setDimension] = useState({});
  const [initialDimension, setInitialDimension] = useState(() => {
    if (props.initialDimension)
      return {
        height: props.initialDimension.height,
        width: props.initialDimension.width,
      };
    else
      return {
        height: "200px",
        width: "200px",
      };
  });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [display, setDisplay] = useState("flex");
  const [maximize, setMaximize] = useState(true);

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
    setPosition({ x: y + ui.deltaY, y: y + ui.deltaY });
  };
  const onStart = () => {
    let ad = activeDrags + 1;
    setActiveDrags(ad);
    return fixe;
  };
  const onStop = () => {
    let ad = activeDrags - 1;
    setActiveDrags(ad);
    setPosition({ x: deltaPosition.x, y: deltaPosition.y });
  };
  const fixWidget = () => {
    setInitialPosition({ ...position });
    setInitialDimension({
      height: widgetContainerRef.current.offsetHeight,
      width: widgetContainerRef.current.offsetWidth,
    });
    setPosition({ x: 0, y: 0 });

    setDeltaPosition({ x: 0, y: 0 });
    setFixe(false);
    setDimension({ height: "100%", width: "500px" });
  };
  const defixWidget = () => {
    setFixe(true);
    setPosition({ ...initialPosition });
    setDeltaPosition({ ...initialPosition });
    setDimension({
      height: initialDimension.height,
      width: initialDimension.width,
    });
  };
  const closeWidget = () => {
    setDisplay("none");
  };
  const maximizeWidget = () => {
    if (maximize) {
      setInitialDimension({
        height: widgetContainerRef.current.offsetHeight,
        width: widgetContainerRef.current.offsetWidth,
      });
      setInitialPosition({ ...position });
      setDimension({ height: "100%", width: "100%" });
      setPosition({ x: 0, y: 0 });
      setMaximize(!maximize);
      setFixe(false);
    } else {
      setDimension({ ...initialDimension });
      setPosition({ ...initialPosition });
      setMaximize(!maximize);
      setFixe(true);
    }
  };

  useEffect(() => {
    props.fix ? fixWidget() : defixWidget();
  }, [props.fix]);

  return (
    <Draggable
      handle="strong"
      bounds="parent"
      onDrag={handleDrag}
      onStart={onStart}
      onStop={onStop}
      position={position}
    >
      <div
        className=" widgetContainer"
        style={{
          zIndex: props.zIndex,
          height: dimension.height,
          width: dimension.width,
          display: display,
        }}
        ref={widgetContainerRef}
        onMouseDownCapture={(e) => props.upWidget(props.id)}
      >
        <strong>
          <div className="widgetHeader bg-light">
            <p className="widgetTitle">{props.title}</p>

            <div className="widgetCustomize">
              <div
                size="small"
                className="maximizeWidget"
                onClick={maximizeWidget}
              >
                <CropFreeIcon />
              </div>
              <div className="closeWidget" onClick={closeWidget}>
                <CloseIcon />
              </div>
            </div>
          </div>
        </strong>
        <div className="widgetBody bg-light">{props.children}</div>
      </div>
    </Draggable>
  );
};

export default Widget;
