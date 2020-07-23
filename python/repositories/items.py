class Items:

  def __init__(self, conn):
      self.conn = conn
  
  def create_item(self, item):
      qry = """
      insert into items(name, size, created_at)
      values({item.name}, {item.size}, {item.created_at})
      """
      DB.execute(qry)
      return True