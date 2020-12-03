import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import {Paper, Box, Typography,Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import CropFreeIcon from '@material-ui/icons/CropFree';

const Widget = (props) => {
  const widgetContainerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [activeDrags, setActiveDrags] = useState(0);
  const [fixe, setFixe] = useState(true);
  const [dimension, setDimension] = useState({
    height: "600px",
    width: "600px",
  });
  const [initialDimension, setInitialDimension] = useState({});
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
    setPosition({ x: y + ui.deltaY, y: y + ui.deltaY });
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
    setDimension({ height: "100%", width: "600px" });
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

  const dragHandlers = { onStart: onStart, onStop: onStop };

  useEffect(() => {
    props.fix ? fixWidget() : defixWidget();
  }, [props.fix]);

  return (
    <Draggable
      handle="strong"
      bounds="parent"
      onDrag={handleDrag}
      {...dragHandlers}
      position={position}
    >
      <Paper
        elevation={3}
        className="box no-cursor widgetContainer"
        style={{
          zIndex: props.zIndex,
          height: dimension.height,
          width: dimension.width,
        }}
        ref={widgetContainerRef}
        onMouseDownCapture={(e) => props.upWidget(props.id)}
      >
        <strong>
        <Box className="cursor widgetHeader " bgcolor="primary.main" color='primary.contrastText'>
          <Typography className="widgetTitle">{props.title}</Typography>

          <div className="widgetCustomize">
            <Fab size="small" className="maximizeWidget"  aria-label="add"><CropFreeIcon /></Fab>
            <Fab  size="small" className="closeWidget"  aria-label="add">< CloseIcon/></Fab>
          </div>
        </Box>
        </strong>
        <Paper className="widgetBody">{props.children}</Paper>
      </Paper>
    </Draggable>
  );
};

export default Widget;
