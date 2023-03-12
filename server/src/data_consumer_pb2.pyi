import data_definitions_pb2 as _data_definitions_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RecieveReply(_message.Message):
    __slots__ = ["map", "success"]
    MAP_FIELD_NUMBER: _ClassVar[int]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    map: _data_definitions_pb2.FinditMap
    success: bool
    def __init__(self, success: bool = ..., map: _Optional[_Union[_data_definitions_pb2.FinditMap, _Mapping]] = ...) -> None: ...

class RecieveRequest(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...
