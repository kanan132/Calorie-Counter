class LoginUser:

    def __init__(self, repository):
      self.repository = repository

    def run(self, email, password):
      res = self.repository.check_user_details(email, password)
      if res == True:  
        return {"status": "OK", "message": "Successfull login"}
      return {"status": "OK", "message": "Login problem"}



