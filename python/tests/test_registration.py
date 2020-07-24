####
# do not allow reg with empty email/pass
# do not allow reg with weak password (<8 chars)
# success if email is ok and pass meet requirements

import os
import unittest
from stories import RegisterUser
from models import User

class TestPhoneBook(unittest.TestCase):

    def setUp(self):
        self.user1 = User(email="John@example.com", password="122345")
        self.user2 = User(email="harvey@example.com", password="1456845")
        self.user3 = User(email="", password="1456845")
        self.user4 = User(email="harvey@example.com", password="")
        self.user5 = User(email="", password="")
        self.rg = RegisterUser()

    def test_can_find_empty_email_pass(self):
        self.assertEqual("",self.user5.email)
        self.assertEqual("",self.user4.password)

    def test_can_make_user_use_strong_pass(self):
        pass

    def test_can_successfully_work(self):
        pass



if __name__ == '__main__':
    unittest.main()
    