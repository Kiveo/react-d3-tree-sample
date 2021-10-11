import React from "react";
import styled from "styled-components";
import Tree from "react-d3-tree";
import { Point } from "react-d3-tree/lib/types/common";

interface TreeProps {
  data: {
    name: string;
    children: Array<any>;
  };
}

const StyledTree = styled.div`
  background: rgba(230, 240, 250);
  height: 100%;
  height: 500px;
  width: 100%;
`;

const TreeSC = ({ data }: TreeProps) => {
  const treeRef = React.useRef<HTMLDivElement>(null);
  const [translateDim, setTranslateDim] = React.useState({ x: 1, y: 1 });

  React.useEffect(() => {
    if (treeRef.current) {
      const dimObj = treeRef?.current.getBoundingClientRect();

      setTranslateDim({
        x: dimObj.width / 2,
        y: dimObj.height / 10
      } as Point);
    }
  }, []);

  return (
    <StyledTree ref={treeRef}>
      <Tree data={data} orientation="vertical" translate={translateDim} />
    </StyledTree>
  );
};

export default TreeSC;
