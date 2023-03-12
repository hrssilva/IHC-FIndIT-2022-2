import psycopg2
import grpc
from concurrent import futures

import data_definitions_pb2
import data_consumer_pb2
import data_consumer_pb2_grpc


class Consumer(data_consumer_pb2_grpc.ConsumerServicer):
    def RecieveMap(self, request:data_consumer_pb2.RecieveRequest, context):
        print(request.name)
        return data_consumer_pb2.RecieveReply(success=True, map=None)
    

def serve():
    port = '50022'
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    data_consumer_pb2_grpc.add_ConsumerServicer_to_server(servicer=Consumer(), server=server)
    server.add_insecure_port(address='[::]:' + port)
    server.start()
    print("Consumer server started, listening on " + port)
    server.wait_for_termination()


if __name__ == "__main__" :
    """
        Simple usage examples of psycopg2
    """
    # Connect to your postgres DB
    #conn = psycopg2.connect("dbname=test user=postgres")

    # Open a cursor to perform database operations
    #cur = conn.cursor()

    # Execute a query
    #cur.execute("SELECT * FROM my_data")

    # Retrieve query results
    #records = cur.fetchall()
    serve()