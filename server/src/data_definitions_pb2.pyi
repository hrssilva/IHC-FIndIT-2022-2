from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class FinditMap(_message.Message):
    __slots__ = ["id", "maps", "name"]
    ID_FIELD_NUMBER: _ClassVar[int]
    MAPS_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    id: int
    maps: _containers.RepeatedCompositeFieldContainer[PartialMap]
    name: str
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ..., maps: _Optional[_Iterable[_Union[PartialMap, _Mapping]]] = ...) -> None: ...

class MapEdge(_message.Message):
    __slots__ = ["distance", "from_node", "id", "to_node"]
    DISTANCE_FIELD_NUMBER: _ClassVar[int]
    FROM_NODE_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    TO_NODE_FIELD_NUMBER: _ClassVar[int]
    distance: int
    from_node: float
    id: int
    to_node: float
    def __init__(self, id: _Optional[int] = ..., from_node: _Optional[float] = ..., to_node: _Optional[float] = ..., distance: _Optional[int] = ...) -> None: ...

class MapNode(_message.Message):
    __slots__ = ["id", "name", "type", "x", "y"]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    type: int
    x: float
    y: float
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ..., type: _Optional[int] = ..., x: _Optional[float] = ..., y: _Optional[float] = ...) -> None: ...

class PartialMap(_message.Message):
    __slots__ = ["edges", "id", "image_link", "name", "nodes"]
    EDGES_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_LINK_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NODES_FIELD_NUMBER: _ClassVar[int]
    edges: MapEdge
    id: int
    image_link: str
    name: str
    nodes: MapNode
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ..., image_link: _Optional[str] = ..., nodes: _Optional[_Union[MapNode, _Mapping]] = ..., edges: _Optional[_Union[MapEdge, _Mapping]] = ...) -> None: ...
