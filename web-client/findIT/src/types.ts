export enum NodeState {
  Normal,
  Hovered,
  Selected
}

export enum NodeType {
  point,
  house,
  building,
  room,
  stairs,
  elevator,
  door,
  parking,
  bus,
  taxi,
  store,
  bank,
  restaurant,
  market,
  pharmacy,
  hospital,
  school,
  park,
  gas,
  lab,
  tech,
  library,
  help
}

export interface Node {
  x: number;
  y: number;
  type: NodeType;
  name?: string;
  description?: string;
  state?: NodeState;
  qrcode?: Boolean;
}

export interface Edge {
  start: {
    map: number;
    node: number;
  };
  end: {
    map: number;
    node: number;
  };
  editing: boolean;
}

export interface Map {
  name: string;
  image: string;
  initial: boolean;
  nodes: Node[];
  edges: Edge[];
}

export interface Place {
  name: string;
  maps: Map[];
}

export const RADIUS_POINTS = 5;
export const HOVER_OFFSET = 2;

export enum NewMapSteps {
  InitialInfoStep,
  CreateNodesStep,
  SelectNodesStep,
  IntermediateNodesStep,
  ChooseQRCodesStep,
  SelectSourceStep
}
