---
title: sample react-dnd with typescript
date: "2020-09-13T11:40:32.169Z"
description: How to use react-dnd with typescript
lang: "en"
---

react-dnd is pretty popular package, but it was a bit difficult to know how to use for me.
So, I made a simple sample code for react. I modified the [official sample code](https://react-dnd.github.io/react-dnd/examples/tutorial).

# Setup

```
yarn add styled-components
yarn add react-dnd
yarn add react-dnd-html5-backend
```

# Main code

```js:title=index.tsx
import React from "react";
import ReactDOM from "react-dom";
import Sample from "./sample";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Sample />
      </DndProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Sample

```js:title=Sample.tsx
import React, { useState } from "react";
import SampleDrag from "./SampleDrag";
import SampleDrop from "./SampleDrop";

const SampleChild = (props: { selected: boolean }) => {
  if (props.selected) {
    return <SampleDrag />;
  } else {
    return null;
  }
};

export default () => {
  const [selected, setSelect] = useState(0);
  const indexs = [0, 1];

  return (
    <React.Fragment>
      {indexs.map((index) => {
        return (
          <SampleDrop index={index} onDrop={() => setSelect(index)}>
            <SampleChild selected={selected === index} />
          </SampleDrop>
        );
      })}
    </React.Fragment>
  );
};
```

# SampleDrag

```js:title=SampleDrag.tsx
import React from "react";
import { useDrag } from "react-dnd";

const knightStyle: React.CSSProperties = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};

export default () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "test" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        Drag
      </div>
    </>
  );
};
```

# SampleDrop

```js:title=SampleDrop.tsx
import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;

export interface BoardSquareProps {
  index: number;
  onDrop: (index: number) => void;
  children: any;
}

export default ({ index, onDrop, children }: BoardSquareProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: "test",
    drop: () => {
      onDrop(index);
    },
  });

  console.log(isOver);
  console.log(children);

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Box>{children}</Box>
    </div>
  );
};
```
