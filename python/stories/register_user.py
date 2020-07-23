class RegisterUser:

    def __init__(self, repository):
      self.repository = repository

    def run(self, user):
      self.validate_user(user)
      self.persist_user(user)
      return {"status": "OK", "message": "User registered"}


    def validate_user(self):      
      return True # False

    def persist_user():
      self.repository.create_user(user)
      return True