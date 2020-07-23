class AddItem:
    def __init__(self, repo):
      self.repo = repo
    

    def run(self, item):
      result = self.repo.create_item(item)
      if result:
        return {"status": "OK", "message": "Item added"}
      return {"status": "FAIL", "message": "Error while adding item"}


