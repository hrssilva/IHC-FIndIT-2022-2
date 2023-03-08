import psycopg2


if __name__ == "__main__" :
    """
        Simple usage examples of psycopg2
    """
    # Connect to your postgres DB
    conn = psycopg2.connect("dbname=test user=postgres")

    # Open a cursor to perform database operations
    cur = conn.cursor()

    # Execute a query
    cur.execute("SELECT * FROM my_data")

    # Retrieve query results
    records = cur.fetchall()