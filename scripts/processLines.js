const { arrowCreate, DIRECTION } = window;
const firstArrow = arrowCreate({
  className: "arrow",
  from: {
    direction: DIRECTION.RIGHT,
    node: document.querySelector(".step--1").querySelector(".step__dot"),
    translation: [-0.2, 0],
  },
  to: {
    direction: DIRECTION.LEFT,
    node: document.querySelector(".step--2").querySelector(".step__dot"),
    translation: [0.2, 0],
  },
});
const secondArrow = arrowCreate({
  className: "arrow",
  from: {
    direction: DIRECTION.LEFT,
    node: document.querySelector(".step--2").querySelector(".step__dot"),
    translation: [0.6, 0],
  },
  to: {
    direction: DIRECTION.RIGHT,
    node: document.querySelector(".step--3").querySelector(".step__dot"),
    translation: [-0.7, 0],
  },
});
const thirdArrow = arrowCreate({
  className: "arrow",
  from: {
    direction: DIRECTION.RIGHT,
    node: document.querySelector(".step--3").querySelector(".step__dot"),
    translation: [-0.4, 0],
  },
  to: {
    direction: DIRECTION.LEFT,
    node: document.querySelector(".step--4").querySelector(".step__dot"),
    translation: [0.4, 0],
  },
});
const fourthArrow = arrowCreate({
  className: "arrow",
  from: {
    direction: DIRECTION.LEFT,
    node: document.querySelector(".step--4").querySelector(".step__dot"),
    translation: [0.3, 0],
  },
  to: {
    direction: DIRECTION.RIGHT,
    node: document.querySelector(".step--5").querySelector(".step__dot"),
    translation: [-0.3, 0],
  },
});
const fifthArrow = arrowCreate({
  className: "arrow",
  from: {
    direction: DIRECTION.RIGHT,
    node: document.querySelector(".step--5").querySelector(".step__dot"),
    translation: [-0.4, 0],
  },
  to: {
    direction: DIRECTION.LEFT,
    node: document.querySelector(".step--6").querySelector(".step__dot"),
    translation: [0.4, 0],
  },
});
const sixthArrow = arrowCreate({
  className: "arrow",
  from: {
    direction: DIRECTION.LEFT,
    node: document.querySelector(".step--6").querySelector(".step__dot"),
    translation: [0.2, 0],
  },
  to: {
    direction: DIRECTION.RIGHT,
    node: document.querySelector(".step--7").querySelector(".step__dot"),
    translation: [-0.2, 0],
  },
});
const seventhArrow = arrowCreate({
  className: "arrow",
  from: {
    direction: DIRECTION.RIGHT,
    node: document.querySelector(".step--7").querySelector(".step__dot"),
    translation: [-0.3, 0],
  },
  to: {
    direction: DIRECTION.LEFT,
    node: document.querySelector(".step--8").querySelector(".step__dot"),
    translation: [0.3, 0],
  },
});

let screenWidth = document.documentElement.clientWidth;

let deletedChilds = false;

const addLines = () => {
  document.body.appendChild(firstArrow.node);
  document.body.appendChild(secondArrow.node);
  document.body.appendChild(thirdArrow.node);
  document.body.appendChild(fourthArrow.node);
  document.body.appendChild(fifthArrow.node);
  document.body.appendChild(sixthArrow.node);
  document.body.appendChild(seventhArrow.node);
};

addLines();

document.body.onresize = function () {
  screenWidth = document.documentElement.clientWidth;

  if (screenWidth > 750) {
    if (deletedChilds) {
      addLines();
      deletedChilds = false;
    }
  } else {
    if (!deletedChilds) {
      document.body.removeChild(firstArrow.node);
      document.body.removeChild(secondArrow.node);
      document.body.removeChild(thirdArrow.node);
      document.body.removeChild(fourthArrow.node);
      document.body.removeChild(fifthArrow.node);
      document.body.removeChild(sixthArrow.node);
      document.body.removeChild(seventhArrow.node);

      deletedChilds = true;
    }
  }
};
