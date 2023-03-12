import psycopg2
import grpc
from concurrent import futures

import data_definitions_pb2
import data_provider_pb2
import data_provider_pb2_grpc


class Provider(data_provider_pb2_grpc.ProviderServicer):
    def RegisterMap(self, request:data_provider_pb2.RegisterRequest, context):
        print(request.map.maps)
        reply = data_provider_pb2.RegisterReply(True)
        return reply
    

def serve():
    port = '50021'
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    data_provider_pb2_grpc.add_ProviderServicer_to_server(Provider(), server)
    server.add_insecure_port('[::]:' + port)
    server.start()
    print("Provider server started, listening on " + port)
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