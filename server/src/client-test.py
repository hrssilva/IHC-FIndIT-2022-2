import grpc 

import data_consumer_pb2
import data_consumer_pb2_grpc

def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    print("Will try to recieve map...")
    with grpc.insecure_channel('localhost:50022') as channel:
        stub = data_consumer_pb2_grpc.ConsumerStub(channel=channel)
        response = stub.RecieveMap(data_consumer_pb2.RecieveRequest(name="Ufrgs Campus do Vale"))
    print(f"Consumer client received: {response.success}")


if __name__ == '__main__':
    run()