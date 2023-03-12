import data_definitions_pb2 as _data_definitions_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RegisterReply(_message.Message):
    __slots__ = ["success"]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...

class RegisterRequest(_message.Message):
    __slots__ = ["map"]
    MAP_FIELD_NUMBER: _ClassVar[int]
    map: _data_definitions_pb2.FinditMap
    def __init__(self, map: _Optional[_Union[_data_definitions_pb2.FinditMap, _Mapping]] = ...) -> None: ...
