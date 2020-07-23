class Users:

  def __init__(self, conn):
      self.conn = conn
  
  def create_user(self, user):
      email = user.email
      password = user.password
      verified = False
      qry = """insert into users(email, password, verified)
      values('{email}', '{password}', {verified})
      """
      result = DB.execute(qry)
      qry = """
      insert into tokens(user_id, token)
      values({result['id']}, {random_token_generator()})
      """
      DB.execute(qry)
  
  def check_user_details(self, email, password):
      qry = """
      SELECT * FROM users WHERE email = {email} AND password={password} verified = True LIMIT 1
      """
      result = DB.execute(qry)
      return True if result else False