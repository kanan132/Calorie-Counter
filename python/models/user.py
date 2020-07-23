class User:
  def __init__(self, email, password):
      self.email = email
      self.password = password
      self.verified = False
  
  def verify_user(self):
      self.verified = True